import type { ReactNode } from "react";

export interface LOGIN_PAYLOAD {
  emailId: string;
  password: string;
}

export interface SIGNUP_FORM_FIELD {
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
  skill: string;
  about: string;
  photoUrl: string;
  emailId: string;
  password: string;
}

export interface SIGNUP_PASSWORD {
    children: ReactNode;
    value: string;
    theme: string;
}
