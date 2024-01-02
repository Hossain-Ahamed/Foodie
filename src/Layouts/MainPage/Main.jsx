
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import 'sweetalert2/src/sweetalert2.scss'

const Main = () => {

    /*-------------------------------------------------------------------
          in this path, header and footer wont be available 
    -------------------------------------------------------------------*/
    const location = useLocation();
    const noHeaderFooterArray = ['/login', '/sign-up', '/forget-password'];

    const noHeadFoot = noHeaderFooterArray.some((str) =>
        str.toLowerCase() === location.pathname.toLowerCase()
    );
    // _______________________________________________________________________________//

    return (


        <section className='text-black min-h-screen'>
            {/* todo */}
            {/* {noHeadFoot || <Header />} */}
            <main className='relative max-w-[2000px] mx-auto'>  
                <Outlet />
            </main>
            {/* todo */}
            {/* {noHeadFoot || <Footer />} */}

            
        </section>
    );
};

export default Main;