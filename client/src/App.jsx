import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ConnectWallet } from "@thirdweb-dev/react";
import Donor from "./pages/Donor";
import Login from "./pages/Login/Login";
import Org from "./pages/Org";
import Register from "./pages/Register/Register";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donor/*" element={<Donor />} />
        <Route path="/org/*" element={<Org />} />
      </Routes>
    </Router>
  );
}
