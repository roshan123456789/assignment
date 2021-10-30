import React from 'react'
import {BsFillClockFill,BsCalendar4} from 'react-icons/bs'
const Schedulecmp = (props) => {
    return (
        <>

            <div className="schedulecmp">
                <div className="schedulecmp1 ">
                  <img src="https://img.icons8.com/pastel-glyph/64/000000/overtime--v1.png" className="scheduleicon"/>
                </div>
                <div className="schedulecmp2 ">
                    <h4>{props.value.heading}</h4>
                    <p>level 1 exam</p>
                </div>
            </div>
        </>
    )
}

export default Schedulecmp
