import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
