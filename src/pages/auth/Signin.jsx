import { useState, useEffect, useRef, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInSchema } from "../../utils/formScheme";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import notifySuccess from "../../components/toast/notifySuccess";
import { Spinner } from "@plume-ui-react/spinner";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/Axios";
import { AuthContext } from "../../AppContext/AuthContext";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("password");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef();

  const { setAuth } = useContext(AuthContext);

  const handlePassword = () => {
    if (type === "password") {
      setShowPassword(true);
      setType("text");
    } else {
      setShowPassword(false);
      setType("password");
    }
  };

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: yupResolver(SignInSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const { email, password } = data;
      const response = await loginUser({ email, password });

      setAuth(response.data);
      if (response?.status) {
        notifySuccess("Login Successful");
        navigate("/profile");
        reset();
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <main className="w-full h-dvh text-sm flex justify-center sm:items-center">
      <div className="px-4 py-8 shadow-2xl lg:w-[40%] mx-auto rounded">
        <div className="w-fit mx-auto text-center pb-4 font-mono">
          <h1 className="text-3xl">Mercurius</h1>
          <p className="">Elegance Redefined. Innovation Redesigned</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <label
            className="font-semibold text-sm sm:text-[1.4rem]"
            htmlFor="signIn"
          >
            Sign In
          </label>

          <div className="relative mt-4">
            <label htmlFor="email">Email</label>
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <input
                  className="border border-[#00003C] w-full mb-8 px-4 py-3 outline-none"
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  ref={emailRef}
                  autoComplete="off"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
            <span className="text-red-400 text-sm absolute bottom-1 right-1">
              {errors?.email?.message}
            </span>
          </div>
          <div className="relative">
            {showPassword ? (
              <BsEye
                onClick={handlePassword}
                className="absolute right-4 top-[26%] cursor-pointer text-black/60"
                size={17}
              />
            ) : (
              <BsEyeSlash
                onClick={handlePassword}
                className="absolute right-4 top-[26%] cursor-pointer text-black/60"
                size={17}
              />
            )}
            <label htmlFor="password">Password</label>
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <input
                  className="border border-[#00003C] w-full px-4 py-3 outline-none"
                  type={type}
                  id="password"
                  placeholder="***********"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
            <span className="text-red-400 text-sm absolute -bottom-3 right-2">
              {errors?.password?.message}
            </span>

            <div className="flex justify-between sm:items-center p-2 text-sm">
              <p className="block sm:hidden">
                Don't have an account? <br />
                <Link to="/signup">
                  <span className="font-semibold">Sign Up</span>
                </Link>
              </p>
              <p className="hidden sm:block">
                Don't have an account? <br />
                <Link to="/signup">
                  <span className="font-semibold">Sign Up</span>
                </Link>
              </p>
              <p className="font-bold cursor-pointer w-fit">
                <Link to="/resetPassword">Forgot&nbsp;password?</Link>
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#00003C] text-white font-semibold w-full my-4 px-4 py-3 outline-none"
          >
            {loading ? <Spinner /> : "Sign In"}
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
        </form>
        <p className="text-[.7rem] lg:w-3/4 mx-auto py-3 leading-tight px-4 text-center">
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
