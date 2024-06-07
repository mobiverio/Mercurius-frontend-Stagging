// ** React Imports
import React, { useState, useEffect } from "react";

// ** React-Router Imports
import { Link, useNavigate } from "react-router-dom";

// ** Utility Imports
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateProfileSchema } from "../../utils/formScheme";
import { updateProfile } from "../../api/Axios";
import notifyError from "../../components/toast/notifyError";
import notifySuccess from "../../components/toast/notifySuccess";

const Profile = () => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const defaultValues = {
    name: "",
    email: "",
    city: "",
    address: "",
    zip_code: "",
    phone: "",
  };

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onTouched",
    resolver: yupResolver(updateProfileSchema),
  });

  const logout = () => {
    setUser(null);
    setToken("");
    sessionStorage.removeItem("loggedInUser");
    sessionStorage.removeItem("accessToken");
    navigate("/");
  };

  const handleUpdate = async (values) => {
    try {
      const { email, ...restOfVals } = values;
      const payload = { id: user?.id, restOfVals, token };
      const response = await updateProfile(payload);

      if (response.status) {
        notifySuccess("Profile Updated Successfully");
      }
    } catch (err) {
      console.log(err);
      notifyError(`Profile Update Failed ${err.message}`);
    }
  };

  useEffect(() => {
    const users = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const access_token = sessionStorage.getItem("accessToken");
    setUser(users);
    setToken(access_token);

    setValue("name", user?.name);
    setValue("email", user?.email);
    setValue("address", user?.address);
    setValue("city", user?.city);
    setValue("zip_code", user?.zip_code);
    setValue("phone", user?.phone);

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
        <form
          onSubmit={handleSubmit(handleUpdate)}
          className="shadow-sm rounded-sm w-[70%] p-4"
        >
          <h3 className="font-semibold text-xl sm:text-[1.4rem]">
            Update Profile
          </h3>

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
                  />
                )}
              />
              {errors.name && notifyError("Enter your full name")}
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
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              {errors.email && notifyError("Enter a valid email")}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative my-8">
            <div className="relative w-full">
              <label htmlFor="phone">Phone</label>
              <Controller
                name="phone"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <input
                    type="text"
                    id="phone"
                    className="border border-[#00003C] w-full my-2 px-4 py-3 outline-none"
                    placeholder="+234-0000-0000"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              {errors.phone && notifyError("Enter a valid Phone number")}
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
              {errors.address && notifyError("Enter your delivery address")}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative my-8">
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
              {errors.city && notifyError("Enter your city")}
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
              {errors.zip_code && notifyError("Enter your zip code")}
            </div>
          </div>

          {/* <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative my-8">
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
            name="cpassword"
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
            {errors?.cpassword?.message}
          </span>
        </div>
      </div> */}
          <div className="flex flex-row flex-nowrap justify-end items-center gap-8">
            <button
              className="border border-[#00003C] text-[#00003C] hover:bg-[#00003C] hover:text-white transition-colors font-semibold my-4 px-3 py-2 outline-none"
              type="button"
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
    </main>
  );
};

export default Profile;
