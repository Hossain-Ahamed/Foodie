import React from 'react';
import errorImg from '../../../assets/images/Error/404.png'
import { useRouteError } from 'react-router';
const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <div className="flex flex-col items-center justify-center h-[90vh]">
                <img src={errorImg} alt="" />
                <p className='pt-5 text-2xl font-semibold text-neutral-800'>{error?.code}</p>
                <p className='text-xl text-neutral-800 italic'>{error?.message}</p>
            </div>
        </>
    );
};

export default ErrorPage;