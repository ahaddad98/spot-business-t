import Image from "next/image";
import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: string;
  type: string,
  placehoder: string,
}

const InputWithIcon = ({icon, type, placehoder} : InputProps) => {
  return (
    <div className="flex items-center border-b border-gray-300">
      <span className="">
        <Image src={icon} alt=""/>
      </span>
      <input
        type={type}
        placeholder={placehoder}
        className="appearance-none bg-transparent border-none w-full py-2 px-3 leading-tight focus:outline-none"
      />
    </div>
  );
};

export default InputWithIcon;
