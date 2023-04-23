import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const Poster = ()=>{

    const [TrendingMovies,setTrendingMovies] = useState([]);

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=a00d948b9f11dc6016db815528f62fad")
        .then(res => res.json())
        .then(data => 
            setTrendingMovies(data.results))
    },[])
    

    return(
       <div className="container-fluid">
        <div className="row">
            <div className="col">
              <Carousel 
              showThumbs={false}
              autoPlay = {true}
              autoFocus = {true}
              transitionTime={1}
              infiniteLoop={true}
              showStatus={false}
              >
                {
                    TrendingMovies.slice(0,10).map(movie =>(
                        <>
                        <div className="poster-img">
                        <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                        </div>
                        <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                        </>
                    ))
                }
              </Carousel>
           </div>
        </div>
       </div>
    )
}

export default Poster;