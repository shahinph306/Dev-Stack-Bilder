import React from 'react';
import Logo from "../assets/Background+Shadow.png"

const FooterSction = () => {
    return (
        <div>
            <div className="footer_section flex justify-between container mx-auto  mt-15 items-center">
                <div className="footer_right mt-4">
                    <div className="img_logo flex gap-2  font-bold">
                         <img src={Logo} alt="" /><h1 className="text-2xl">Dev <span className="text-red-500">Stack</span></h1>   
                    </div>
                    <p className='text-gray-500'>Curated tools technologies and resources for developers building <br />modern software. </p>
                    <div className="social_Platfrom_link">
                        <ul className='cursor-pointer font-bold flex gap-4 mt-4'>
                            <li>GitHub</li>
                            <li>Twitter</li>
                            <li>Linkedin</li>
                        </ul>
                    </div>
                </div>

                <div className="footer_left flex justify-between gap-50 mt-4">
                    <div className="product">
                        <h1 className='font-bold'>PRODUCT</h1>
                        <div className='text-gray-500'>
                            <p>Home</p>
                            <p>Technologies</p>
                            <p>Projects</p>
                        </div>
                    </div>
                    <div className="company">
                        <h1 className='font-bold'>COMPANY</h1>
                        <div className='text-gray-500'>
                            <p>About</p>
                            <p>Contact</p>
                            <p>Careers</p>
                        </div>
                    </div>
                    <div className="legal">
                        <h1 className='font-bold'>LEGAL</h1>
                        <div className='text-gray-500'>
                            <p>Privacy Policy</p>
                             <p>Terms of Services</p>
                        </div>
                    </div>
                </div>
            </div>
             <h2 className='text-gray-500 container mx-auto mt-6 font-semibold'>@ 2026 Dev Stack. All rights reserved.</h2>
        </div>
    );
};

export default FooterSction;