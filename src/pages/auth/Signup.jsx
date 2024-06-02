// ** React Imports
import React, { useState } from "react";

// ** Icon React Imports
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";

// ** React-Router Imports
import { Link, useNavigate } from "react-router-dom";

// ** Utility Imports
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "../../utils/formScheme";
import { formatDateToYYYYMMDD } from "../../utils/format.js";

// ** Third-Party Imports
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// **  Hooks/API Imports
import { register } from "../../api/Axios";

const defaultValues = {
  email: "",
  name: "",
  phone: "",
  date_of_birth: "",
  address: "",
  city: "",
  zip_code: "",
  password: "",
  password_confirmation: "",
  terms: false,
};

export default function Register() {
  const [password, setPassword] = useState(false);
  const [type, setType] = useState("password");

  const navigate = useNavigate();

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

  const onSubmit = async (data) => {
    const { date_of_birth } = data;
    const formattedDate = formatDateToYYYYMMDD(date_of_birth);

    const payload = {
      ...data,
      date_of_birth: formattedDate,
    };

    const res = await register(payload);
    if (res?.status === 201) {
      reset();
      navigate("/");
      console.log("navigating to dashboard");
    }
  };

  const handlePassword = () => {
    if (type === "password") {
      setPassword(true);
      setType("text");
    } else {
      setPassword(false);
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

      <div className="w-fit mx-auto text-center mb-4 font-mono mt-20">
        <h1 className="text-3xl">Mercurius</h1>
        <p className="">Elegance Redefined. Innovation Redesigned</p>
      </div>

      <div className="shadow-md lg:w-2/3 mx-auto flex flex-col justify-center items-center px-4 py-8 rounded">
        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label
              className="font-semibold text-xl sm:text-[1.4rem]"
              htmlFor="signIn"
            >
              Sign up
            </label>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative my-4">
              <div className="relative w-full">
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <input
                      className="border w-full my-2 rounded-xl px-4 py-3 outline-none"
                      type="text"
                      placeholder="Full name"
                      value={value}
                      onChange={onChange}
                      error={Boolean(errors.name)}
                    />
                  )}
                />
                <span className="text-red-400 text-sm absolute -bottom-3 left-2">
                  {errors?.name?.message}
                </span>
              </div>
              <div className="relative w-full">
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
                <span className="text-red-400 text-sm absolute -bottom-3 right-2">
                  {errors?.email?.message}
                </span>
              </div>
              <div className="relative w-full">
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <input
                      className="border w-full my-2 rounded-xl px-4 py-3 outline-none"
                      type="text"
                      placeholder="+234-0000-0000"
                      value={value}
                      onChange={onChange}
                      error={Boolean(errors.name)}
                    />
                  )}
                />
                {/* <span className="text-red-400 text-sm absolute -bottom-3 left-2">
                  {errors?.phone?.message}
                </span> */}
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative my-4">
              <div className="relative w-full">
                <Controller
                  name="address"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <input
                      type="text"
                      className="border w-full my-2 rounded-xl px-4 py-3 outline-none"
                      placeholder="Address"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
                <span className="text-red-400 text-sm absolute -bottom-3 right-2">
                  {errors?.address?.message}
                </span>
              </div>
              <div className="relative w-full">
                <Controller
                  name="city"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <input
                      type="text"
                      className="border w-full my-2 rounded-xl px-4 py-3 outline-none"
                      placeholder="City"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
                <span className="text-red-400 text-sm absolute -bottom-3 right-2">
                  {errors?.city?.message}
                </span>
              </div>
              <div className="relative w-full">
                <Controller
                  name="zip_code"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <input
                      type="text"
                      className="border w-full my-2 rounded-xl px-4 py-3 outline-none"
                      placeholder="ZIP Code"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
                {/* <span className="text-red-400 text-sm absolute -bottom-3 right-2">
                  {errors?.zip_code?.message}
                </span> */}
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative my-4">
              <div className="relative w-full">
                <Controller
                  name="date_of_birth"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <DatePicker
                      className="border min-w-[100%] w-full my-2 rounded-xl px-4 py-3 outline-none z-40
                      "
                      selected={value}
                      // onSelect={(e) => handleDateSelect(e)} //when day is clicked
                      onChange={onChange}
                    />
                  )}
                />
                <span className="text-red-400 text-sm absolute -bottom-3 right-2">
                  {errors?.date_of_birth?.message}
                </span>
              </div>
              <div className="w-full relative">
                {password ? (
                  <BsEye
                    onClick={handlePassword}
                    className="absolute right-6 top-[37%] cursor-pointer text-black/60"
                    size={17}
                  />
                ) : (
                  <BsEyeSlash
                    onClick={handlePassword}
                    className="absolute right-6 top-[37%] cursor-pointer text-black/60"
                    size={17}
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
              <div className="w-full relative">
                {password ? (
                  <BsEye
                    onClick={handlePassword}
                    className="absolute right-6 top-[37%] cursor-pointer text-black/60"
                    size={17}
                  />
                ) : (
                  <BsEyeSlash
                    onClick={handlePassword}
                    className="absolute right-6 top-[37%] cursor-pointer text-black/60"
                    size={17}
                  />
                )}
                <Controller
                  name="password_confirmation"
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field: { value, onChange } }) => (
                    <input
                      className="border w-full my-2 rounded-xl px-4 py-3 outline-none"
                      type={type}
                      placeholder="Confirm Password"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
                <span className="text-red-400 text-sm absolute -bottom-3 right-2">
                  {errors?.password_confirmation?.message}
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row flex-nowrap justify-between items-center">
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
                    />
                  )}
                />
                <p className="text-[.7rem] leading-3 my-2">
                  By clicking Create account, I agree that I have read and
                  accepted the
                  <Link to="#">Terms of Use </Link> and{" "}
                  <Link to="#">Privacy Policy.</Link>
                </p>
              </div>
              <p className="font-bold mt-3 cursor-pointer w-fit p-1">
                <Link to="/resetPassword">Forgot password?</Link>
              </p>
            </div>
            <button
              className="bg-[#00003C] text-white font-semibold w-full my-4 rounded-xl px-4 py-3 outline-none"
              type="submit"
            >
              Sign Up
            </button>
            <fieldset className="flex items-center justify-around gap-6 text-center border-0 border-t mt-2 py-2 px-2">
              <legend className="px-2 font-semibold mt-16 mb-8">Or</legend>
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
          </form>
        </div>
        <p className="text-[.7rem] lg:w-3/4 mx-auto my-4 leading-tight py-2 px-4 text-center">
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
      </div>
    </main>
  );
}
