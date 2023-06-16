import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input } from "@mui/material";

const app = () => {
  const [query, setQuery] = useState("Pizza");
  const [vendors, setVendors] = useState("123");
  const [lat, setLat] = useState("0");
  const [long, setLong] = useState("0");
  const [geid, setGeid] = useState("PY_AR");

  return (
    <div className="App">
      <Input val/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
