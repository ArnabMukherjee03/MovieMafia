import React, { useEffect, useState } from "react";
import "./cast.css";

const Cast = (Props) =>{
    const[cast,setcast] = useState([]);
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/${Props.type}/${Props.id}/credits?api_key=4e44d9029b1270a757cddc766a1bcb63`)
        .then(res => res.json())
        .then(data => setcast(data.cast))
    },[])
    return(
        <>
            <div className="container-fluid cast  mt-2">
             <h3 className="ms-4">Top Billed Cast</h3>
            <div className="mx-4 mt-3 media-scroller">
            {
                cast.map(cast =>{
                    if(cast.profile_path === null){
                        return(
                        <div className="castcard">
                                 <img src="https://feb.kuleuven.be/drc/LEER/visiting-scholars-1/image-not-available.jpg/image"  alt="" />
                                 <h5 className="mt-2 text-center">{cast && cast.original_name}</h5>
                                 <p className="mt-2 text-center" style={{fontSize:"14px"}}>{cast && cast.character}</p>
                        </div>)
                    }else{

                        return(
                        <div className="castcard">
                                 <img src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}  alt="" />
                                 <h5 className="mt-2 text-center">{cast && cast.original_name}</h5>
                                 <p className="mt-2 text-center" style={{fontSize:"14px"}}>{cast && cast.character}</p>
                        </div>)

                    }
                })
            }      
            </div>
            </div>
        </>
    )
}


export default Cast;