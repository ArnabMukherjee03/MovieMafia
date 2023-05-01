import React, { useEffect, useState } from "react";
import "./similar.css";
import { NavLink } from "react-router-dom";

const Similar = (Props)=>{
    const[similar,setsimilar] = useState([]);
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/${Props.type}/${Props.id}/similar?api_key=4e44d9029b1270a757cddc766a1bcb63`)
        .then(res => res.json())
        .then(data => setsimilar(data.results))
    },[])
    
    const refresh = ()=>{
        
        setTimeout(() => { window.location.reload(); }, 10); 
    }
   
    return (
        <>
            <div className="container-fluid similar">
                <h3 className="ms-4" >Similar Movies</h3>
                <div className="mt-3 mx-4 media-scroller">
                      {
                         similar.map(movie =>{
                            return(
                                <> 
                                    <NavLink to={`/${Props.type}/${movie && movie.id}`} onClick={refresh} >
                                    <img src={movie && movie.poster_path != null ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : "https://feb.kuleuven.be/drc/LEER/visiting-scholars-1/image-not-available.jpg/image"} alt="" srcset="" />
                                    </NavLink>
                                </>
                            )
                         })
                      }
                </div>
            </div>
        </>
    )
}

export default Similar;