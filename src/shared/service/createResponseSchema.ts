import { z } from "zod";

export function createResponseSchema<DataType extends z.ZodTypeAny>(
  dataResponse: DataType
) {
  return z.object({
    data: dataResponse.nullable(),
    status: z.enum(["error", "success"]),
    message: z.string().nullable(),
  });
}