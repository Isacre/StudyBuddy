import { AxiosError } from "axios";
import { toast } from "react-toastify";

export function handleErrors(err: any) {
  return Object.keys(err?.response?.data).map((key) => {
    toast.error(`${key}: ${err?.response?.data[key]}`);
  });
}

/** If the given parameter value is different than an empty string the function will define to the params object in the format [paramName]: paramValue */
export function addParamIfNotEmpty(params: { [parameterName: string]: any }, paramName: string, paramValue: any) {
  if (paramValue !== "") {
    params[paramName] = paramValue;
  }
}

export function handleEnterKey(event: React.KeyboardEvent<HTMLInputElement>, OnEnterFn: Function) {
  if (event.key === "Enter") {
    OnEnterFn();
  }
}
