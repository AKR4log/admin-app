"use client";

import { PhotoIcon } from "@heroicons/react/24/outline";
import React from "react";

const UploadImages = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const inputFileRef = React.useRef<HTMLInputElement | null>(null);
  const handleOnClick = async (e: React.MouseEvent<HTMLInputElement>) => {
    /* Prevent form from submitting by default */
    e.preventDefault();

    /* If file is not selected, then show alert message */
    if (!inputFileRef.current?.files?.length) {
      alert("Please, select file you want to upload");
      return;
    }

    setIsLoading(true);

    /* Add files to FormData */
    const formData = new FormData();
    Object.values(inputFileRef.current.files).forEach((file) => {
      formData.append("file", file);
      alert(file.name)
    });

    /* Send request to our api route */
    // const response = await fetch("/api/upload", {
    //   method: "POST",
    //   body: formData,
    // });

    // const body = (await response.json()) as {
    //   status: "ok" | "fail";
    //   message: string;
    // };

    // alert(body.message);

    // if (body.status === "ok") {
    //   inputFileRef.current.value = "";
    //   // Do some stuff on successfully upload
    // } else {
    //   // Do some stuff on error
    // }

    setIsLoading(false);
  };

  return (
    <>
      <div className="col-span-full">
        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Загрузите фотографии
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <PhotoIcon
              className="mx-auto h-12 w-12 text-gray-300"
              aria-hidden="true"
            />
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Загрузите фотографии</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  ref={inputFileRef}
                  multiple
                />
              </label>
              <p className="pl-1">или перетащите</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">
              PNG, JPG, GIF размером до 10 МБ
            </p>
            <input type="submit" value="Upload" disabled={isLoading} onClick={handleOnClick} />
            {isLoading && ` Wait, please...`}
          </div>
        </div>
      </div>
    </>
  );
};
export default UploadImages;
