import React from "react";

import "../css/Footer.css"

const Footer = ()=>{
    return(
        <div className="footer mt-5 container-fluid" style={{backgroundColor:"rgb(3,37,65)",color:"#fff"}}>
            <div className="row">
                <div className="col-8 footer-item mx-auto d-flex">
                     <div className="item d-flex align-items-center justify-content-center">
                        <div className="logo">MovieMafia</div>
                        <button className="footer-btn">Join Our Community</button>
                     </div>
                     <div className="item d-flex  justify-content-center">
                        <h3>Basics</h3>
                        
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Support</li>
                       
                     </div>
                     <div className="item d-flex  justify-content-center">
                        <h3>Get Involved</h3>
                       
                       <li> Contribution Bible</li>
                       <li> Add New Movie</li>
                       <li> Add New TV Show</li>
                       
                     </div>
                     <div className="item d-flex  justify-content-center">
                        <h3>Community</h3>
                        
                       <li> Guidelines</li>
                       <li> Discussions</li>
                       <li> Leaderboard</li>
                       <li> Twitter</li>
                        
                     </div>
                     <div className="item d-flex  justify-content-center">
                        <h3>Legal</h3>
                        
                       <li> Terms of Use</li>
                       <li> API Terms of Use</li>
                       <li> Privacy Policy</li>
                       
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;