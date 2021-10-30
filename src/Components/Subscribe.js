import React from 'react'
import {MdPlayArrow} from 'react-icons/md';
const Subscribe = () => {
    return (
        <>
        <div className="container-fluid subs">
            <div className="subscribe row">
                <div className="subscribe1 col-md-6 col-12">
                     <h5>Subscribe</h5>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve</p>
                     <div className="sub1">
                         <input type="email" placeholder="Enter Your Email Address"/>
                         <button>Subscribe Now<MdPlayArrow className="button"/></button>
                     </div>
                </div>
                <div className="subscribe2 col-md-6 col-0">
                   <img src="images/sv.svg" alt="" className="sv"/>
                </div>
                </div>
            </div>
        </>
    )
}

export default Subscribe
