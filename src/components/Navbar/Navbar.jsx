import React from 'react';
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
    return (
        <div>
            {/* mobile responsive navbar */}
            <div className='px-3 flex items-center justify-between flex-row md:hidden md:px-0'>
                <div className='text-3xl font-semibold text-[#F6866A]'>
                    Foodie
                </div>
                <div>
                    <button>
                        <FiMenu size={26} className='text-gray-600'/>
                    </button>
                </div>
            </div>
            {/* <div></div>
           <div></div>  */}
        </div>
    );
};

export default Navbar;