"use client";

import { useTypedSelector } from "@/lib/hooks/useTypedSelector";
import { BrandService, GeneralService } from "@/lib/services/serivces";
import { IUpload } from "@/lib/types/upload.interface";
import { PhotoIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import UploadImage from "../../uploaded/image";
import InputDefault from "../input/default";
import ContainerDefault from "./container-default";

const ContainerBrand = () => {
  const user = useTypedSelector((state) => state.auth.auth);
  const inputFileRef = React.useRef<HTMLInputElement | null>(null);
  const [url, setUrl] = React.useState("");
  const [name, setName] = React.useState("");

  const upload = async () => {
    const formData = new FormData();
    if (!inputFileRef.current?.files?.length) {
      alert("Please, select file you want to upload");
      return;
    }
    Object.values(inputFileRef.current.files).forEach((file) => {
      formData.append("image", file);
    });
    await GeneralService.upload(
      "brands",
      formData,
      user[0]["accessToken"]
    ).then((req: IUpload) => setUrl(req.url));
  };

  const create = async () => {
    await BrandService.createBrand(name, url).then((val) => alert(val));
  };

  return (
    <>
      <ContainerDefault>
        <InputDefault
          title="Название бренда"
          description="Введите название нового бренда"
        >
          {url ? (
            <img className="w-8 h-8 rounded-full mr-3" src={url} alt={url} />
          ) : (
            <div></div>
          )}
          <input
            id="name-brand"
            name="name-brand"
            onChange={(val) => setName(val.target.value)}
            className="block w-full rounded-md border-0 py-1 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </InputDefault>
        {url ? (
          <div></div>
        ) : (
          <UploadImage>
            <div className="text-center">
              <PhotoIcon
                className="mx-auto h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
              <div className="mt-4 flex text-sm leading-6 content-center text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Загрузите фотографию</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChangeCapture={() => upload()}
                    ref={inputFileRef}
                  />
                </label>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                PNG, JPG, GIF размером до 10 МБ
              </p>
            </div>
          </UploadImage>
        )}
        <div className="mt-4 flex items-center justify-end gap-x-6">
          <Link
            href={'/main/brands'} 
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Отменить
          </Link>
          <button
            type="submit"
            onClick={() => create()}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Сохранить
          </button>
        </div>
      </ContainerDefault>
    </>
  );
};
export default ContainerBrand;
