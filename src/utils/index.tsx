import { AxiosError } from "axios";
import { toast } from "react-toastify";

export function handleErrors(err: any) {
  return Object.keys(err?.response?.data).map((key) => {
    toast.error(`${key}: ${err?.response?.data[key]}`);
  });
}
