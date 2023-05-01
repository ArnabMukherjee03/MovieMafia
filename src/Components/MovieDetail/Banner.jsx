import React, { useEffect, useState } from "react";
import "./Movie.css"
import "../../../node_modules/react-modal-video/scss/modal-video.scss"
import ModalVideo from 'react-modal-video'


const Banner = (Props)=>{
    const[moviedetails,setmoviedetails] = useState([]);
    const[genres,setgeneres] = useState([]);
    const[director,setdirector] = useState([]);
    const[trailer,settrailer] = useState([]);
    const [isOpen, setOpen] = useState(false);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/${Props.type}/${Props.id}?api_key=4e44d9029b1270a757cddc766a1bcb63&append_to_response=credits`)
        .then(res => res.json())
        .then(data =>{
            setmoviedetails(data)
            setgeneres(data.genres)
            setdirector(data.credits.crew.filter(({job})=> job ==='Director'))
        }
        )
    },[])
      
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/${Props.type}/${Props.id}/videos?api_key=4e44d9029b1270a757cddc766a1bcb63`)
        .then(res => res.json())
        .then(data => settrailer(data.results.filter(({type}) => type ==='Trailer')))
    },[])
    

    return(
        <>
            <div className="banner" style={{backgroundImage: `linear-gradient(
                rgba(3,37,65,.5), 
                rgba(3,37,65,.5)
              ),url(https://image.tmdb.org/t/p/original${moviedetails.backdrop_path})`}}>
              <div className="row">
                <div className="col-11 mx-auto mb-4 d-flex align-items-center justify-content-center">
                    <img src={`https://image.tmdb.org/t/p/original${moviedetails.poster_path}`} width={250} alt="" />
                    <div className="banner-content">
                         <h2 className="mt-5 ps-4 pt-4">{moviedetails.original_title || moviedetails.name}</h2>
                         <div className="ps-4 movie-type d-flex align-items-center">
                            <p className="ps-1">{moviedetails.release_date || moviedetails.first_air_date}</p>
                            <i class="fa-solid fa-circle-dot" style={{color: "#ffffff"}}></i>
                            <div className="genres  d-flex ">
                                  {
                                        genres.map(movie =>{
                                        return((
                                            <p>{movie.name}</p>
                                        ))
                                      })
                                  }
                            </div>
                            <i class="fa-solid fa-circle-dot" style={{color: "#ffffff"}}></i>
                            {Props.type === "movie" ? <p className="runtime">{Math.floor(moviedetails.runtime / 60)}h {moviedetails.runtime % 60}m</p> : <p className="runtime">Seasons : {moviedetails.number_of_seasons}</p>}
                         </div>

                         {/* Trailer Section with Progress Bar */}
                         <div className="mt-2 ps-4 d-flex">
                            <div className="rate d-flex ps-1 align-items-center">
                                <p>{Math.floor(moviedetails.vote_average * 10)}%</p>
                                <div class="progress">
                                 <div class="progress-bar" role="progressbar" style={{width: `${Math.floor(moviedetails.vote_average * 10)}%`}}  aria-valuemin="0" aria-valuemax="100"></div>
                               </div>
                            </div>
                            {  trailer.map(trailer =>{
                                return(
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={trailer.key} onClose={() => setOpen(false)} />
                                )
                            })
                            }
                            <div className="trailer ms-5 ps-5 d-flex align-items-center" onClick={()=> setOpen(true)} style={{cursor:"pointer"}}>
                                <i class="fa-solid fa-play" style={{color:"#fff"}}></i>
                                <p>Play Trailer</p>
                            </div>
            
                         </div>

                         <div className="tagline mt-3 ps-4">
                            <p className="ps-1">{moviedetails.tagline}</p>
                         </div>

                         {/* Overview */}
                         <div className="overview mt-3 ps-4">
                            <h2 className="ps-1">Overview</h2>
                            <p className="ps-1">
                                {moviedetails.overview}
                            </p>
                         </div>

                         {/* Director */}
                         <div className="director d-flex ps-4 mt-3">
                            {
                                director.map(director=>{
                                    return (
                                        <div className="ps-1 d-flex director-content">
                                            <p >{director.original_name}</p>
                                            <p>{director.job}</p>
                                        </div>
                                    )
                            })
                            }
                         </div>

                    </div>
                </div>
              </div>
            </div>
            {/* Small Screen */}
            <div className="banner-small d-flex">
                <div className="banner-top" style={{backgroundImage: `linear-gradient(
                rgba(3,37,65,.5), 
                rgba(3,37,65,.5)
              ),url(https://image.tmdb.org/t/p/original${moviedetails.backdrop_path})`}}>
                    <img src={`https://image.tmdb.org/t/p/original${moviedetails.poster_path}`} width={100} className="mt-2 ms-4" alt="" />
                </div>
                <div className="banner-small-content pb-2">
                <h2 className="text-center mt-3">{moviedetails.original_title || moviedetails.name}</h2>
                {/* Trailer */}
                {  trailer.map(trailer =>{
                                return(
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={trailer.key} onClose={() => setOpen(false)} />
                                )
                            })
                 }          <div className="d-flex align-items-center justify-content-center" onClick={()=> setOpen(true)} style={{cursor:"pointer"}}>
                                <i class="fa-solid fa-play" style={{color:"#fff"}}></i>
                                <p className="ms-3">Play Trailer</p>
                            </div>
                {/* trdcfhj */}
                <div className="small-x mt-2  d-flex align-items-center justify-content-center">
                            <div className="d-flex  small-date  align-items-center justify-content-center">
                            <p className="">{moviedetails.release_date || moviedetails.first_air_date}</p>
                            {Props.type === "movie" ? <p className="runtime">{Math.floor(moviedetails.runtime / 60)}h {moviedetails.runtime % 60}m</p> : <p className="runtime">Seasons : {moviedetails.number_of_seasons}</p>}
                            </div>
                            <div className="smallgenres  d-flex ">
                                  {
                                        genres.map(movie =>{
                                        return((
                                            <p>{movie.name}</p>
                                        ))
                                      })
                                  }
                            </div>
                         </div>
                         <div className="smalltagline mt-3 ps-3">
                            <p className="ps-1">{moviedetails.tagline}</p>
                         </div>
                    {/* Overview */}
                    <div className="overview mt-2  ps-3">
                            <h2 className="ps-1">Overview</h2>
                            <p className="ps-1">
                                {moviedetails.overview}
                            </p>
                    </div>
                    {/* Director */}
                    <div className="smalldirector d-flex ps-3  mt-2">
                            {
                                director.map(director=>{
                                    return (
                                        <div className="ps-1 d-flex director-content">
                                            <p >{director.original_name}</p>
                                            <p>{director.job}</p>
                                        </div>
                                    )
                            })
                            }
                         </div>
                </div>
            </div>
        </>
    )
}

export default Banner;