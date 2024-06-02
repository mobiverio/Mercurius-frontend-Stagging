import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Register() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Please enter your email address"),
  });
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "" },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    reset();
  };

  return (
    <main className="w-full h-screen text-sm">
      <div className="flex flex-col items-center justify-center">
        <div className="w-fit mx-auto text-center mb-4 font-mono mt-20">
          <h1 className="text-3xl">Mercurius</h1>
          <p className="">Elegance Redefined. Innovation Redesigned</p>
        </div>
        <div className="shadow-md lg:w-1/3 mx-auto flex flex-col justify-center items-center px-4 py-8 rounded">
          <div className="w-full my">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="font-semibold text-[1.4rem]" htmlFor="signIn">
                Forgot Password?
              </label>

              <div className="relative my-4">
                <label htmlFor="email">Email</label>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: "Please enter your email address" }}
                  render={({ field: { value, onChange } }) => (
                    <input
                      className="border border-[#00003C] w-full my-4 px-4 py-3 outline-none"
                      type="text"
                      placeholder="email address"
                      autoFocus
                      id="email"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
                <span className="text-red-400 text-sm absolute -bottom-2 right-2">
                  {errors?.email?.message}
                </span>
              </div>
              <button className="bg-[#00003C] text-white font-semibold w-full my-4 px-4 py-3 outline-none">
                Reset Password
              </button>
              <button className="text-[#00003C] hover:underline font-semibold w-full">
                <Link to="/signin">Sign In</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
