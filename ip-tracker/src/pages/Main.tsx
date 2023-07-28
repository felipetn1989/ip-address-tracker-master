import React from "react";
import ResultBox from "../components/ResultBox";
import { IResult } from "../interfaces/IResult";

interface Props {
  ipData: IResult;
}

const Main = ({ ipData }: Props) => {
  return (
    <main className="bg-black px-6 w-full h-[100vh]">
      <ResultBox ipData={ipData} />
      <p className="text-white">INSERT MAP</p>
    </main>
  );
};

export default Main;
