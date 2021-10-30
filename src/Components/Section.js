import React from 'react'
import Sectioncmp from './Sectioncmp'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { GiEagleEmblem } from 'react-icons/gi'
import { BsDot } from 'react-icons/bs'
import { AiFillPlayCircle } from 'react-icons/ai'
const Section = () => {
    return (
        <>
            <div className="container-fluid sectionback ">
                <div className="row  m-0">
                    <div className="col-md-6 p-0 sections">
                        <div className="heading1">
                            <h2>Lorem ipsum</h2>
                        </div>
                        <div className="elements">
                        <div className="element1">
                        <div className="sectiondiv1">
                            <div className="row div1">
                                <div className="col-md-4 p-0">
                                    <img src="images/work.jpg" alt="" className="image" />
                                </div>
                                <div className="col-md-8 div2">
                                    <h5>quoate of the month</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                </div>
                            </div>


                            <div className="sectiondiv2">
                                <div className="row div1">
                                    <div className="col-md-4 p-0">
                                        <img src="images/work1.jpg" alt="" className="image" />
                                    </div>
                                    <div className="col-md-8 div2">
                                        <h5>hiring this month</h5>
                                        <div className="sectionnest">
                                            <h3 className="sectionnest1"><GiEagleEmblem className="eagle" />barclays</h3>
                                            <h3 className="sectionnest2">deolite<BsDot className="circle" /></h3>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>


                            <div className="sectiondiv3">
                                <div className="row divv1">
                                    <div className="col-md-4 p-0 ">
                                    <a href="https://www.youtube.com/watch?v=kB0j1E66iVs" target="_blank">
                                        <div className="image1">
                                            <img src="images/work3.jpg" alt="" className="image" /><AiFillPlayCircle className="videoplay" />
                                        </div>
                                        </a>
                                    </div>
                                    <div className="col-md-8 div2">
                                        <h5>video of the month</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-6 p-0">
                        <div className="heading">
                            <h2>Lorem ipsum</h2>
                            <p>view all <IoIosArrowDroprightCircle className="view" /></p>
                        </div>
                        <div className="div">
                            <Sectioncmp />
                        </div>
                        <div className="div">
                            <Sectioncmp />

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Section
