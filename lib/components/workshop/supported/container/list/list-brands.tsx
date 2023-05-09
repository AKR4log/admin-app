"use client";

import { BrandService } from "@/lib/services/serivces";
import { IBrand } from "@/lib/types/brand.interface";
import { useState } from "react";

const ListBrands = () => {
  const [brands, setBrands] = useState([]);
  const init = async () => {
    const data = await BrandService.getBrand();
    setBrands(data);
  };
  init();
  return (
    <>
      <ul role="list" className="divide-y divide-gray-100">
        <div className="flex w-full flex-row content-end">
          <p>Количество брендов: {brands.length}</p>
        </div>
        {brands.map((brand: IBrand) => (
          <li key={brand.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={brand.avatarPath}
                alt={brand.avatarPath}
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {brand.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {brand.id}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ListBrands;
