// ** React Imports
import React, { useState, useEffect } from "react";

// ** React-Router Imports
import { Link, useNavigate } from "react-router-dom";

// ** Utility Imports
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "../../utils/formScheme";

const Profile = () => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  const {
    control,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit = () => {
    console.log("nothing");
  };
  const logout = () => {
    setUser(null);
    setToken("");
    sessionStorage.removeItem("loggedInUser");
    sessionStorage.removeItem("accessToken");
    navigate("/");
  };

  useEffect(() => {
    if (window !== undefined) {
      const users = JSON.parse(sessionStorage.getItem("loggedInUser"));
      const access_token = sessionStorage.getItem("accessToken");
      setUser(users);
      setToken(access_token);
    }

    setValue("name", user?.name);
    setValue("email", user?.email);
    setValue("address", user?.address);
    setValue("city", user?.city);
    setValue("zip_code", user?.zip_code);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="px-6 md:px-12 my-8">
      <h3 className="flex justify-end items-center pr-16 text-xl">
        Welcome {user?.name}
      </h3>
      <div className="flex flex-row flex-nowrap">
        <nav className="hidden w-[30%] md:flex flex-col p-4">
          <p>Manage your account</p>
          <button
            type="button"
            onClick={logout}
            className="border w-fit border-[#00003C] text-[#00003C] hover:bg-[#00003C] hover:text-white transition-colors font-semibold my-4 px-3 py-2 outline-none"
          >
            Logout
          </button>
        </nav>
        <div className="shadow-sm rounded-sm w-[70%] p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label
              className="font-semibold text-xl sm:text-[1.4rem]"
              htmlFor="signIn"
            >
              Update Profile
            </label>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative my-8">
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
                      placeholder="Full name"
                      value={value}
                      onChange={onChange}
                      error={Boolean(errors.name)}
                    />
                  )}
                />
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
                      placeholder="Email address"
                      autoFocus
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative my-8">
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
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative my-8">
              <div className="w-full relative">
                <label htmlFor="password">Current password</label>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field: { value, onChange } }) => (
                    <input
                      className="border border-[#00003C] w-full my-2 px-4 py-3 outline-none"
                      placeholder="*************"
                      id="password"
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
                <label htmlFor="new_password">New Password</label>
                <Controller
                  name="new_password"
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field: { value, onChange } }) => (
                    <input
                      className="border border-[#00003C] w-full my-2 px-4 py-3 outline-none"
                      placeholder="*************"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
                <span className="text-red-400 text-sm absolute -bottom-3 right-2">
                  {errors?.password_confirmation?.message}
                </span>
              </div>
              <div className="w-full relative">
                <label htmlFor="confirm_password">Confirm Password</label>
                <Controller
                  name="new_password"
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field: { value, onChange } }) => (
                    <input
                      className="border border-[#00003C] w-full my-2 px-4 py-3 outline-none"
                      placeholder="*************"
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
            <div className="flex flex-row flex-nowrap justify-end items-center gap-8">
              <button
                className="border border-[#00003C] text-[#00003C] hover:bg-[#00003C] hover:text-white transition-colors font-semibold my-4 px-3 py-2 outline-none"
                type="submit"
              >
                Cancel
              </button>
              <button
                className="bg-[#00003C] text-white font-semibold my-4 px-3 py-2 outline-none"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Profile;
