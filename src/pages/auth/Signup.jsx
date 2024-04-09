import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "../../formScheme/index";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";

const defaultValues = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  terms: false,
};

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState("password");

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const handlePassword = () => {
    if (type === "password") {
      setShowPassword(true);
      setType("text");
    } else {
      setShowPassword(false);
      setType("password");
    }
  };

  return (
    <main className="w-full h-screen text-sm">
      <div className="flex justify-end items-start p-2">
        <p className="">
          Already have an account?{" "}
          <Link to="/signin">
            <span className="font-semibold">Sign In</span>
          </Link>
        </p>
      </div>
      <div className="w-fit mx-auto text-center mb-4 font-mono">
        <h1 className="text-3xl">Mercurius</h1>
        <p className="">Elegance Redefined. Innovation Redesigned</p>
      </div>
      <div className="shadow-md md:w-1/3 mx-auto flex flex-col justify-center items-center px-4 py-8 rounded">
        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label
              className="font-semibold text-sm sm:text-[1.4rem]"
              htmlFor="signIn"
            >
              Sign up
            </label>
            <div className="relative">
              <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <input
                    className="border w-full my-2 rounded-xl px-4 py-3 outline-none"
                    type="email"
                    placeholder="email address"
                    autoFocus
                    value={value}
                    onChange={onChange}
                  />
                )}
              />

              <span className="text-red-400 text-sm absolute top-5 right-5">
                {errors?.email?.message}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4 relative my-4">
              <Controller
                name="firstName"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <input
                    className="border w-full my-2 rounded-xl px-4 py-3 outline-none"
                    type="text"
                    placeholder="first name"
                    value={value}
                    onChange={onChange}
                    error={Boolean(errors.firstName)}
                  />
                )}
              />
              <span className="text-red-400 text-sm absolute -bottom-3 left-2">
                {errors?.firstName?.message}
              </span>
              <Controller
                name="lastName"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <input
                    type="text"
                    className="border w-full my-2 rounded-xl px-4 py-3 outline-none"
                    placeholder="last name"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              <span className="text-red-400 text-sm absolute -bottom-3 right-2">
                {errors?.lastName?.message}
              </span>
            </div>
            <div className="relative">
              {showPassword ? (
                <BsEye
                  onClick={handlePassword}
                  className="absolute right-6 top-[37%] cursor-pointer"
                  size={20}
                />
              ) : (
                <BsEyeSlash
                  onClick={handlePassword}
                  className="absolute right-6 top-[37%] cursor-pointer"
                  size={20}
                />
              )}
              <Controller
                name="password"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field: { value, onChange } }) => (
                  <input
                    className="border w-full my-2 rounded-xl px-4 py-3 outline-none"
                    type={type}
                    placeholder="password"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              <span className="text-red-400 text-sm absolute -bottom-3 right-2">
                {errors?.password?.message}
              </span>
            </div>
            <Link to="/resetPassword">
              <p className="font-bold -mt-1 cursor-pointer">Forgot password?</p>
            </Link>
            <button
              className="bg-[#00003C] text-white font-semibold w-full my-4 rounded-xl px-4 py-3 outline-none"
              type="submit"
            >
              Sign In
            </button>
            <fieldset className="flex items-center justify-around gap-6 text-center border-0 border-t mt-2 py-2 px-2">
              <legend className="px-2 font-semibold">Or</legend>
              <button className="border py-2 px-3 rounded-md w-[90%] flex items-center justify-center gap-2 font-semibold">
                {" "}
                <FcGoogle size={25} />
                Google
              </button>
              <button className="border py-2 px-3 rounded-md w-[90%] flex items-center justify-center gap-2 font-semibold">
                {" "}
                <FaFacebook className="text-blue-800" size={25} />
                Facebook
              </button>
            </fieldset>
            <div className="flex items-center gap-2">
              <Controller
                name="terms"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    required
                    value={value}
                    onChange={onChange}
                    error={errors.terms}
                    {...(errors.terms
                      ? { helperText: "Accept our policy" }
                      : null)}
                  />
                )}
              />
              <p className="text-[.7rem] leading-3 my-2">
                By clicking Create account, I agree that I have read and
                accepted the
                <Link to="/">Terms of Use </Link> and{" "}
                <Link to="/">Privacy Policy.</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <p className="text-[.7rem] md:w-1/4 mx-auto my-4 leading-tight py-6 text-center md:text-left">
        Protected by reCAPTCHA and subject to the{" "}
        <Link>
          <span className="font-bold cursor-pointer">Mercurius</span>
        </Link>{" "}
        <Link>
          <span className="font-bold cursor-pointer">Privacy Policy</span>
        </Link>{" "}
        and
        <Link>
          {" "}
          <span className="font-bold cursor-pointer">Terms of Service.</span>
        </Link>
      </p>
    </main>
  );
}
