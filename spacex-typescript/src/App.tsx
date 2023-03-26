import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Launches from "./components/Launches";
import LaunchDetails from "./components/LaunchDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/launches" element={<Launches />}/>
          <Route path="/:id" element={<LaunchDetails />} />
          
        </Routes>
        </div>
    </Router>
  );
}

export default App;
