import React from 'react';
import vector from './Vector.png'
import m from './m.png'
import m1 from './m1.png'
import one from './one.png'
import two from './two.png'
import three from './three.png'
import four from './four.png'
import five from './five.png'
import six from './six.png'
import seven from './tan.png'
import eight from './tan-2.png'

const Heading = () => {
    return (
        <div className='relative'>
            <h2 className='text-[50px] font-bold px-[120px] text-center mt-9 uppercase'>Skyrocket Your Hotel Bookings with Our
                Proven Marketing SYSTEMS - Get 50+ Direct Bookings in 90 Days!</h2>
                <div className='ml-[260px]'>
                    <img src={one} alt="" className='absolute bottom-[100px]' />
                    <img src={two} alt="" className='absolute bottom-[85px] ml-[10px]' />
                    <img src={three} alt="" className='absolute bottom-[80px] ml-[25px]' />
                    <img src={four} alt="" className='absolute bottom-[65px] ml-[43px]' />
                    <img src={five} alt="" className='absolute bottom-[65px]' />
                    <img src={six} alt="" className='absolute rotate-[10deg] bottom-[72px] ml-[12px]' />
                    <img src={six} alt="" className='absolute rotate-[70deg] bottom-[68px] ml-[18px]' />

                    <img src={eight} alt="" className='absolute bottom-[87px] -ml-[17px]' />
                    <img src={seven} alt="" className='absolute bottom-[78px] -ml-[8px]' />
                    <img src={seven} alt="" className='absolute bottom-[60px] ml-[18px]' />
                    <img src={eight} alt="" className='absolute bottom-[55px] ml-[40px]' />
                </div>
            <img src={vector} alt="" className='absolute top-[148px] right-[320px]' />
            <button className='btn bg-[#00308F] px-7 py-4 rounded-md text-white mx-auto flex mt-[42px]'>Unlock my booking boost now</button>
            <div>
                <img src={m} alt="" className='right-[228px] absolute bottom-[80px]' />
                <img src={m1} alt="" className='right-[276px] absolute bottom-[56px]' />
            </div>
        </div>
    );
};

export default Heading;