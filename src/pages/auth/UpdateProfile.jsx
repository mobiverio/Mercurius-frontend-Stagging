// ** React Imports
import React, { useState, useEffect, useContext } from "react";

// ** Utility Imports
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateProfileSchema } from "../../utils/formScheme";
import { updateProfile } from "../../api/Axios";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../zustand/useCartStore";
import notifyError from "../../components/toast/notifyError";
import notifySuccess from "../../components/toast/notifySuccess";
import { Spinner } from "@plume-ui-react/spinner";
import { AuthContext } from "../../AppContext/AuthContext";

const UpdateProfile = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [inactive, setInactive] = useState(true);
  const [loading, setLoading] = useState(false);

  // ** Hooks
  const { Auth, setAuth } = useContext(AuthContext);
  const { clearCart } = useCartStore();
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
        setAuth({ ...Auth, user: newUserInfo });
        localStorage.setItem("loggedInUser", JSON.stringify(newUserInfo));
        notifySuccess("Profile Updated Successfully");
        setLoading(false);
        handleEdit();
      }
    } catch (err) {
      notifyError(`Profile Update Failed || ${err.message}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("loggedInUser")));
    setToken(localStorage.getItem("token"));

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setValue("name", user?.name || "");
    setValue("email", user?.email || "");
    setValue("address", user?.address || "");
    setValue("city", user?.city || "");
    setValue("zip_code", user?.zip_code || "");
    setValue("phone", user?.phone || "");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const logout = () => {
    setAuth({});
    localStorage.removeItem("cartItems");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("token");
    clearCart();
    navigate("/");
  };

  return (
    <div className="px-3 text-sm sm:text-[1rem]">
      <form onSubmit={handleSubmit(handleUpdate)}>
        <h3 className="font-semibold text-sm sm:text-[1rem]">Profile</h3>

        <div className="flex flex-col lg:flex-row items-center justify-between sm:gap-4 relative sm:my-8">
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
                      ? "cursor-not-allowed text-[#333] border-gray-500"
                      : ""
                  } border border-[#00003C] w-full my-2 p-1 sm:my-2 sm:px-4 sm:py-3 outline-none`}
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
                  className="cursor-not-allowed border border-gray-500 text-[#333] w-full my-2 p-1 sm:my-2 sm:px-4 sm:py-3 outline-none"
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

        <div className="flex flex-col md:flex-row items-center justify-between sm:gap-4 relative sm:my-8">
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
                      ? "cursor-not-allowed text-[#333] border-gray-500"
                      : ""
                  } border border-[#00003C] w-full my-2 p-1 sm:my-2 sm:px-4 sm:py-3 outline-none`}
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
                      ? "cursor-not-allowed text-[#333] border-gray-500"
                      : ""
                  } border border-[#00003C] w-full my-2 p-1 sm:my-2 sm:px-4 sm:py-3 outline-none`}
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

        <div className="flex flex-col md:flex-row items-center justify-between sm:gap-4 relative sm:my-8">
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
                      ? "cursor-not-allowed text-[#333] border-gray-500"
                      : ""
                  } border border-[#00003C] w-full my-2 p-1 sm:my-2 sm:px-4 sm:py-3 outline-none`}
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
                      ? "cursor-not-allowed text-[#333] border-gray-500"
                      : ""
                  } border border-[#00003C] w-full my-2 p-1 sm:my-2 sm:px-4 sm:py-3 outline-none`}
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

        <div className="flex flex-row flex-nowrap justify-end items-center gap-4 sm:gap-8">
          <button
            type="button"
            onClick={logout}
            className="md:hidden border w-fit border-[#00003C] text-[#00003C] hover:bg-[#00003C] hover:text-white transition-colors font-semibold text-sm sm:text-[1rem] sm:my-4 p-2 sm:px-3 sm:py-2 outline-none"
          >
            Logout
          </button>
          {editMode && (
            <>
              <button
                className="border border-[#00003C] text-[#00003C] hover:bg-[#00003C] hover:text-white transition-colors font-semibold text-sm sm:text-[1rem] my-4 p-2 sm:px-3 sm:py-2 outline-none"
                type="button"
                onClick={handleEdit}
              >
                Cancel
              </button>
              <button
                className="bg-[#00003C] text-white font-semibold text-sm sm:text-[1rem] my-4 p-2 sm:px-3 sm:py-2 outline-none"
                type="submit"
              >
                {loading ? <Spinner /> : "Save Changes"}
              </button>
            </>
          )}

          {!editMode && (
            <button
              className="bg-[#00003C] text-white font-semibold text-sm sm:text-[1rem] my-4 p-2 sm:px-3 sm:py-2 outline-none"
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
