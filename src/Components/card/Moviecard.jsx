import React from "react";


const card =(Props)=>{
    return(
        
              <div className="moviecard" >
                      <img src={Props.imgsrc} alt="" />
                      <h3 className="card-title mt-2">{Props.title}</h3>
                      <p className="des">{Props.des}</p>
                      <p className="rate"><i class="fa-solid fa-star" style={{color: "#d9dc4c"}}></i> {Props.Rating}</p>
              </div>
    )
}

export default card;

