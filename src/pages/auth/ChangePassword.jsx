import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updatePasswordSchema } from "../../utils/formScheme";
import { updatePassword } from "../../api/Axios";
import notifySuccess from "../../components/toast/notifySuccess";
import { Spinner } from "@plume-ui-react/spinner";

const ChangePassword = () => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const defaultValues = {
    password: "",
    new_password: "",
    c_new_password: "",
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    mode: "onChange",
    resolver: yupResolver(updatePasswordSchema),
  });

  const handleUpdate = async (data) => {
    setLoading(true);
    const payload = {
      current_password: data.password,
      password: data.new_password,
      password_confirmation: data.c_new_password,
      token,
    };
    const response = await updatePassword(payload);
    if (response) {
      reset();
      notifySuccess("Update Successful");
      setLoading(false);
    }
    if (!response) {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getToken = localStorage.getItem("accessToken");
    setToken(getToken);
  }, []);

  return (
    <form
      onSubmit={handleSubmit(handleUpdate)}
      className="shadow-sm rounded-sm w-[100%] p-4"
    >
      <label
        className="font-semibold text-xl sm:text-[1.4rem]"
        htmlFor="signIn"
      >
        Update Password
      </label>
      <div className="flex flex-col items-center justify-between gap-4 relative my-8">
        <div className="w-full relative">
          <label htmlFor="password">Current password</label>
          <Controller
            name="password"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field: { value, onChange } }) => (
              <input
                className="border border-[#00003C] text-sm sm:text-[1rem] w-full my-2 p-2 sm:px-4 sm:py-3 outline-none"
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
                className="border border-[#00003C] text-sm sm:text-[1rem] w-full my-2 p-2 sm:px-4 sm:py-3 outline-none"
                placeholder="*************"
                value={value}
                onChange={onChange}
              />
            )}
          />
          <span className="text-red-400 text-sm absolute -bottom-3 right-2">
            {errors?.new_password?.message}
          </span>
        </div>
        <div className="w-full relative">
          <label htmlFor="c_new_password">Confirm Password</label>
          <Controller
            name="c_new_password"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field: { value, onChange } }) => (
              <input
                className="border border-[#00003C] text-sm sm:text-[1rem] w-full my-2 p-2 sm:px-4 sm:py-3 outline-none"
                placeholder="*************"
                value={value}
                onChange={onChange}
              />
            )}
          />
          <span className="text-red-400 text-sm absolute -bottom-3 right-2">
            {errors?.c_new_password?.message}
          </span>
        </div>
      </div>
      <div className="flex flex-row flex-nowrap justify-end items-center gap-4 sm:gap-8">
        <button
          className="border border-[#00003C] text-[#00003C] hover:bg-[#00003C] hover:text-white transition-colors font-semibold my-4 sm:px-3 sm:py-2 p-2 text-sm sm:text-[1rem] outline-none"
          type="button"
          onClick={reset}
        >
          Clear
        </button>
        <button
          className="bg-[#00003C] text-white font-semibold my-4 sm:px-3 sm:py-2 p-2 text-sm sm:text-[1rem] outline-none"
          type="submit"
        >
          {loading ? <Spinner /> : "Update"}
        </button>
      </div>
    </form>
  );
};

export default ChangePassword;
