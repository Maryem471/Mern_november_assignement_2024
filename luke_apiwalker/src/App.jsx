import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Character from "./pages/Character";
import Planet from "./pages/Planet";
import Home from "./pages/Home";

function App() {
  const [resource, setResource] = useState("people");
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (id.trim() === "") return;
    navigate(`/${resource}/${id}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Star Wars API Navigator</h1>

    
      <div style={{ marginBottom: "20px" }}>
        <select value={resource} onChange={(e) => setResource(e.target.value)}>
          <option value="people">People</option>
          <option value="planets">Planets</option>
          <option value="starships">Starships</option>
          <option value="vehicles">Vehicles</option>
        </select>

        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter ID"
          style={{ marginLeft: "10px" }}
        />

        <button onClick={handleSearch} style={{ marginLeft: "10px" }}>
          Search
        </button>
      </div>

     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people/:id" element={<Character />} />
        <Route path="/planets/:id" element={<Planet />} />
        <Route path="*" element={<div>These aren't the droids you're looking for.</div>} />
      </Routes>
    </div>
  );
}

export default App;
