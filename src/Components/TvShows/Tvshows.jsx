import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../css/Pagination.css";
import "../MovieList/Movielist.css";
import Card from "../MovieList/Card";
import Genres from "../MovieList/Genres";
import useGenres from "../../Hooks/useGenre";
const MovieList = ()=>{
    const {type} = useParams();
    
    const[Movie,setMovies] = useState([]);
    const[page,setpage] = useState(1);
    const[nbpages,setnbpages] = useState(0);
    const[selectedGenres,setSelectedGenres] = useState([]);
    const[genres,setGenres] = useState([]);
    const genreforurl = useGenres(selectedGenres);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${page}&with_genres=${genreforurl}`)
        .then(res => res.json())
        .then(data => {
            setMovies(data.results)
            setnbpages(data.total_pages)}
        )
        window.scrollTo(0,0);
    }, [type,page,genreforurl])
    
    const prev = ()=>{  
        if(page <= 1){
            setpage(1)
        }else{
            setpage(page-1)
        }
    }

    return(
        <>
            <div className="container-fluid">
               <div className="row">
               <div className="col-lg-10 mx-auto mt-2 d-flex justify-content-center align-items-center">
               <Genres type="tv" setpage={setpage} selectedGenres={selectedGenres} genres={genres} setSelectedGenres={setSelectedGenres} setGenres={setGenres} />
               </div>
               <div className="col-lg-10 mx-auto movielistbar mt-3">
              
               {
                Movie.map( movie =>(
                  <Card
                    key = {movie.id}
                    type = "tv"
                    id={movie.id}
                    imgsrc={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`}
                    title={movie.original_name}
                    date={movie.first_air_date}
                    rate={movie.vote_average * 10}
                  />
                ))
            }
               
               </div>
               </div>
            </div>
           

           <div className="Pagination d-flex container-fluid justify-content-center mt-3">
            <button className="pagination-btn" onClick={()=> prev()}>Prev</button>
            <div className="d-flex align-items-center justify-content-center">{page} of {nbpages} </div>
            <button className="pagination-btn" onClick={()=> setpage(page+1)}>Next</button>
           </div>
           
        </>
        
    )
        
}

export default MovieList;