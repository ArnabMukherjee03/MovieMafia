import React from "react";
import '../../css/Home.css'

import Poster from "./Poster"
import Popular from "./Popular"
import Trailer from "./Trailer"


const Home = ()=>{
    return(
        <>
          <Poster/>
          <Popular/>
          <Trailer/>
        </>
    )
}

export default Home;