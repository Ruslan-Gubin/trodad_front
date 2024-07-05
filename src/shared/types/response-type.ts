export interface ResponseType<T> {
  status: "success" | "error";
  message: null | string;
  data: T | null;
}