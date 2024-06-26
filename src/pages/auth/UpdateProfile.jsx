// ** React Imports
import React, { useState, useEffect } from "react";

// ** Utility Imports
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateProfileSchema } from "../../utils/formScheme";
import { updateProfile } from "../../api/Axios";
import notifyError from "../../components/toast/notifyError";
import notifySuccess from "../../components/toast/notifySuccess";

import { Spinner } from "@plume-ui-react/spinner";

const UpdateProfile = () => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [inactive, setInactive] = useState(true);
  const [loading, setLoading] = useState(false);

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

  const handleEdit = () => {
    setEditMode(!editMode);
    setInactive(!inactive);
  };

  const handleUpdate = async (values) => {
    try {
      setLoading(true);
      const { name, address, city, zip_code, phone } = values;
      const payload = {
        id: user?.id,
        name,
        address,
        city,
        zip_code,
        phone,
        token,
      };
      const response = await updateProfile(payload);

      if (response.status) {
        const newUserInfo = response?.data?.user;
        localStorage.setItem("loggedInUser", JSON.stringify(newUserInfo));
        notifySuccess("Profile Updated Successfully");
        setLoading(false);
        handleEdit();
      }
    } catch (err) {
      console.log(err);
      notifyError(`Profile Update Failed ${err.message}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("loggedInUser"));
    const access_token = localStorage.getItem("accessToken");
    setUser(users);
    setToken(access_token);
  }, [editMode]);

  useEffect(() => {
    setValue("name", user?.name || "");
    setValue("email", user?.email || "");
    setValue("address", user?.address || "");
    setValue("city", user?.city || "");
    setValue("zip_code", user?.zip_code || "");
    setValue("phone", user?.phone || "");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <h3 className="font-semibold text-xl sm:text-[1.4rem]">Profile</h3>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative my-8">
          <div className="relative w-full">
            <label htmlFor="full_name">Full Name</label>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <input
                  className={`${
                    inactive
                      ? "cursor-not-allowed text-gray-500 border-gray-500"
                      : ""
                  } border border-[#00003C] w-full my-2 px-4 py-3 outline-none`}
                  type="text"
                  id="full_name"
                  placeholder="Full name"
                  value={value}
                  onChange={onChange}
                  disabled={inactive}
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
                  className="cursor-not-allowed border border-gray-500 text-gray-500 w-full my-2 px-4 py-3 outline-none"
                  type="email"
                  id="email"
                  placeholder="Email address"
                  value={value}
                  onChange={onChange}
                  disabled
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
                  className={`${
                    inactive
                      ? "cursor-not-allowed text-gray-500 border-gray-500"
                      : ""
                  } border border-[#00003C] w-full my-2 px-4 py-3 outline-none`}
                  type="text"
                  id="phone"
                  placeholder="+234-0000-0000"
                  value={value}
                  onChange={onChange}
                  disabled={inactive}
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
                  className={`${
                    inactive
                      ? "cursor-not-allowed text-gray-500 border-gray-500"
                      : ""
                  } border border-[#00003C] w-full my-2 px-4 py-3 outline-none`}
                  type="text"
                  id="address"
                  placeholder="Address"
                  value={value}
                  onChange={onChange}
                  disabled={inactive}
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
                  className={`${
                    inactive
                      ? "cursor-not-allowed text-gray-500 border-gray-500"
                      : ""
                  } border border-[#00003C] w-full my-2 px-4 py-3 outline-none`}
                  type="text"
                  id="city"
                  placeholder="City"
                  value={value}
                  onChange={onChange}
                  disabled={inactive}
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
                  className={`${
                    inactive
                      ? "cursor-not-allowed text-gray-500 border-gray-500"
                      : ""
                  } border border-[#00003C] w-full my-2 px-4 py-3 outline-none`}
                  type="text"
                  id="zip_code"
                  placeholder="Zip Code"
                  value={value}
                  onChange={onChange}
                  disabled={inactive}
                />
              )}
            />
            {errors.zip_code && notifyError("Enter your zip code")}
          </div>
        </div>

        <div className="flex flex-row flex-nowrap justify-end items-center gap-8">
          {editMode && (
            <>
              <button
                className="border border-[#00003C] text-[#00003C] hover:bg-[#00003C] hover:text-white transition-colors font-semibold my-4 px-3 py-2 outline-none"
                type="button"
                onClick={handleEdit}
              >
                Cancel
              </button>
              <button
                className="bg-[#00003C] text-white font-semibold my-4 px-3 py-2 outline-none"
                type="submit"
              >
                {loading ? <Spinner /> : "Save Changes"}
              </button>
            </>
          )}

          {!editMode && (
            <button
              className="bg-[#00003C] text-white font-semibold my-4 px-3 py-2 outline-none"
              type="button"
              onClick={handleEdit}
            >
              Edit Profile
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
