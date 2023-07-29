import React, { useState, useEffect } from "react";
import ResultBox from "../components/ResultBox";
import { IResult } from "../interfaces/IResult";

import L from "leaflet";
import marker from "../images/iconLocation.svg";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { LatLngExpression } from "leaflet";

interface Props {
  ipData: IResult;
  mapCoords: LatLngExpression;
}

const Main = ({ ipData, mapCoords }: Props) => {
  const [mapKey, setMapKey] = useState<number>(0);

  const markerIcon = new L.Icon({
    iconUrl: marker,
    iconSize: [35, 45],
  });

  useEffect(() => {
    setMapKey((prevKey) => prevKey + 1);
  }, [mapCoords]);

  return (
    <main className="w-full h-[100vh]">
      <ResultBox ipData={ipData} />
      <MapContainer
        key={mapKey}
        className="h-[100vh] -z-10"
        center={mapCoords ? mapCoords : [-19.922687, -43.945165]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={mapCoords ? mapCoords : [-19.922687, -43.945165]}
          icon={markerIcon}
        />
      </MapContainer>
    </main>
  );
};

export default Main;
