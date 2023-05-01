import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Trailer.css";
import "../../css/Popular.css";
let url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=a00d948b9f11dc6016db815528f62fad'
const Trailer = ()=>{
    const [TrendingMovies,setTrendingMovies] = useState([]);
     
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => 
            setTrendingMovies(data.results)
            )
    },[])

   
    return(
        <>
            <div className="container-fluid my-4 trailer" style={{background: `linear-gradient(
                rgba(3,37,65,.8), 
                rgba(3,37,65,.8)
              ),URL('https://image.tmdb.org/t/p/original/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg')`,backgroundPosition:"center",backgroundSize:"cover"}}>
            <div className="d-flex">
                <h3 className="ms-4 mt-5 ">Latest Movies</h3>
            </div>
                <div className="mx-4 mt-5 media-scroller traile-media">
                    {
                        TrendingMovies.map(movie => 
                           (<Link className="link" to={`movie/${movie.id}`} >
                            <div className="trailercard"   >
                                 <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}  alt="" />
                                 <h5 className="mt-2 trailer-head text-center">{movie.original_title}</h5>
                                 <p className="mt-2 text-center" style={{fontSize:"14px"}}>{movie.release_date}</p>
                            </div>
                            </Link>)
                            
                        )
                    }

                </div>
            </div>
        </>
    )
}


export default Trailer;