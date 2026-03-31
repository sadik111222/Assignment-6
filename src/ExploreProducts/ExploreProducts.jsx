import React from 'react';

const ExploreProducts = () => {
    return (
        <div className=' py-10 sm:py-20 md:py-30  text-white bg-gradient-to-tr from-[#4f39f6]  to-[#9514FA]'>

            <div className='flex flex-col justify-center items-center space-y-8 sm:space-y-4 ml-5'>

                <h3 className='font-extrabold text-3xl sm:text-4xl md:text-5xl '>Ready to Transform Your Workflow?</h3>

                <div className='flex flex-col justify-center items-center w-75 sm:w-200'>

                    <p>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
                    

                </div>

                <div className='pt-3 '>

                    <button className='font-semibold mr-5 py-2 px-6 rounded-full  bg-white text-[#4f39f6]'>Explore Products</button>

                    <button className='border border-white py-2 px-8 rounded-full font-semibold'>View Pricing</button>

                </div>
                
                <p className='max-w-55 sm:max-w-200'>14-day free trial • No credit card required • Cancel anytime</p>

            </div>

        </div>
    );
};

export default ExploreProducts;