import { AxiosError } from "axios";

type API_ERROR_RESPONSE = {
  type?: string;
  message?: string;
};

export type API_ERROR = AxiosError<API_ERROR_RESPONSE>;
