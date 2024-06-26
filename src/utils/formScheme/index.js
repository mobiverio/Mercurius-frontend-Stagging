import * as yup from "yup";

export const SignUpSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Please enter your email address"),
  name: yup.string().required("Enter your name"),
  phone: yup.string().required("Phone number required"),
  password: yup.string().required("Password is required"),
  password_confirmation: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  terms: yup.string().required("Accept our terms and policy document"),
  address: yup.string().required("Enter address"),
  city: yup.string().required("Enter city"),
  zip_code: yup.string().required("Zip code is required"),
});

export const updateProfileSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Please enter your email address"),
  name: yup.string().required("Enter your name"),
  phone: yup.string().required("Phone number required"),
  address: yup.string().required("Enter address"),
  city: yup.string().required("Enter city"),
  zip_code: yup.string().required("Zip code is required"),
});

export const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Please enter your email address"),
  password: yup.string().required("Password is required"),
});

export const updatePasswordSchema = yup.object().shape({
  password: yup.string().required("Old Password is required"),
  new_password: yup.string().required("Enter New Password"),
  c_new_password: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("new_password"), null], "Passwords must match"),
});
