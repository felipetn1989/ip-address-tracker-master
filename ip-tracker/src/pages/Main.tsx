import React from "react";
import ResultBox from "../components/ResultBox";
import { IResult } from "../interfaces/IResult";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

interface Props {
  ipData: IResult;
}

const Main = ({ ipData }: Props) => {
  return (
    <main className="bg-black px-6 w-full h-[100vh]">
      <ResultBox ipData={ipData} />
    </main>
  );
};

export default Main;
