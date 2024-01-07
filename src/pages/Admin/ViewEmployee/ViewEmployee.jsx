import React from 'react';
import SetTitle from '../../Shared/SetTtitle/SetTitle';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { MdOutlineDriveFileRenameOutline, MdEmail, MdPhone, MdCalendarMonth, MdPermContactCalendar } from "react-icons/md";
import { FaAddressCard, FaBriefcase } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { IoIosTransgender } from "react-icons/io";
import user from '../../../assets/images/Home/user.png';
import ScrollToTop from '../../../components/ScrollToTop/ScrollToTop';
const ViewEmployee = () => {
    return (
        <>
        <ScrollToTop />
            <SetTitle title="View Employee" />
            <SectionTitle h1="View Employee" />
            <div className='max-w-7xl mx-auto flex flex-col items-center py-12 select-none '>
                {/* personal info */}
                <div className="w-full md:w-3/4 p-3 mt-8">
                    <div className='p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard'>
                        <div className='flex flex-col md:flex-row justify-between items-center'>
                            <img className='w-12 h-12 rounded-full object-cover ring ring-indigo-600 mb-4 mx-auto md:mx-0' src={user} alt="" />
                            <span className="inline-flex items-center rounded-md bg-blue-50 px-4 cursor-pointer py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Edit</span>
                        </div>
                        <p className='text-lg font-semibold'>Personal Information</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            <div className='flex gap-3 items-center mb-4 mt-3'>
                                {/* icon */}
                                <div><MdOutlineDriveFileRenameOutline size={20} /></div>
                                <div className='flex flex-col'>
                                    <p className='text-gray-500'>Full Name</p>
                                    <p>Farhan Hasan Nilok</p>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center mb-4'>
                                {/* icon */}
                                <div><FaBriefcase size={20} /></div>
                                <div className='flex flex-col'>
                                    <p className='text-gray-500'>Role</p>
                                    <span className="inline-flex items-center rounded-large bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Admin</span>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center mb-4'>
                                {/* icon */}
                                <div><MdEmail size={20} /></div>
                                <div className='flex flex-col'>
                                    <p className='text-gray-500'>Email</p>
                                    <p>farhan@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center mb-4'>
                                {/* icon */}
                                <div><MdPhone size={20} /></div>
                                <div className='flex flex-col'>
                                    <p className='text-gray-500'>Phone Number</p>
                                    <p>01234939933</p>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center mb-4'>
                                {/* icon */}
                                <div><MdCalendarMonth size={20} /></div>
                                <div className='flex flex-col'>
                                    <p className='text-gray-500'>Date of Birth</p>
                                    <p>24/11/2001</p>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center mb-4'>
                                {/* icon */}
                                <div><FaAddressCard size={20} /></div>
                                <div className='flex flex-col'>
                                    <p className='text-gray-500'>NID</p>
                                    <p>2474830293048</p>
                                </div>
                            </div>

                            <div className='flex gap-3 items-center mb-4'>
                                {/* icon */}
                                <div><IoIosTransgender size={20} /></div>
                                <div className='flex flex-col'>
                                    <p className='text-gray-500'>Gender</p>
                                    <p>Male</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* address */}
                <div className="w-full md:w-3/4 p-3 mt-8 relative">
                    <span className="inline-flex absolute right-10 top-8 items-center rounded-md bg-blue-50 px-4 cursor-pointer py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Edit</span>
                    <div className='w-full p-6 h-full flex flex-wrap border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard'>
                        <div className='w-full md:w-1/2 flex gap-3 items-center mb-4 mt-3'>
                            {/* icon */}
                            <div><FaLocationArrow size={20} /></div>
                            <div className='flex flex-col'>
                                <p className='text-gray-500'>Street Address</p>
                                <p>14/9 New Chasara
                                </p>
                                <p>Narayanaganj,Dhaka</p>
                                <p>
                                    Bangladesh, 1400
                                </p>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 flex gap-3 items-center mb-4'>
                            {/* icon */}
                            <div><MdPermContactCalendar size={22} /></div>
                            <div className='flex flex-col'>
                                <p className='text-gray-500'>Emergency Contact</p>
                                <p>Name: Farhan Hasan Nilok</p>
                                <p>Phone: 01234939933</p>
                                <p>Email: farhan@gmail.com</p>
                                <p>Address: Dhaka, Bangladesh</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewEmployee;