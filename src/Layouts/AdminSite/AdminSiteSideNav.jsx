import React from 'react';
import { Link } from 'react-router-dom';
import useAuthProvider from '../../Hooks/useAuthProvider';
import { MdRestaurant } from "react-icons/md";
const AdminSiteSideNav = ({ isChecked, setChecked }) => {
    const {provideSignOut} = useAuthProvider();
    return (
        <>
            <aside
                id="default-sidebar"
                className={`shadow select-none cursor-pointer fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isChecked ? '' : '-translate-x-full sm:translate-x-0'
                    }`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto  relative">
                    <button className='absolute md:hidden top-2 right-1 z-[5000] bg-slate-500 p-1 rounded' onClick={() => setChecked(false)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.00098 5L19 18.9991" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.99996 18.9991L18.999 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </button>
                    <ul className="space-y-1 pt-8">
                        <li>
                            <Link to='/admin' className="flex items-center gap-2 rounded-lg  px-4 py-2 text-gray-500 hover:bg-gray-300 hover:text-gray-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 opacity-75"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                    />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                                <span className="text-sm font-medium"> Dashboard </span>
                            </Link>
                        </li>
                        <li>
                            <Link to='employee-list' className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-300 hover:text-gray-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 opacity-75"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>

                                <span className="text-sm font-medium"> Teams </span>
                            </Link>
                        </li>
                        <li>
                            <Link to='subscription' className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-300 hover:text-gray-700">
                                <svg className='h-5 w-5 opacity-75' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.93061 16.63C3.74061 16.63 3.55061 16.56 3.40061 16.41C3.11061 16.12 3.11061 15.64 3.40061 15.35L15.3506 3.4C15.6406 3.11 16.1206 3.11 16.4106 3.4C16.7006 3.69 16.7006 4.17 16.4106 4.46L4.46061 16.42C4.32061 16.56 4.12061 16.63 3.93061 16.63Z" fill="#292D32" />
                                    <path d="M11.1005 19.03C10.9105 19.03 10.7205 18.96 10.5705 18.81C10.2805 18.52 10.2805 18.04 10.5705 17.75L11.7705 16.55C12.0605 16.26 12.5405 16.26 12.8305 16.55C13.1205 16.84 13.1205 17.32 12.8305 17.61L11.6305 18.81C11.4905 18.95 11.3005 19.03 11.1005 19.03Z" fill="#292D32" />
                                    <path d="M13.7905 16.34C13.6005 16.34 13.4105 16.27 13.2605 16.12C12.9705 15.83 12.9705 15.35 13.2605 15.06L15.6505 12.67C15.9405 12.38 16.4205 12.38 16.7105 12.67C17.0005 12.96 17.0005 13.44 16.7105 13.73L14.3205 16.12C14.1805 16.26 13.9805 16.34 13.7905 16.34Z" fill="#292D32" />
                                    <path d="M11.1004 22.75C10.1204 22.75 9.1404 22.15 7.9504 20.96L3.0404 16.05C0.650402 13.66 0.660402 12.12 3.0704 9.70998L9.7104 3.06998C12.1204 0.659975 13.6604 0.649975 16.0504 3.03998L20.9604 7.94998C23.3504 10.34 23.3404 11.88 20.9304 14.29L14.2904 20.93C13.0804 22.14 12.0904 22.75 11.1004 22.75ZM12.9004 2.74998C12.3804 2.74998 11.7204 3.17998 10.7704 4.12998L4.1304 10.77C3.1804 11.72 2.7504 12.38 2.7504 12.89C2.7504 13.41 3.1504 14.04 4.1004 14.99L9.0104 19.9C9.9604 20.85 10.5804 21.25 11.1004 21.25C11.1004 21.25 11.1004 21.25 11.1104 21.25C11.6304 21.25 12.2804 20.82 13.2304 19.87L19.8704 13.23C20.8204 12.28 21.2504 11.62 21.2504 11.11C21.2504 10.59 20.8504 9.95998 19.9004 9.00998L14.9904 4.09998C14.0504 3.14998 13.4204 2.74998 12.9004 2.74998Z" fill="#292D32" />
                                    <path d="M22.0005 22.75H2.00049C1.59049 22.75 1.25049 22.41 1.25049 22C1.25049 21.59 1.59049 21.25 2.00049 21.25H22.0005C22.4105 21.25 22.7505 21.59 22.7505 22C22.7505 22.41 22.4105 22.75 22.0005 22.75Z" fill="#292D32" />
                                </svg>


                                <span className="text-sm font-medium"> Subscription </span>
                            </Link>
                        </li>


                        <li>
                            <Link

                              
                                to='payment-status-list'

                                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-300 hover:text-gray-700"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 opacity-75"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                    />
                                </svg>

                                <span className="text-sm font-medium"> Payment Status </span>
                            </Link>
                        </li>

                        <li>
                           <Link to='all-restaurant'
                                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-300 hover:text-gray-700"
                            >
                                <MdRestaurant className='h-5 w-5 opacity-75'/>

                                <span className="text-sm font-medium"> All Restaurant </span>
                            </Link>
                        </li>

                        <li>
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary
                                    className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-300 hover:text-gray-700"
                                >
                                    <div className="flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 opacity-75"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>

                                        <span className="text-sm font-medium"> Account </span>
                                    </div>

                                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </summary>

                                <ul className="mt-2 space-y-1 px-4">
                                    <li>
                                        <Link to='my-profile'
                                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700"
                                        >
                                           My Profile
                                        </Link>
                                    </li>                       
                                    <li>
                                       
                                            <button
                                                onClick={()=>provideSignOut()}
                                                className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-300 hover:text-gray-700"
                                            >
                                                Logout
                                            </button>
                                        
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default AdminSiteSideNav;