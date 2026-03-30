import React from 'react';
import Facebook from '../assets/Facebook.png'
import Instagram from '../assets/Instagram.png'
import Twitter from '../assets/Twitter.png'


const Footer = () => {
    return (
        <div className='bg-[#101727] text-white'>

            <div className='max-w-[1100px] mx-auto'>

                <div className='flex flex-wrap justify-between pt-30'>

                    <div className='space-y-3'>
                        <h2 className='font-bold text-4xl'>
                            DigiTools
                        </h2>
                        <p>
                            Premium digital tools for creators,<br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.
                        </p>
                    </div>

                    <div className='space-y-3'>

                        <h4 className='text-xl font-medium'>Product</h4>

                        <ul  className='space-y-3'>

                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Templates</li>
                            <li>Integrations</li>

                        </ul>

                    </div>

                    <div  className='space-y-3'>
                        <h4 className='text-xl font-medium'>Company</h4>

                        <ul  className='space-y-3'>

                            <li>About</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Press</li>

                        </ul>

                    </div>

                    <div className='space-y-3'>
                        <h4 className='text-xl font-medium'>Resourcest</h4>

                        <ul className='space-y-3'>
                            <li>Documentation</li>
                            <li>Help center</li>
                            <li>Community</li>
                            <li>Contact</li>
                        </ul>
                        
                    </div>

                    <div className='space-y-4'>
                        <h4 className='text-xl font-medium'>Social Links</h4>

                        <div className='flex space-x-3'>

                            <img src={Facebook} alt="Facebook logo" />

                            <img src={Instagram} alt="Instagram logo" />

                            <img src={Twitter} alt="Twitter log" />

                        </div>

                    </div>

                </div>

                <div  className='flex flex-wrap justify-between pt-20 pb-8'>

                    <div>
                        <h5>© 2026 Digitools. All rights reserved.</h5>
                    </div>

                    <div className='flex gap-5'>

                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                                    
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Footer;