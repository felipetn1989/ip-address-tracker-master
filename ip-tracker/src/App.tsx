import React, { ChangeEvent, FormEvent, useState } from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import { IResult } from "./interfaces/IResult";
import { LatLngExpression } from "leaflet";

function App() {
  const [ip, setIp] = useState<string>();
  const [ipResult, setIpResult] = useState<IResult>();
  const [mapCoords, setMapCoords] = useState<LatLngExpression>();
  const [isIpValid, setIsIpValid] = useState<boolean>(true);

  function ipToSearch(e: ChangeEvent<HTMLInputElement>): void {
    setIp(e.target.value);
    console.log(e.target.value);
  }

  function findIp(e: FormEvent<HTMLFormElement>): void {
    let regex: RegExp =
      /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    e.preventDefault();

    setIsIpValid(regex.test(ip!));

    if (!regex.test(ip!)) return;

    async function getData() {
      try {
        const resp = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_Z9HHQtia6koaHsxQoC6Bffd27OLxO&ipAddress=${ip}`
        );
        const data = await resp.json();
        setIpResult(data);
        setMapCoords([data.location.lat, data.location.lng]);
        console.log([data.location.lat, data.location.lng]);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }

  return (
    <div className="App">
      <Header
        handleChange={ipToSearch}
        handleSubmit={findIp}
        isIpValid={isIpValid}
      />
      <Main ipData={ipResult!} mapCoords={mapCoords!} />
    </div>
  );
}

export default App;
