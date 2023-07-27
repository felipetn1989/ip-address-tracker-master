import React from "react";
import ResultBox from "../components/ResultBox";
import { IResult } from "../interfaces/IResult";

interface Props {
  ipData: any
}

const Main = ({ ipData }: Props) => {
  return (
    <main className="bg-black px-6">
      <ResultBox ipData={ipData} />
    </main>
  );
};

export default Main;
