import React from 'react';
import img from './Maverick 1.png'

const Navbar = () => {
    return (
        <div className='h-[88.71px] border-b-2 px-[120px] my-1'>
            <div className='items-center flex justify-between'>
                <div>
                    <img className='w-[110px] h-[82.71px]' src={img} alt="" />
                </div>
                <div>
                    <ul className='flex items-center text-[18px]'>
                        <li className='ml-[131px]'>Home</li>
                        <li className='ml-[68px]'>Our Services</li>
                        <li className='ml-[68px]'>Case Studies</li>
                        <li className='ml-[68px]'>Blog</li>
                        <li className='ml-[68px]'>Contact</li>
                        <li className='ml-[68px]'><button className='btn bg-[#00308F] px-10 py-[10px] rounded-md text-white font-semibold'>Schedule a call</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;