
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import 'sweetalert2/src/sweetalert2.scss'
import Header from '../../pages/Shared/Header/Header';
import Footer from '../../pages/Shared/Footer/Footer';
import TopNavUser from '../../pages/Shared/Header/TopNavUser';

const Main = () => {

    /*-------------------------------------------------------------------
          in this path, header and footer wont be available 
    -------------------------------------------------------------------*/
    const location = useLocation();
    const noHeaderFooterArray = ['/login', '/sign-up', '/forget-password', '/list'];

    const noHeadFoot = noHeaderFooterArray.some((str) =>
        // str.toLowerCase() === location.pathname.toLowerCase()
         location.pathname.toLowerCase().includes(str.toLocaleLowerCase())
    );
    // _______________________________________________________________________________//

return (


        <section className='text-black min-h-screen'>
      
            {noHeadFoot || <TopNavUser />}

            <main className='relative max-w-[2000px]  mx-auto'>  
                <Outlet />
            </main>
            
            {noHeadFoot || <Footer />}

            
        </section>
    );
};

export default Main;