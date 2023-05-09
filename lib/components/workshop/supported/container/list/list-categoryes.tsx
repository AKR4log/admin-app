"use client";

import { CategoryService } from "@/lib/services/serivces";
import { ICategory } from "@/lib/types/category.interface";
import { useState } from "react";

const ListCategoryes = () => {
  const [categoryes, setCategoryes] = useState([]);
  const init = async () => {
    const data = await CategoryService.getCategory();
    setCategoryes(data);
  };
  init();
  return (
    <>
      <ul role="list" className="divide-y divide-gray-100">
        <div className="flex w-full flex-row content-end">
          <p>Количество категорий: {categoryes.length}</p>
        </div>
        {categoryes.map((category: ICategory) => (
          // <Link href={`/main/categories/${category.id}`}>
            <li key={category.id} className="flex justify-between gap-x-6 py-5">
              <div className="flex gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src={category.avatarPath}
                  alt={category.avatarPath}
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {category.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {category.id}
                  </p>
                </div>
              </div>
            </li>
          // </Link>
        ))}
      </ul>
    </>
  );
};
export default ListCategoryes;
