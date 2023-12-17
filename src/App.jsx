import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Countries from "../components/countries/Countries";

function App() {
  return (
    <div className="app">
      <Countries className="cont"></Countries>
    </div>
  );
}

export default App;
