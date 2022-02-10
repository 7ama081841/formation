import React, { useRef, useState } from "react";
export default function UploadInput({ onChange }) {
  const ref = useRef();

  const [img, setImg] = useState();

  const changeImage = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImg(reader.result);
      onChange?.(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div className="w-full">
      <div
        onClick={() => ref.current?.click()}
        className="flex justify-center items-center rounded-md bg-gray-100 hover:bg-gray-300"
      >
        {img ? (
          <img src={img} className="w-full h-full rounded-md" />
        ) : (
          <span className="text-sm text-center font-bold text-gray-600">
            Select File From your computer
          </span>
        )}
      </div>
      <input onChange={changeImage} className="hidden" ref={ref} type="file" />
    </div>
  );
}
