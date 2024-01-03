import React from 'react';
import { FaLaptopCode } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
const Divider = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='flex flex-col space-y-4 items-center text-center md:text-start'>
                    <FaLaptopCode size={35} className='text-[#242D52]' />
                    <h2 className='text-3xl text-[#F6866A] font-bold'>Responsive Design</h2>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eum corrupti, aperiam quos, quis esse totam voluptates reprehenderit a fugiat ea tempora tenetur. Necessitatibus officia id saepe sequi atque harum.</p>
                </div>
                <div className='flex flex-col space-y-4 items-center text-center md:text-start'>
                    <FaTwitter size={35} className='text-[#242D52]' />
                    <h2 className='text-3xl text-[#F6866A] font-bold'>Responsive Design</h2>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eum corrupti, aperiam quos, quis esse totam voluptates reprehenderit a fugiat ea tempora tenetur. Necessitatibus officia id saepe sequi atque harum.</p>
                </div>
                <div className='flex flex-col space-y-4 items-center text-center md:text-start'>
                    <FaTwitter size={35} className='text-[#242D52]' />
                    <h2 className='text-3xl text-[#F6866A] font-bold'>Responsive Design</h2>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eum corrupti, aperiam quos, quis esse totam voluptates reprehenderit a fugiat ea tempora tenetur. Necessitatibus officia id saepe sequi atque harum.</p>
                </div>
            </div>

        </div>
    );
};

export default Divider;