import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import { login } from "../lib/api";
import { ShipWheelIcon } from "lucide-react";
import { Link } from "react-router";
import useLogin from '../hooks/useLogin';




const LoginPage = () => {

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  // const queryClient = useQueryClient();
  // const { mutate: loginMutation, isPending, error } = useMutation({
  //   mutationFn: login,
  //   onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] })
  // });

  const { isPending, error, loginMutation } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  }




  return (
    <div
      className="min-h-screen flex items-center justify-center bg-base-200 p-4"
      data-theme="forest"
    >
      <div
        className="w-full max-w-5xl bg-base-100 border border-primary/25 
      rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row"
      >
        {/* Login Form Section */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center">

          {/* Logo */}
          <div className="mb-6 flex items-center gap-3">
            <ShipWheelIcon className="w-9 h-9 text-primary" />
            <span
              className="text-3xl font-bold font-mono bg-clip-text text-transparent 
            bg-gradient-to-r from-primary to-secondary tracking-wider"
            >
              ChatGram
            </span>
          </div>

          {/* error message */}

          {error && (
            <div className="alert alert-error mb-4">
              <span>{error.response.data.message}</span>
            </div>
          )}
          {/* welcom to login */}
          <div className="w-full">
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold">Welcome Back</h2>
                  <p className="text-sm opacity-70">
                    Sign in to your account to continue your journey
                  </p>
                </div>
                {/* email */}
                <div className="flex flex-col gap-3">
                  <div className="form-control w-full space-y-2">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email"
                      placeholder="hello@example.com"
                      className="input input-bordered w-full"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-control w-full space-y-2">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="password"
                      placeholder="******"
                      className="input input-bordered w-full"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <span className="loading loading-spinner loading-xs"></span>
                        Signing in...
                      </>
                    ) : (
                      "Sign in"
                    )}
                  </button>
                  <div className="text-center mt-4">
                    <p className="text-sm">
                      Don't have an account{" "}
                      <Link to="/signup" className="text-primary hover:underline">
                        Create one
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Right Side (Optional Image / Illustration Section) */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
          <div className="max-w-md p-8">
            <div className="relative aspect-square max-w-sm mx-auto">
              <img src="/i.png" alt="Language connection " className="w-full h-full" />
            </div>
            <div className="text-center space-y-3 mt-6">
              <h2 className="text-xl font-semibold">Connect with friends Worldwide</h2>
              <p className="opacity-70">
                Pratice conversations,make friends,and improve your language Skills together
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage