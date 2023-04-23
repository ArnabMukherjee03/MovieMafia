import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./Components/HomePage/Home.jsx";
import Nav from "./Components/Nav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Footer from "./Footer.jsx";
const App = ()=>{
  return(
    <>
      <Nav/>
      <Routes>
        <Route path="/" Component={Home}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;