import React from 'react';
import img from './Rectangle 1.png'

const Banner = () => {
    return (
        <div className='mt-7 relative'>
            <div className='absolute left-[120px]'>
                <img src={img} alt="" />
            </div>
            <div className='h-[330px]'></div>
            <div className='h-[264px] bg-[#00308F]'></div>
        </div>
    );
};

export default Banner;