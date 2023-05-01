import React, { useEffect, useState } from "react";
import "./PeopleDetail.css";
import { NavLink, useParams } from "react-router-dom";

const PeopleDetail = () =>{
    const{id} = useParams();
    const[peopleDetail,setpeopleDetail] = useState([]);
    const[movie,setmovie]=useState([]);
    const[known,setknown]=useState([]);
    useEffect(()=>{
        window.scrollTo(0,0);
        fetch(`https://api.themoviedb.org/3/person/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&append_to_response=movie_credits`)
        .then(res => res.json())
        .then(data => {
            setpeopleDetail(data)
            setmovie(data.movie_credits.cast)
            setknown(data.also_known_as)
        })

    },[])
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 peopledetail mx-auto d-flex">
                         <div className="peopleImg mt-3">
                            <img src={`https://image.tmdb.org/t/p/original${peopleDetail && peopleDetail.profile_path}`} alt="" />
                         </div>
                         <div className="peopleContent mt-3">
                          <h1 className="ps-2 mt-2">{peopleDetail && peopleDetail.name}</h1>
                          <h5 className="ps-2 mt-4">Biography</h5>
                          <p className="ps-2 bio">{peopleDetail && peopleDetail.biography}</p>
                          <div className="mt-2 ps-2">
                            <h5>Known For</h5>
                            <div className="media-scroller">
                                {movie.map(movie =>{
                                    return(
                                        <NavLink to={`/movie/${movie.id}`} className="movieCard NavLink">
                                            <img src={movie.poster_path != null ?`https://image.tmdb.org/t/p/original${movie && movie.poster_path}` : "https://feb.kuleuven.be/drc/LEER/visiting-scholars-1/image-not-available.jpg/image"} alt="" />
                                            <p className="charname mt-2 text-center">{movie && movie.character}</p>
                                            <p className="moviename mt-2 text-center">{movie && movie.original_title}</p>
                                        </NavLink>
                                    )
                                })}
                            </div>
                          </div>
                         </div>
                    </div>                    
                </div> 
            </div>
            {/* Personal Info */}
            <div className="container-fluid personalInfo ">
                <div className="row">
                <h3 className="">Personal Info</h3>
                    <div className="col-lg-11 mt-2 mx-auto personalInfoContent d-flex">
                         <div className="">
                             <p>Known For</p>
                             <p className="text-center">{peopleDetail && peopleDetail.known_for_department}</p>
                         </div>
                         <div className="">
                             <p>Known Credits</p>
                             <p className="text-center">{movie && movie.length}</p>
                         </div>
                         <div className="">
                             <p>Gender</p>
                             <p className="text-center">{peopleDetail.gender === 1 ? "Female" : "Male"}</p>
                         </div>
                         <div className="">
                             <p className="text-center">Birthday</p>
                             <p className="text-center">{peopleDetail && peopleDetail.birthday}</p>
                         </div>
                         <div className="">
                             <p className="text-center">Place of Birth</p>
                             <p className="text-center">{peopleDetail && peopleDetail.place_of_birth}</p>
                         </div>
                         <div className="">
                             <p className="text-center">Also Known As</p>
                             <p className="text-center d-flex" >{
                                known[0]  
                             }</p>
                         </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PeopleDetail;