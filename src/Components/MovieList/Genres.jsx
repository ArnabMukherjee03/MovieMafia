import { Chip } from "@mui/material";
import React, { useEffect, useState } from "react";

const Genres = ({
    selectedGenres,
    genres,
    setGenres,
    setSelectedGenres,
    setpage,
    type
})=>{
    const handleAdd = (genre) =>{
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g)=> g.id !== genre.id));
        setpage(1);
    }
    
    const handleRemove = (genre) =>{
        setSelectedGenres(selectedGenres.filter((selected)=> selected.id !== genre.id));
        setGenres([...genres,genre]);
        setpage(1);
    }

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/genre/${type}/list?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setGenres(data.genres))
    },[]);
    return(
        <div className="d-flex mt-2 justify-content-center align-items-center" style={{gap:"20px",flexWrap:"wrap"}}>
           {selectedGenres && selectedGenres.map(genres =>
               (<Chip 
               label={genres.name}
                key={genres.id}
                color="primary"
                clickable
                onDelete={() => handleRemove(genres)}
               />)
           )}
           {genres && genres.map(genres =>
               (<Chip 
               label={genres.name}
                key={genres.id}
                clickable
                onClick = {()=> handleAdd(genres)}
               />)
           )}
        </div>
    )
}

export default Genres;