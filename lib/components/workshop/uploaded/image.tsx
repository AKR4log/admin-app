import React from "react";

const UploadImage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="col-span-full">
        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Загрузите фотографию
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          {children}
        </div>
      </div>
    </>
  );
};
export default UploadImage;
