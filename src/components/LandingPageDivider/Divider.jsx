import React from 'react';
import { FaLaptopCode } from "react-icons/fa6";
import { MdOutlineQrCode2 } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
const Divider = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <h2 className='text-3xl text-[#242D52] font-bold text-center mt-8'>Key Features</h2>
            <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='flex flex-col space-y-4 items-center text-center md:text-start'>
                    <FaLaptopCode size={35} className='text-[#242D52]' />
                    <h2 className='text-3xl text-[#F6866A] font-bold'>Responsive Design</h2>
                    <p className='text-sm text-gray-400'>Introducing Foodie our responsive restaurant management system. Seamlessly adaptable to any device, it empowers restaurant owners with flexible management capabilities on the go.</p>
                </div>
                <div className='flex flex-col space-y-4 items-center text-center md:text-start'>
                    <MdOutlineQrCode2 size={35} className='text-[#242D52]' />
                    <h2 className='text-3xl text-[#F6866A] font-bold'>QR Code Menu</h2>
                    <p className='text-sm text-gray-400'>Our latest feature QR code menu scanning. Simply scan the code to access the menu instantly. Effortless dining made possible with just a scan.</p>
                </div>
                <div className='flex flex-col space-y-4 items-center text-center md:text-start'>
                    <SiYoutubeshorts size={35} className='text-[#242D52]' />
                    <h2 className='text-3xl text-[#F6866A] font-bold'>Shorts & Stories</h2>
                    <p className='text-sm text-gray-400'>We&apos;ve launched short-form video content and engaging stories to promote your restaurant. Captivate your audience with dynamic visuals and compelling narratives.</p>
                </div>
            </div>

        </div>
    );
};

export default Divider;