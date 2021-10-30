import React from 'react'
import Midcmp from './Midcmp'
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from 'react-icons/md'
const Mid = () => {
    return (
        <>
        <div className="mid">
        <div className="mid1">
            <Midcmp/>
            </div>
            <div className="mid1">
            <Midcmp/>
            </div>
            <div className="mid1">
            <Midcmp/>
            </div>
            <div className="mid2">
             <div className="middiv">
                 <button> <MdKeyboardArrowLeft className="left"/> </button>
                 <button><MdKeyboardArrowRight className="right"/></button>
             </div>
            </div>
            </div>
        </>
    )
}

export default Mid
