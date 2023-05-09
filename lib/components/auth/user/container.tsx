import { useTypedSelector } from "@/lib/hooks/useTypedSelector";
import { IUser } from "@/lib/types/user.interface";
import jwt_decode from "jwt-decode";
import Link from "next/link";

const AuthUserContainer = () => {
  const token = useTypedSelector((state) => state.auth.auth);
  const user = jwt_decode(token[0]["accessToken"]) as IUser;
  return (
    <>
      <div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Добро пожаловать!
          </h2>
        </div>
        <div className="border rounded-md px-4 mt-6 py-3 sm:max-w-sm">
          <ul role="list" className="divide-y divide-gray-100">
            <li key={user.id} className="flex justify-between gap-x-6">
              <div className="flex gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src={user.avatarPath}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {user.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {user.email}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <Link
                  href="/main"
                  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Продолжить
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="text-sm mt-4 mb-2">
          <a href="#" className="font-semibold text-red-600 hover:text-red-500">
            Выйти из аккаунта
          </a>
        </div>
      </div>
    </>
  );
};

export default AuthUserContainer;
