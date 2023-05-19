import * as yup from "yup";

export const SignIn = (userInfo) => {
  let schema = yup.object().shape({
    email: yup
      .string()
      .email("email not valid")
      .min(8)
      .required("Enter your email"),
    password: yup
      .string()
      .min(8, "password must be at least 8 characters")
      .max(16, "long password , at most 16 character ")
      .matches(/[a-z]/, "password should contain at least one small letter")
      .matches(/[A-Z]/, "password should contain at least one capital letter")
      .matches(/\d/, "password should contain at least one number")
      .matches(
        /[^A-Za-z0-9]/,
        "password should contain at least one special characters"
      )
      .required("password is a required field"),
  });
  return schema.validate(userInfo, { abortEarly: false });
};
