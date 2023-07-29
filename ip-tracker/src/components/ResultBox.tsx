import React from "react";
import { IResult } from "../interfaces/IResult";

interface Props {
  ipData: IResult;
}

const ResultBox = ({ ipData }: Props) => {
  return (
    <div className="absolute top-[10.5rem] w-[88%] max-w-[30rem] min-w-[15rem] left-[50%] translate-x-[-50%] bg-white font-bold flex flex-col items-center gap-[1.125rem] rounded-2xl py-6 text-center lg:flex-row lg:justify-between lg:gap-8 lg:items-start lg:max-w-[69.5rem] lg:top-[12.5rem] lg:px-8 lg:py-[2.125rem] lg:font-medium">
      <div className="grid gap-1 lg:w-[17rem] lg:border-r lg:h-[5.75rem] lg:gap-1.5 lg:place-content-start">
        <h2 className="uppercase text-[#969696] text-[0.6875rem] text-center tracking-wider lg:text-left lg:text-[0.8125rem]">
          IP Address
        </h2>
        <p className="text-[#2b2b2b] text-lg tracking-wide lg:text-2xl lg:text-left">
          {ipData ? ipData.ip : "--"}
        </p>
      </div>
      <div className="grid gap-1 lg:w-[17rem] lg:border-r lg:h-[5.75rem] lg:gap-1.5 lg:place-content-start">
        <h2 className="uppercase text-[#969696] text-[0.6875rem] text-center tracking-wider lg:text-left lg:text-[0.8125rem]">
          Location
        </h2>
        <p className="text-[#2b2b2b] text-lg tracking-wide lg:text-2xl lg:text-left">
          {ipData
            ? `${ipData.location.city}, ${ipData.location.region} ${ipData.location.postalCode}`
            : "--"}
        </p>
      </div>
      <div className="grid gap-1 lg:w-[17rem] lg:border-r lg:h-[5.75rem] lg:gap-1.5 lg:place-content-start">
        <h2 className="uppercase text-[#969696] text-[0.6875rem] text-center tracking-wider lg:text-left lg:text-[0.8125rem]">
          Timezone
        </h2>
        <p className="text-[#2b2b2b] text-lg tracking-wide lg:text-2xl lg:text-left">
          {ipData ? `UTC ${ipData.location.timezone}` : "--"}
        </p>
      </div>
      <div className="grid gap-1 lg:w-[17rem] lg:h-[5.75rem] lg:gap-1.5 lg:place-content-start">
        <h2 className="uppercase text-[#969696] text-[0.6875rem] text-center tracking-wider lg:text-left lg:text-[0.8125rem]">
          ISP
        </h2>
        <p className="text-[#2b2b2b] text-lg tracking-wide lg:text-2xl lg:text-left">
          {ipData ? ipData.isp : "--"}
        </p>
      </div>
    </div>
  );
};

export default ResultBox;
