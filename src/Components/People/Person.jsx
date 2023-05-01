import React, { useEffect, useState } from "react";
import "./Person.css";
import { NavLink } from "react-router-dom";

const Person = ()=>{
    const[person,setpersons]=useState([]);
    const[page,setpage] = useState(1);
    const[nbpages,setnbpages] = useState(0);
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/person/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${page}`)
        .then(res => res.json())
        .then(data => {
        setpersons(data.results)
        setnbpages(data.total_pages)
        }
        )
        window.scrollTo(0,0);
    },[page]);
    const prev = ()=>{  
        if(page <= 1){
            setpage(1)
        }else{
            setpage(page-1)
        }
    }
    return(
        <>
           <div className="container-fluid Person">
            <div className="row">
                <h3 className="mt-3 text-center">Popular Persons</h3>
                <div className="col-lg-10 mx-auto mt-3 d-flex personitems align-items-center justify-content-center">
                {
                    person.map(person =>{
                        return(
                            <NavLink to={`/person/${person && person.id}`} className="NavLink person-card">
                            
                               <img src={`https://image.tmdb.org/t/p/original${person && person.profile_path}`} alt="" />
                               <h3 className="mt-2 personname text-center" >{person && person.name}</h3>
                            
                            </NavLink>
                        )
                    })
                }
                </div>
            </div>
           </div>
           <div className="Pagination d-flex container-fluid justify-content-center mt-3">
            <button className="pagination-btn" onClick={()=> prev()}>Prev</button>
            <div className="d-flex align-items-center justify-content-center">{page} of {nbpages} </div>
            <button className="pagination-btn" onClick={()=> setpage(page+1)}>Next</button>
           </div>
        </>
    )
}

export default Person;