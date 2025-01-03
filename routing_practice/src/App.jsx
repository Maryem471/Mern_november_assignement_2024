import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DisplayNumber from "./pages/DisplayNumber";
import DisplayWord from "./pages/DisplayWord";
import DisplayStyledWord from "./pages/DisplayStyledWord";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Routes>
       
          <Route path="/home" element={<Home />} />
          
        
          <Route path="/:number" element={<DisplayNumber />} />
          
       
          <Route path="/:word" element={<DisplayWord />} />
          
         
          <Route path="/:word/:color1/:color2" element={<DisplayStyledWord />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
