import React from "react";

export default function Card({
  img = undefined,
  name = undefined,
  ...otherProps
}) {
  return (
    <div
      {...otherProps}
      className="flex flex-col bg-white rounded-md rounded-t-md shadow-sm hover:shadow-md"
    >
      <img src={img} className="w-full rounded-t-md " />
      <span className="px-2 py-4 font-bold text-gray-800">{name}</span>
    </div>
  );
}
