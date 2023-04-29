import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "../../css/upcoming.css";


const Upcoming = () =>{
    const [UpcomingMovies,setUpcomingMovies] = useState([]);
     
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=a00d948b9f11dc6016db815528f62fad')
        .then(res => res.json())
        .then(data => 
            setUpcomingMovies(data.results)
            )
    },[])

    return(
        <>
            <div className="container-fluid UpcomingMovies">
                <div className="mt-2 text-center">
                    <h1>Upcoming Movies</h1>
                    <p>Our most recently released reviews</p>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 mx-auto mt-3 gallery ">
                              <NavLink className="box NavLink" to={`movie/${UpcomingMovies[4] && UpcomingMovies[4].id}`}>
                                <div className="img" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${UpcomingMovies[4] && UpcomingMovies[4].backdrop_path})`}}></div>
                                <h3 className="mt-2">{UpcomingMovies[4] && UpcomingMovies[4].original_title}</h3>
                                </NavLink>
                            <NavLink className="box NavLink" to={`movie/${UpcomingMovies[6] && UpcomingMovies[6].id}`}>
                
                                <img src={`https://image.tmdb.org/t/p/original${UpcomingMovies[6] && UpcomingMovies[6].backdrop_path}`} alt=""  />
                                <h3 className="mt-2">{UpcomingMovies[6] && UpcomingMovies[6].original_title}</h3>
                    
                            </NavLink>
                            <NavLink className="box NavLink" to={`movie/${UpcomingMovies[16] && UpcomingMovies[16].id}`}>
                            
                                <img src={`https://image.tmdb.org/t/p/original${UpcomingMovies[16] && UpcomingMovies[16].backdrop_path}`} alt=""  />
                                <h3 className="mt-2">{UpcomingMovies[16] && UpcomingMovies[16].original_title}</h3>
                                
                            </NavLink>
                            <NavLink className="box NavLink" to={`movie/${UpcomingMovies[7] && UpcomingMovies[7].id}`}>
                            
                                <img src={`https://image.tmdb.org/t/p/original${UpcomingMovies[7] && UpcomingMovies[7].backdrop_path}`} alt=""  />
                                <h3 className="mt-2">{UpcomingMovies[7] && UpcomingMovies[7].original_title}</h3>
                    
                            </NavLink>
                            <NavLink className="box NavLink" to={`movie/${UpcomingMovies[3] && UpcomingMovies[3].id}`}>
                            
                                <img src={`https://image.tmdb.org/t/p/original${UpcomingMovies[3] && UpcomingMovies[3].backdrop_path}`} alt=""  />
                                <h3 className="mt-2">{UpcomingMovies[3] && UpcomingMovies[3].original_title}</h3>
                                 
                            </NavLink> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Upcoming;

