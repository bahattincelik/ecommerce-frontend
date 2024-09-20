//import logo from './logo.svg';
//import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";


function App() {
  return (
    <Router>
      <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
      </Router>
  );
}

export default App;
