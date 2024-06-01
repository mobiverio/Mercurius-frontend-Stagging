import * as yup from "yup";

export const SignUpSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Please enter your email address"),
  name: yup.string().required("Enter your name"),
  phone: yup.number().required("Phone number required"),
  password: yup.string().required("Password is required"),
  password_confirmation: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  terms: yup.string().required("Accept our terms and policy document"),
  address: yup.string().required("Enter address"),
  city: yup.string().required("Enter city"),
  zip_code: yup.number().required("Zip code is required"),
});

export const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Please enter your email address"),
  password: yup.string().required("Password is required"),
});
