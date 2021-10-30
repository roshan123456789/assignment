import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md';
const Quick = () => {
    return (
        <>
            <div className="quick "> 
                    <h2>quick links<MdKeyboardArrowRight/></h2>
                    <p>lorem ipsum</p>
                    <div className="quicknested">
                        <div className="quicknested1">
                            <h2>level 1</h2>
                            <h2>level 3</h2>
                        </div>
                        <div className="quicknested2">
                            <h2>level 2</h2>
                            <h2>Enquiry</h2>
                        </div>
                    </div>
                    </div>

        </>
    )
}

export default Quick
