import React from 'react';
import CardFeatures from './CardFeatures';

const SubscriptionsCard = ({subscription}) => {

    const {title, subtitle, price, billing, buttonText, features } = subscription;
    return (
        <div className='group shadow-2xl cursor-pointer rounded-2xl border border-[#dddada] p-6 bg-[#f3f2f2] space-y-6 hover:bg-gradient-to-tr from-[#4F39F6]  to-[#9514FA] transition-all duration-500 hover:scale-105 ease-out hover:shadow-3xl '>
            
            <div className=' space-y-1'>
                <h1 className='font-bold text-3xl group-hover:text-white transition-all duration-500'>{title}</h1>
                <h1 className='text-[#7f7f7f] group-hover:text-white transition-all duration-500'>{subtitle}</h1>
                <h1 className='font-bold text-3xl pt-3 group-hover:text-white transition-all duration-500'>{price} /<span className='text-xl'>{billing}</span></h1>
            </div>


            <div className=' group-hover:text-white transition-all duration-500'>
                {
                    features.map(features => <CardFeatures features={features}></CardFeatures>)
                }
            </div>

            <div >
                <button className='font-medium cursor-pointer text-xl px-16 py-3 rounded-full text-white bg-black group-hover:bg-amber-50 group-hover:text-black transition-all duration-500'>{buttonText}</button>
            </div>

        </div>
    );
};

export default SubscriptionsCard;