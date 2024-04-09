import * as yup from "yup";

export const SignUpSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  firstName: yup.string().required("This field is required"),
  lastName: yup.string().required("This field is required"),
  password: yup.string().required("Password is required"),
});
