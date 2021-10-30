import React from 'react'
import Schedulecmp from './Schedulecmp'

const Schedule = () => {
    return (
        <>
            <div className="schedule">
                <div className="schedulediv1">
                <div className="upcoming">
                    <h2>upcoming examination</h2>
                    <p>enquire about examination % register for exam</p>
                </div>
                </div>
                <div className="scheduledivv">
                <div className="schedulediv2 ">
                  <Schedulecmp value={{heading:"02th Octomber 2014"}}/>
                </div>
                <div className="schedulediv3 ">
                  <Schedulecmp value={{heading:"Nov-Dec 2016"}}/>
                </div>
                <div className="schedulediv4 ">
                  <Schedulecmp value={{heading:"Ongoing this year"}}/>
                </div>
                </div>
            </div>
        </>
    )
}

export default Schedule
