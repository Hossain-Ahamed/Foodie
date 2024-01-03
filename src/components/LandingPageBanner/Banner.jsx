import React from 'react';
import banner from '../../assets/images/Home/home-bg.jpg'
const Banner = () => {
    return (
        <div className='w-full relative'>
            <img className="object-cover h-[50vh] md:h-[80vh] w-full" src={banner} alt="" />
            <div className='absolute top-1/4 left-[30%] hidden lg:block'>
               <div className='flex flex-col items-center justify-center space-y-2'>
                    <h1 className='text-4xl text-gray-800 font-semibold'>Landing Page</h1>
                    <p className='text-sm text-gray-700'>This is a fully Responsive, Clean Design, Modern, and Flexible Software Landing Page for startups, businesses and agencies. <br /> It is built with HTML5 & CSS3, Bootstrap 3.3.4, Font Awesome 4.3.0, and much more. Designed by templatemo. Images by Pixabay</p>
               </div>
            </div>
        </div>
    );
};

export default Banner;