import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./Components/HomePage/Home.jsx";
import Nav from "./Components/Nav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Footer from "./Components/Footer.jsx";
import MovieList from "./Components/MovieList/Movielist.jsx";
import Tvshows from "./Components/TvShows/Tvshows.jsx";
import Movie from "./Components/MovieDetail/Movie.jsx";
import Person from "./Components/People/Person.jsx";
import PeopleDetail from "./Components/People/PeopleDetail.jsx";
import Contact from "./Components/Contact.jsx";
const App = ()=>{
  return(
    <>
      <Nav/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="movies/:type" Component={MovieList}></Route>
        <Route path="tv_shows/:type" Component={Tvshows}></Route>
        <Route path=":type/:id" Component={Movie}></Route>
        <Route path="/person" Component={Person}></Route>
        <Route path="/person/:id" Component={PeopleDetail}></Route>
        <Route path="/contact" Component={Contact}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;