import React from 'react'
import { BsDot } from 'react-icons/bs'
const Sectioncmp = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 p-0 m-0 ">
                        <div className="sectioncmp1">
                            <div className="cmp1">
                                <h3>19 </h3>
                                <h3>march</h3>
                                <BsDot className="dot" />

                                <BsDot className="dott" />
                            </div>
                            <div className="cmp2">
                                <h3>2021</h3>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-7 p-0">
                        <div className="sectioncmp2">
                            <h5>Lorem Ipsum</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                            <p className="timedate">07:00-10.00(march 20.2021)</p>
                            <a hef="#" className="link">Register now</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sectioncmp
