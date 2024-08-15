import React from "react";

const Inputs = ({ placeholder, type, required, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className="rounded-md border border-gray-300 px-4 py-2"
    />
  );
};

export default Inputs;
