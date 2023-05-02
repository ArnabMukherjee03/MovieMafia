import React from "react";
import '../../css/Home.css'
import "../../Responsive/Home.css"

import Poster from "./Poster"
import Popular from "./Popular"
import Trailer from "./Trailer"
import Upcoming from "./Upcome.jsx"


const Home = ()=>{
    return(
        <>
          <Poster/>
          <Popular/>
          <Trailer/>
          <Upcoming/>
        </>
    )
}

export default Home;