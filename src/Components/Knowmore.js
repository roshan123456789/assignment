import React from 'react'
import {BiDotsVerticalRounded} from "react-icons/bi"
import {IoMdArrowDropright} from "react-icons/io"
const Knowmore = () => {
    return (
        <>
            <div className="container-fluid  m-0 p-0">
                <div className="knowmore1 row">
                    <div className='knowmorediv1 col-md-6 '>
                        <h1>
                            lorem ipsum
                        </h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <button>Know more<IoMdArrowDropright className="rightarrow"/></button>
                    </div>

                    <div className="knowmorediv2 col-md-6 ">
                    <div className="dots p-0"> 
                    <img src='images/happysv.svg' alt="" className="svg"/>
                        <BiDotsVerticalRounded className="maindot"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Knowmore
