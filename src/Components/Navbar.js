import React, { useContext, useState } from 'react'
import { IoIosArrowDown,IoIosArrowForward } from 'react-icons/io';
import { BiSearch } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import {MdContactSupport} from 'react-icons/md'
import Datastore from '../Datastore';
const Navbar = () => {
    const{uppernav,setuppernav}=useContext(Datastore);
    // const[uppernav,setuppernav]=useState(false);
    const [toggle, settoggle] = useState(false);
    const change = () => {
        settoggle(!toggle);
    }
    const change1=()=>{
        setuppernav(!uppernav);
    }
    return (
        <>
            <div className="navbar">
                <ul className=" navbarul1  ">
                    <h1>LOGO</h1>
                    <div className="menu">
                    <MdContactSupport onClick={change1} className="hamburger1"/>
                    <GiHamburgerMenu onClick={change} className="hamburger" />
                    </div>
                </ul>
                <ul className={toggle ? 'navbarul2' : 'navbarul2 navbarul23'}>
                    <li>qualification{toggle ? <IoIosArrowForward className="arrow"/> : <IoIosArrowDown className="arrow" />}</li>
                    <li>organization{toggle ? <IoIosArrowForward className="arrow"/> : <IoIosArrowDown className="arrow" />}</li>
                    <li>Research & analysis{toggle ? <IoIosArrowForward className="arrow"/> : <IoIosArrowDown className="arrow" />}</li>
                    <li>Lorem Ipsum{toggle ? <IoIosArrowForward className="arrow"/> : <IoIosArrowDown className="arrow" />}</li>
                    <li>Lorem Ipsum{toggle ? <IoIosArrowForward className="arrow"/> : <IoIosArrowDown className="arrow" />}</li>
                </ul>
                <ul className={toggle ? 'navbarul3' : 'navbarul3 navbarul23'}>
                <div className="search-box"> 
                  <input type="text" placeholder="search" className="searchtext"/>
                 
                    <BiSearch className="search" />
                    </div>
                    <button className="enrol">Enrolment</button>

                </ul>
            </div>
        </>
    )
}

export default Navbar
