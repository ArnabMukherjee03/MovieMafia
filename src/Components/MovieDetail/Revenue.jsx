import React, { useEffect, useState } from "react";
import "./Revenue.css"


const Revenue = (Props)=>{
    const[moviedetails,setmoviedetails] = useState([]);
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/${Props.type}/${Props.id}?api_key=4e44d9029b1270a757cddc766a1bcb63`)
        .then(res => res.json())
        .then(data =>{
            setmoviedetails(data)
            
        }
        )
    },[])
    return(
        <>
            <div className="container-fluid Revenue">
                <div className="row">
                    <div className="col-lg-8 mt-2 revenueContent d-flex mx-auto align-items-center" style={{height:"20vh",justifyContent:"space-evenly",fontSize:"16px"}}>
                         <div className="Status text-center">
                            <p>Status</p>
                            <p>{moviedetails.status}</p>
                         </div>
                         <div className="Status text-center">
                            <p>original language</p>
                            <p>{moviedetails.original_language === "en" ? "English" : moviedetails.original_language}</p>
                         </div>
                         <div className="Status text-center">
                            <p>Budget</p>
                        <p>$ {moviedetails.budget}</p>
                         </div>
                         <div className="Status text-center">
                            <p>Revenue</p>
                            <p>$ {moviedetails.revenue}</p>
                         </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Revenue;