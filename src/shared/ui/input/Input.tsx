import ErrorInputSvg from "../../../../public/assets/svg/input-error.svg";

import styles from "./Input.module.scss";


type Props = {
  value: string;
  error: string;
  placeholder: string;
  onChange: (value: string, field: string) => void;
  field: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

const Input = ({ value, error, placeholder, field, onChange, onBlur, onFocus }: Props) => {


  return (
     <label className={styles.label}>
              {(value.length > 0 || error.length > 0) && (
                <p
                  className={
                    error.length > 0
                      ? `${styles.labelText} ${styles.labelTextError}`
                      : styles.labelText
                  }
                >
                  {error.length > 0 ? error : placeholder}
                </p>
              )}
              {error.length > 0 && (
                <ErrorInputSvg className={styles.errorInput} />
              )}
              <input
                className={styles.input}
                value={value}
                onChange={(e) => onChange(e.target.value, field)}
                placeholder={placeholder}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            </label>
  );
};

export default Input;