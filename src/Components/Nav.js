import React, { useContext } from 'react'
import Datastore from '../Datastore'
const Nav = () => {
const{uppernav,setuppernav}= useContext(Datastore);
    return (
        <>
            <div className="nav">
                <ul className={uppernav?"navul":"navul hide"}>
                    <li classNam>About Us</li>
                    <li className>Lorem Ipsum</li>
                    <li className>Lorem Ipsum</li>
                    <li className>Lorem Ipsum</li>
                    <li className>newsroom</li>
                    <li className>press Releases</li>
                    <li className>Lorem Ipsum</li>
                    <li className>privacy policy</li>
                    <li className>contact us</li>
                </ul>
            </div>
        </>
    )
}

export default Nav
