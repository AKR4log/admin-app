"use client";

import { useActions } from "@/lib/hooks/useActions";
import { GeneralService } from "@/lib/services/serivces";
import { IAuthUser } from "@/lib/types/auth.interface";
import { useState } from "react";
import AuthUserContainer from "./user/container";

const AuthContainer = ({ isAuthUser }: { isAuthUser: any }) => {
  const [auth, setAuth] = useState();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { authUser } = useActions();

  const AuthClick = async (password: string, email: string) => {
    (await GeneralService.login(password, email).then((err: any) => {
      if (err.status !== 201) {
        setAuth(err);
      } else {
        return authUser(err.data);
      }
    })) as IAuthUser;
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center sm:mx-auto border rounded-md my-auto mt-16 px-5 py-2 sm:max-w-sm">
        {isAuthUser !== null ? (
          <AuthUserContainer />
        ) : (
          <>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm sm:max-h-sm">
              <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Войдите в свой аккаунт
              </h2>
            </div>
            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email адрес
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(val) => setEmail(val.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Пароль
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(val) => setPassword(val.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-6 mb-2">
                <button
                  type="submit"
                  onClick={() => AuthClick(password, email)}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Войти
                </button>
              </div>
              <p>{auth}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AuthContainer;
