import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react';
import React, { useState } from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import useProfile from '../../Hooks/useProfile';
import LoadingPage from '../../pages/Shared/LoadingPages/LoadingPage/LoadingPage';
import ErrorPage from '../../pages/Shared/ErrorPage/ErrorPage';
import AdminSiteSideNav from './AdminSiteSideNav';
import useAuthProvider from '../../Hooks/useAuthProvider';

const AdminSite = () => {
    const [isChecked, setChecked] = useState(false);
    const {user,loading} = useAuthProvider();
    const { profile, profileLoading, role, profileError } = useProfile();

    /**
     * 
     * if user is not present ==> then navigate to home
     *                present ==> then try to find profile
     *                             ==> if profile found and there role is correct
     *                                                             ==> go to the destination page
     *                                                             ==> otherwise  go to the error page
     */
    if (profileLoading ||loading) {
        return <LoadingPage />
    }

    if(!user){
        return <Navigate to='/' replace></Navigate>
    }


 
    // if (profileError || !profile || !['Admin', 'Accounts', 'Developer'].includes(role)) {
    //     return <ErrorPage />
    // }

    return (
        <>


            {/* Button that acts as a checkbox */}
            <Navbar isBordered className=" sm:hidden max-w-full" maxWidth="full">
                <NavbarContent className="sm:hidden" justify="start">
                    <label htmlFor="sidebarToggle">
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                clipRule="evenodd"
                                fillRule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                            ></path>
                        </svg>
                    </label>
                </NavbarContent>

                <NavbarBrand className="flex sm:hidden gap-4" justify="center" >
                    <Link className="font-bold text-inherit text-red-500 cursor-pointer" href="/admin">Foodie</Link>
                </NavbarBrand>
            </Navbar>


            <input
                type="checkbox"
                id="sidebarToggle"
                className="hidden"
                checked={isChecked}
                onChange={() => setChecked(!isChecked)}
            />

            {/* Sidebar */}
            <AdminSiteSideNav isChecked={isChecked} setChecked={setChecked} />

            {/* main page content */}
            <div className="p-4 sm:ml-64">
                <Outlet />
            </div>

        </>
    );
};

export default AdminSite;