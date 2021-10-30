import React from 'react'
import Countcmp from './Countcmp'
const Count = () => {
    return (
        <>
        <div className="count">
            <div className="countt">
                <div className=" count1">
                    <Countcmp value={{con:"123+"}}/>
                </div>
                <div className="count2">
                    <Countcmp value={{con:"12+"}}/>
                </div>
                <div className="count3">
                    <Countcmp value={{con:"12+"}}/>
                </div>
                <div className="count4">
                    <Countcmp value={{con:"123+"}}/>
                </div>
            </div>
            </div>
        </>
    )
}

export default Count
