import React, { useEffect, useState } from "react";
import Skeleton ,{ SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "./card.css"
import { NavLink } from "react-router-dom";
const Card = (Props)=>{
    const[isLoading,setLoading]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },1500)
    },[])
     return(
        <>
        {
            isLoading
            ?
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              <p>
                <Skeleton height={300} width={200} duration={2}  />
              </p>
            </SkeletonTheme>
            :
         <NavLink className="NavLink" to={`/${Props.type}/${Props.id}`}>
         <div className="Moviecard d-flex">
             <img src={Props.imgsrc} alt="" srcset="" />
             <div className="moviecardcontent">
             <h5 className="ps-2 pt-3">{Props.title}</h5>
             <p className="mt-2 ps-2 mb-2">{Props.date}</p>
             </div>
             <div className="circle d-flex align-items-center justify-content-center">
             {Props.rate} %
             </div>
         </div>
         </NavLink>
        }
        </>
     )
}

export default Card;