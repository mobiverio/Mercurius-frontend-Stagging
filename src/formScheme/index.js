import * as yup from "yup";

export const SignUpSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Please enter your email address"),
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  password: yup.string().required("Password is required"),
  terms: yup.string().required("Accept our terms and policy document"),
});

export const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Please enter your email address"),
  password: yup.string().required("Password is required"),
});
