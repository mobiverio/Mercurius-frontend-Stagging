import * as yup from "yup";

export const SignUpSchema = yup.object().shape({
  email: yup.string().required("email is required"),
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  password: yup.string().min(5).required("password is required"),
});
