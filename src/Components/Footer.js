import React from 'react'
import { MdLocationPin, MdTimer, MdDirectionsRailwayFilled } from 'react-icons/md'
import { FaFacebookF, FaYoutube } from 'react-icons/fa'
import { AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { SiQuantcast } from 'react-icons/si'
const Footer = () => {
    return (
        <>
            <div className="container-fluid footerfull p-0">
                <div className="row footer">
                    <div className="col-md-4 col-sm-6 p-0">
                        <div className="footerdiv1">
                            <h5>contact us</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve</p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 p-0">
                        <div className="footerdiv2">
                            <h5>follow us</h5>
                            <div className="links">
                                <FaFacebookF className="sociallink" />
                                <AiFillLinkedin className="sociallink" />
                                <AiOutlineInstagram className="sociallink" />
                                <AiOutlineTwitter className="sociallink" />
                                <FaYoutube className="sociallink" />
                                <SiQuantcast className="sociallink" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 p-0">
                        <div className="footerdiv3">
                            <h5>head office</h5>




                            <p>
                                <div className="headoffice1">
                                    <MdLocationPin className="logo" />
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                </div>
                            </p>


                            <p>
                                <div className="headoffice1">
                                    <MdTimer className="logo" />
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                </div>
                            </p>

                            <p>
                                <div className="headoffice1">
                                    <MdTimer className="logo" />
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                </div>
                            </p>

                            <p>
                                <div className="headoffice1">
                                    <MdDirectionsRailwayFilled className="logo" />
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                </div>
                            </p>

                        </div>
                    </div>

                    {/* <div className="col-md-12 headoffice2">

                       <p>© 2021 all right reserved privacy policy</p>
                    </div> */}

                </div>
            </div>

         
                    <div className="col-md-12 headoffice2">

                        <p>© 2021 all right reserved privacy policy</p>
                    </div>
         
        </>
    )
}

export default Footer
