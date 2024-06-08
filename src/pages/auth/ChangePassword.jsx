import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updatePasswordSchema } from "../../utils/formScheme";

const ChangePassword = () => {
  const defaultValues = {
    password: "",
    new_password: "",
    cnew_password: "",
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

  const handleUpdate = (values) => {
    console.log(values, "Expected values");
  };

  return (
    <form
      onSubmit={handleSubmit(handleUpdate)}
      className="shadow-sm rounded-sm w-[70%] p-4"
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
            {errors?.new_password?.message}
          </span>
        </div>
        <div className="w-full relative">
          <label htmlFor="confirm_password">Confirm Password</label>
          <Controller
            name="c_new_password"
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
            {errors?.c_new_password?.message}
          </span>
        </div>
      </div>
      <div className="flex flex-row flex-nowrap justify-end items-center gap-8">
        <button
          className="border border-[#00003C] text-[#00003C] hover:bg-[#00003C] hover:text-white transition-colors font-semibold my-4 px-3 py-2 outline-none"
          type="button"
          onClick={reset(defaultValues)}
        >
          Clear
        </button>
        <button
          className="bg-[#00003C] text-white font-semibold my-4 px-3 py-2 outline-none"
          type="submit"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default ChangePassword;
