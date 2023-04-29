import React, { useEffect, useState } from "react";
import { mockComponent } from "react-dom/test-utils";


const Review = (Props)=>{
    const [review,setreview] = useState([]);
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/${Props.type}/${Props.id}/reviews?api_key=4e44d9029b1270a757cddc766a1bcb63`)
        .then(res => res.json())
        .then(data => setreview(data.results))
    },[]);
    
    return(
        <>
            { Props.type === "movie" ?
            <div className="container-fluid Review">
                <h3 className="ms-4">Movie Reviews</h3>
                <div className="d-flex col-10 mx-auto" style={{flexDirection:"column"}}>
                {
                    review.map(review =>{
                        return(
                    
                            <div className="review-content mt-4 d-flex" style={{gap:"30px"}}>
                    <div className="review-avtar">
                      <img src={review.author_details.avatar_path  ? review.author_details.avatar_path.charAt(1) != "h" ? `https://image.tmdb.org/t/p/original${review.author_details.avatar_path}` : review.author_details.avatar_path.slice(1,) : 'https://cdn-icons-png.flaticon.com/512/147/147140.png'} width={60} height={60} style={{borderRadius:"50%"}} alt="" srcset="" />
                    </div>
                    <div className="">
                        <h4>A review by {review.author_details.username}</h4>
                        <p>Written by {review.author_details.username} on {review.created_at.slice(0,10)}</p>
                        <p className="mt-2">
                        {review.content}
                             </p>
                    </div>
                  </div>
                  
                    )
                })
                }
                </div>
            </div>
             : ""}
        </>
    )
}

export default Review;