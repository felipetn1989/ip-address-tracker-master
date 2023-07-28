import React, { ChangeEvent, FormEvent } from "react";

import iconArrow from "../images/iconArrow.svg";

interface Props {
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
  handleSubmit(e: FormEvent<HTMLFormElement>): void;
}

const Form = ({ handleChange, handleSubmit }: Props) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-[88%] max-w-[30rem]"
      action="#"
      noValidate
    >
      <input
        className="h-14 w-[90%] pl-7 pr-[4.25rem] rounded-l-2xl"
        type="text"
        placeholder="Insert IP Address"
        onChange={handleChange}
      />
      <button className="bg-black h-14 w-[20%] flex justify-center items-center rounded-r-2xl">
        <img src={iconArrow} alt="Arrow icon submit button" />
      </button>
    </form>
  );
};

export default Form;
