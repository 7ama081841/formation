import React from "react";

export default function Button(props) {
  const { text = undefined, ...otherProps } = props;
  return (
    <button {...otherProps} className="px-4 py-2 rounded-md text-white font-bold bg-cyan-500 hover:bg-cyan-700">
      {text}
    </button>
  );
}
