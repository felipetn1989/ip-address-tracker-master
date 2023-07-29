import React, { ChangeEvent, FormEvent } from "react";

import style from "./Header.module.css";
import Form from "./Form";

interface Props {
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
  handleSubmit(e: FormEvent<HTMLFormElement>): void;
  isIpValid: boolean;
}

const Header = ({ handleChange, handleSubmit, isIpValid }: Props) => {
  return (
    <header
      className={`${style.header} h-[18.75rem] py-[1.31255rem] flex flex-col items-center gap-6 min-w-[15rem] lg:h-[17.5rem]`}
    >
      <h1 className="text-white text-center font-medium text-[1.6875rem] tracking-tight lg:text-[2.0625rem] lg:translate-y-1">
        IP Address Tracker
      </h1>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
      {!isIpValid && (
        <p className="text-red-500 text-xs absolute top-[9rem]">
          Please insert a valid IP Address
        </p>
      )}
    </header>
  );
};

export default Header;
