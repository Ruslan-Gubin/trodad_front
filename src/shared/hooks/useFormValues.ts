import { useState } from "react";
import { z } from "zod";

const getEmptyErrorsObj = <T>(obj: T): T => {
  const result: Record<string, string> = {};
  for (let field in obj) {
    result[field] = "";
  }
  return result as T;
};

interface FormValuesProps<T> {
  initValues: T;
  payloadSchema?: z.Schema;
}

const useFormValues = <T extends object>({
  initValues,
  payloadSchema,
}: FormValuesProps<T>) => {
  const [values, setValues] = useState<T>(initValues);
  const [errors, setErrors] = useState<T>(() =>
    getEmptyErrorsObj<T>(initValues)
  );
  const [isChange, setIsChange] = useState<boolean>(false);

  const setErrorValue = (value: string, field: keyof T) => {
    setErrors((prev) => ({ ...prev, [field]: value }));
  };

  const resetIsChange = () => {
    setIsChange(false);
  };

  function removeEmptyStrings(obj: object) {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, value]) => value !== "" && value !== 0)
    );
  }

  /** поменять на эту функцию если бек принимает поля с null */
  function replaceEmptyStringsWithNull(obj: object) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key,
        value === "" || value === 0 ? null : value,
      ])
    );
  }

  const validateValues = (): null | T => {
    if (payloadSchema) {
      const validationResult = payloadSchema.safeParse(values);

      if (!validationResult.success) {
        const newErrors: Record<string, string> = {};

        const errors = validationResult.error.format();

        for (let field in errors) {
          //@ts-ignore
          const currentError: string[] = errors[field]._errors;
          if (currentError && Array.isArray(currentError)) {
            newErrors[field] = currentError.join("");
          }
        }

        setErrors((prev) => ({ ...prev, ...newErrors }));

        return null;
      }

      return removeEmptyStrings(validationResult.data) as T;
    }
    return null;
  };

  const resetErrorField = (field: keyof T) => {
    if (!errors) return;
    setErrorValue("", field);
  };

  const resetInput = () => {
    setValues(() => initValues);
  };

  const changeInputs = (value: string | boolean | number, field: keyof T) => {
    if (errors && errors.hasOwnProperty(field)) {
      resetErrorField(field);
    }

    if (!isChange) {
      setIsChange((prev) => !prev);
    }

    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const setInitValues = (object: T) => {
    setValues(() => ({ ...object }));
  };

  return {
    resetIsChange,
    values,
    errors,
    changeInputs,
    validateValues,
    resetInput,
    setErrorValue,
    isChange,
    setInitValues,
  };
};

export { useFormValues };
