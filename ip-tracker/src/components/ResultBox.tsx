import React from "react";
import { IResult } from "../interfaces/IResult";

interface Props {
  ipData: IResult;
}

const ResultBox = ({ ipData }: Props) => {
  return (
    <div className="absolute top-[10.5rem] w-[88%] max-w-[30rem] min-w-[15rem] left-[50%] translate-x-[-50%] bg-white font-bold flex flex-col items-center gap-[1.125rem] rounded-2xl py-6 text-center">
      <div className="grid gap-1">
        <h2 className="uppercase text-[#969696] text-[0.6875rem] tracking-wider">
          IP Address
        </h2>
        <p className="text-[#2b2b2b] text-lg tracking-wide">
          {ipData ? ipData.ip : "--"}
        </p>
      </div>
      <div className="grid gap-1">
        <h2 className="uppercase text-[#969696] text-[0.6875rem] text-center tracking-wider">
          Location
        </h2>
        <p className="text-[#2b2b2b] text-lg tracking-wide">
          {ipData
            ? `${ipData.location.city}, ${ipData.location.region} ${ipData.location.postalCode}`
            : "--"}
        </p>
      </div>
      <div className="grid gap-1">
        <h2 className="uppercase text-[#969696] text-[0.6875rem] text-center tracking-wider">
          Timezone
        </h2>
        <p className="text-[#2b2b2b] text-lg tracking-wide">
          {ipData ? `UTC ${ipData.location.timezone}` : "--"}
        </p>
      </div>
      <div className="grid gap-1">
        <h2 className="uppercase text-[#969696] text-[0.6875rem] text-center tracking-wider">
          ISP
        </h2>
        <p className="text-[#2b2b2b] text-lg tracking-wide">
          {ipData ? ipData.isp : "--"}
        </p>
      </div>
    </div>
  );
};

export default ResultBox;
