import React, { ChangeEvent, FormEvent, useState } from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import { IResult } from "./interfaces/IResult";

function App() {
  const [ip, setIp] = useState<string>();
  const [ipResult, setIpResult] = useState<IResult>();

  function ipToSearch(e: ChangeEvent<HTMLInputElement>): void {
    setIp(e.target.value);
    console.log(e.target.value);
  }

  function findIp(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    async function getData() {
      try {
        const resp = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_Z9HHQtia6koaHsxQoC6Bffd27OLxO&ipAddress=${ip}`
        );
        const data = await resp.json();
        setIpResult(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }

  return (
    <div className="App">
      <Header handleChange={ipToSearch} handleSubmit={findIp} />
      <Main ipData={ipResult!} />
    </div>
  );
}

export default App;
