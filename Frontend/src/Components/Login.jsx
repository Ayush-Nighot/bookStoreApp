import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            <h3 className="font-bold text-lg">Login</h3>
            <div>
              {" "}
              <br />
              <label htmlFor="email">Email : </label>
              <input
                className=" border rounded-md w-80 px-3 outline-none"
                type="email"
                id="email"
                placeholder="Enter your Email"
                {...register("email", { required: true })}
              />
              <br />
                {errors.email && <span className="text-sm text-pink-500">Email is required*</span>}
              <br />
              <label htmlFor="password">Password : </label>
              <input
                className="border rounded w-80 px-3 mt-4 outline-none"
                type="password"
                id="password"
                placeholder="Enter your Password"
                {...register("password", { required: true })}
              />
                {errors.password && <span className="text-sm text-pink-500">Password is required*</span>}
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not Registered?
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
