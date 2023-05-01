import React,{ useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "../card/Moviecard";
import "../../css/Popular.css";
let url = 'https://api.themoviedb.org/3/movie/popular?api_key=a00d948b9f11dc6016db815528f62fad&language=en-US'

const Popular = ()=>{
    const [PopularMovies,setPopularMovies] = useState([]);
    const [url_set,seturl] = useState(url);
    const [key,setkey] = useState("movie");
    useEffect(()=>{
        fetch(url_set)
        .then(res => res.json())
        .then(data => 
            setPopularMovies(data.results))
    },[url_set])

    const getdata = (para) => {
        if(para==="tv"){
            url = 'https://api.themoviedb.org/3/tv/popular?api_key=a00d948b9f11dc6016db815528f62fad&language=en-US'
            setkey("tv");
        }
        if(para==="movie"){
            url = 'https://api.themoviedb.org/3/movie/popular?api_key=a00d948b9f11dc6016db815528f62fad&language=en-US'
            setkey("movie");
        }
        seturl(url);
    }

    return(
        <>
            <div className="container-fluid my-4  popular">
            <div className="d-flex pop-top ">
                <h3 className="ms-4 mt-5 head ">What's Popular</h3>
                <div className="d-flex mt-5 ms-4  popularbtn align-items-center justify-content-center">
                   <NavLink className="tvbtn" onClick={(e)=>{getdata('tv')}}>On Tv</NavLink>
                   <NavLink className="tvbtn" onClick={(e)=>{getdata('movie')}}>In Theaters</NavLink>
                </div>
            </div>
                <div className="mx-4 mt-5 media-scroller">
                    {
                        PopularMovies.map(movie =>
                        {if(key === 'tv'){
                            return<Card
                                type = "tv"
                                id = {movie.id}
                                imgsrc={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}
                                title = {movie ? movie.name:""}
                                des={movie ? movie.overview.slice(0,118)+"..." : ""}
                                date={movie?movie.release_date:""}
                                Rating={movie?movie.vote_average:""}
                            />
                        } else if(key === 'movie'){
                            return<Card
                                type = "movie"
                                id = {movie.id}
                                imgsrc={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}
                                title = {movie ? movie.original_title:""}
                                des={movie ? movie.overview.slice(0,118)+"..." : ""}
                                date={movie?movie.release_date:""}
                                Rating={movie?movie.vote_average:""}
                            />
                        }}
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default Popular;