import React from "react";
import { NavLink } from "react-router-dom";


const card =(Props)=>{
    return(
          <NavLink className="NavLink" to={`/${Props.type}/${Props.id}`}>
              <div className="moviecard" >
                      <img src={Props.imgsrc} alt="" />
                      <h3 className="card-title mt-2">{Props.title}</h3>
                      <p className="des">{Props.des}</p>
                      <p className="vote"><i class="fa-solid fa-star" style={{color: "#d9dc4c",fontSize: "16px"}}></i> {Props.Rating}</p>
              </div>
            </NavLink>
    )
}

export default card;

