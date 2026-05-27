import {
  isValidAge,
  isValidEmail,
  isValidName,
  isValidPassword,
  isValidUrl,
} from "../../utils/valildator";
import type { SIGNUP_FORM_FIELD } from "./type";

export const signupValidation = (formFields: SIGNUP_FORM_FIELD) => {
  const errorObj = {
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    about: "",
    photoUrl: "",
    emailId: "",
    password: "",
  };

  const requiredFields = ["firstName", "emailId", "password"];

  for (const key in formFields) {
    if (requiredFields.includes(key)) {
      if (key === "firstName") {
        if (!formFields[key]) {
          errorObj[key] = "This field is required";
        } else if (!isValidName(formFields[key])) {
          errorObj[key] =
            "First name should be between 2 and 80 alpha characters";
        } else {
          errorObj[key] = "";
        }
      } else if (key === "emailId") {
        if (!formFields[key]) {
          errorObj[key] = "This field is required";
        } else if (!isValidEmail(formFields[key])) {
          errorObj[key] = "Please enter a valid email address";
        } else {
          errorObj[key] = "";
        }
      } else if (key === "password") {
        if (!formFields[key]) {
          errorObj[key] = "This field is required";
        } else if (!isValidPassword(formFields[key])) {
          errorObj[key] =
            "Password must be at least 8 characters and include uppercase, lowercase, number and special character";
        } else {
          errorObj[key] = "";
        }
      }
    } else {
      if (key === "lastName") {
        if (formFields[key].length && !isValidName(formFields[key])) {
          errorObj[key] =
            "Last name should be between 2 and 80 aplpha characters";
        } else {
          errorObj[key] = "";
        }
      } else if (key === "age") {
        if (formFields[key].length && !isValidAge(formFields[key])) {
          errorObj[key] = "Age must be atleast 18";
        } else {
          errorObj[key] = "";
        }
      } else if (key === "photoUrl") {
        if (formFields[key].length && !isValidUrl(formFields[key])) {
          errorObj[key] = "Photo url is not valid";
        } else {
          errorObj[key] = "";
        }
      } else if (key === "about") {
        if (formFields[key].length > 300) {
          errorObj[key] = "Maximum 300 charaters are allowed";
        } else {
          errorObj[key] = "";
        }
      }
    }
  }

  const isError = Object.values(errorObj).some((value) => Boolean(value));
  return {
    isError,
    errorObj,
  };
};
