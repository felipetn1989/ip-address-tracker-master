import React, { ChangeEvent, FormEvent } from "react";

import mobileBg from "../images/mobileBg.png";

import style from "./Header.module.css";
import Form from "./Form";

interface Props {
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
  handleSubmit(e: FormEvent<HTMLFormElement>): void;
}

const Header = ({ handleChange, handleSubmit }: Props) => {
  return (
    <header
      className={`${style.header} h-[18.75rem] py-[1.31255rem] flex flex-col items-center gap-6 min-w-[15rem]`}
    >
      <h1 className="text-white text-center font-medium text-[1.6875rem] tracking-tight">
        IP Address Tracker
      </h1>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
    </header>
  );
};

export default Header;
