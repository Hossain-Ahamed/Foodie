import React from 'react';
import errorImg from '../../../assets/images/Error/404.png'
import { useRouteError } from 'react-router';
const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <div className="flex flex-col items-center justify-center h-[90vh]">
                {/* <img src={errorImg} alt="" />
                <p className='pt-5 text-2xl font-semibold text-neutral-800'>{error?.code}</p>
                <p className='text-xl text-neutral-800 italic'>{error?.message}</p> */}
                <div className="text-center">
                    <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
                    <p className="mb-4 text-lg text-gray-600">Oops! Looks like you&apos;re lost.</p>
                    <div className="animate-bounce">
                        <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                    </div>
                    <p className="mt-4 text-gray-600">Let&apos;s get you back <a href="/" className="text-blue-500">home</a>.</p>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;