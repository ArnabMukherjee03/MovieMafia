import React from "react";
import { NavLink } from "react-router-dom";


const Nav = ()=>{
    return(
      <div style={{background:"rgb(3,37,65)"}}>
        <div className="container" >
        <div className="row">
            <div className="col px-auto">
               <nav class="navbar navbar-expand-lg ">
                 <h1 className="nav-link logo"> MovieMafia </h1>
                 <button class="navbar-toggler" style={{boxShadow: "none"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <i class="fa-solid fa-bars " style={{color:"#fff",fontSize:"20px"}}></i>
                 </button>
                 <div class="collapse navbar-collapse" style={{textAlign:"center"}} id="navbarSupportedContent">
                   <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                     <li class="nav-item">
                       <NavLink to="/" className="nav-link" aria-current="page" href="#">Home</NavLink>
                     </li>
                     <li className="nav-item dropdown">
                          <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Movies
                          </NavLink>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><NavLink to="movies/popular" className="dropdown-item" >Popular</NavLink></li>
                            <li><NavLink to="movies/now_playing" className="dropdown-item" href="#">Now Playing</NavLink></li>
                            <li><NavLink to="movies/upcoming" className="dropdown-item" href="#">Upcoming</NavLink></li>
                            <li><NavLink to="movies/top_rated" className="dropdown-item" href="#">Top Rated</NavLink></li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Tv Shows
                          </NavLink>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><NavLink to="tv_shows/popular" className="dropdown-item" >Popular</NavLink></li>
                            <li><NavLink to="tv_shows/airing_today" className="dropdown-item" href="#">On Tv</NavLink></li>
                            <li><NavLink to="tv_shows/top_rated"className="dropdown-item" href="#">Top Rated</NavLink></li>
                          </ul>
                        </li>
                        <li class="nav-item">
                       <NavLink to="/person" className="nav-link" aria-current="page" href="#">People</NavLink>
                       
                     </li>
                     <li class="nav-item">
                       <NavLink to="/contact" className="nav-link" aria-current="page" href="#">Contact</NavLink>
                     </li>
                   </ul> 
               </div>
               </nav>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Nav;