import React, { useState } from "react";




const Contact = ()=>{
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    });

    const InputEvent = (event)=>{
        const{name,value}= event.target;
        setData((preval)=>{
           return{
            ... preval,
            [name]: value,
        }
        })
    };

    const formSubmit = (e)=>{
        e.preventDefault();
        alert(`${data.fullname}`);
    } ;

    return(
        <>
            <div className="my-5">
                <h1 className="text-center">
                Contact Us
                </h1>
            </div>

            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                        <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                          <input type="text" class="form-control"  name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name"/>
                        </div>
                        <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">Phone</label>
                          <input type="Number" class="form-control"  name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your Mobile No"/>
                        </div>
                        <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">Email address</label>
                          <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
                        </div>
                        <div class="mb-3">
                          <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
                        </div>
                        <div className="col-12 mb-5">
                            <button className="btn btn-outline-secondary" type="submit">Submit Form</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;