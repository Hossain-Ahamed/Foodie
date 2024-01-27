import React from 'react';
import { Link } from 'react-router-dom';
import useAuthProvider from '../../Hooks/useAuthProvider';

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
                            <Link to='/admin' className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-500 hover:bg-gray-300 hover:text-gray-700">
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
                            <Link to='employee-list' className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-500 hover:bg-gray-300 hover:text-gray-700">
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
                            <a
                                href=""
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

                                <span className="text-sm font-medium"> Restaurants </span>
                            </a>
                        </li>

                        <li>
                           <Link to='invoices'
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
                                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                    />
                                </svg>

                                <span className="text-sm font-medium"> Invoices </span>
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