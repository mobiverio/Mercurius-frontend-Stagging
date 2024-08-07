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
import { Spinner } from "@plume-ui-react/spinner";

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
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const { date_of_birth } = data;
    const formattedDate = formatDateToYYYYMMDD(date_of_birth);

    const payload = {
      ...data,
      date_of_birth: formattedDate,
    };

    const res = await register(payload);
    if (res?.status === 201) {
      reset();
      navigate("/profile");
      setLoading(false);
    }
    setLoading(false);
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
    <main className="w-full h-full text-sm">
      <div className=" p-2 sm:px-6 py-8 shadow-2xl lg:w-[80%] max-w-[65.625rem] mx-auto rounded">
        <div className="w-fit mx-auto text-center pb-4 font-mono">
          <h1 className="text-3xl">Mercurius</h1>
          <p className="hidden sm:block">
            Elegance Redefined. Innovation Redesigned
          </p>
          <p className="block sm:hidden">
            Elegance Redefined. <br /> Innovation Redesigned
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <h4 className="font-semibold text-xl sm:text-[1.4rem]">Sign up</h4>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative my-4">
            <div className="relative w-full">
              <label htmlFor="full_name">Full Name</label>
              <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <input
                    className="border border-[#00003C] w-full my-2 px-4 py-3 outline-none"
                    type="text"
                    id="full_name"
                    placeholder="John Doe"
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
              <label htmlFor="email">Email</label>
              <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <input
                    className="border border-[#00003C] w-full my-2 px-4 py-3 outline-none"
                    type="email"
                    id="email"
                    placeholder="example@gmail.com"
                    autocomplete="false"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              <span className="text-red-400 text-sm absolute -bottom-3 right-2">
                {errors?.email?.message}
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative my-4">
            <div className="relative w-full">
              <label htmlFor="phone">Phone Number</label>
              <Controller
                name="phone"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <input
                    className="border border-[#00003C] w-full my-2 px-4 py-3 outline-none"
                    type="text"
                    id="phone"
                    placeholder="+234-0000-0000"
                    value={value}
                    onChange={onChange}
                    error={Boolean(errors.name)}
                  />
                )}
              />
              <span className="text-red-400 text-sm absolute -bottom-3 left-2">
                {errors?.phone?.message}
              </span>
            </div>
            <div className="relative w-full">
              <label htmlFor="address">Address</label>
              <Controller
                name="address"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <input
                    type="text"
                    id="address"
                    className="border border-[#00003C] w-full my-2 px-4 py-3 outline-none"
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
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative my-4">
            <div className="relative w-full">
              <label htmlFor="dob">Date of Birth</label>
              <Controller
                name="date_of_birth"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <DatePicker
                    className="border border-[#00003C] w-full my-2 px-4 py-3 outline-none z-40"
                    id="dob"
                    selected={value}
                    onChange={onChange}
                  />
                )}
              />
              <span className="text-red-400 text-sm absolute -bottom-3 right-2">
                {errors?.date_of_birth?.message}
              </span>
            </div>
            <div className="relative w-full">
              <label htmlFor="city">City</label>
              <Controller
                name="city"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <input
                    type="text"
                    id="city"
                    className="border border-[#00003C] w-full my-2 px-4 py-3 outline-none"
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
              <label htmlFor="zip_code">Zip Code</label>
              <Controller
                name="zip_code"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <input
                    type="text"
                    id="zip_code"
                    className="border border-[#00003C] w-full my-2 px-4 py-3 outline-none"
                    placeholder="Zip Code"
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
            <div className="w-full relative">
              {password ? (
                <BsEye
                  onClick={handlePassword}
                  className="absolute right-6 top-[50%] cursor-pointer text-black/60"
                  size={17}
                />
              ) : (
                <BsEyeSlash
                  onClick={handlePassword}
                  className="absolute right-6 top-[50%] cursor-pointer text-black/60"
                  size={17}
                />
              )}
              <label htmlFor="password">Password</label>
              <Controller
                name="password"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field: { value, onChange } }) => (
                  <input
                    className="border border-[#00003C] w-full my-2 px-4 py-3 outline-none"
                    type={type}
                    id="password"
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
                  className="absolute right-6 top-[50%] cursor-pointer text-black/60"
                  size={17}
                />
              ) : (
                <BsEyeSlash
                  onClick={handlePassword}
                  className="absolute right-6 top-[50%] cursor-pointer text-black/60"
                  size={17}
                />
              )}
              <label htmlFor="cpassword">Confirm Password</label>
              <Controller
                name="password_confirmation"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field: { value, onChange } }) => (
                  <input
                    className="border border-[#00003C] w-full my-2 px-4 py-3 outline-none"
                    type={type}
                    id="cpassword"
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

          {/* Forget password */}
          <div className="flex flex-col sm:flex-row justify-between items-center p-2">
            <p className="">
              Already have an account?{" "}
              <Link to="/signin">
                <span className="font-semibold">Sign In</span>
              </Link>
            </p>
            <p className="font-bold cursor-pointer w-fit p-1">
              <Link to="/resetPassword">Forgot password?</Link>
            </p>
          </div>

          {/* Terms and Condition */}
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
              By clicking Create account, I agree that I have read and accepted
              the
              <Link to="#">Terms of Use </Link> and{" "}
              <Link to="#">Privacy Policy.</Link>
            </p>
          </div>

          <button
            className="block bg-[#00003C] text-white font-semibold w-1/2 mx-auto my-4 px-4 py-3 outline-none"
            type="submit"
          >
            {loading ? <Spinner /> : "Sign Up"}
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
