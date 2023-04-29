import React from "react";
import { useParams } from "react-router-dom";
import Banner from "./Banner";
import Revenue from "./Revenue";
import Cast from "./Cast";
import Review from "./Review";


const Movie = () =>{
    const {id} = useParams();
    const {type} = useParams();
    window.scrollTo(0,0);
    return (
        <>
           <Banner id={id}  type={type}/>
           <Revenue id={id} type={type}/>
           <Cast id={id} type={type}/>
           <Review id={id} type={type}/>
        </>
    )
}

export default Movie;