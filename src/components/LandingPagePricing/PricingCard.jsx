import React from 'react';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import SectionTitle from '../SectionTitle/SectionTitle';
// import { TbCurrencyTaka } from "react-icons/tb";
const PricingCard = () => {
    return (
        <div>
            <div className="max-w-screen-xl px-4 py-5 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto">
                <SectionTitle h1='Pricing' padding='mt-7 pb-10'/>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8 mx-auto">
                    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                        <div className="p-6 sm:px-8">
                            <h2 className="text-lg font-medium text-gray-900">
                                Starter
                                <span className="sr-only">Plan</span>
                            </h2>

                            <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl flex"> 20<FaBangladeshiTakaSign/> </strong>

                                <span className="text-sm font-medium text-gray-700">/month</span>
                            </p>

                            <a
                                className="mt-4 block rounded border border-[#F6866A] bg-[#F6866A] px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-[#F6866A] focus:outline-none focus:ring active:text-[#F6866A] sm:mt-6"
                                href="#"
                            >
                                Get Started
                            </a>
                        </div>

                        
                    </div>

                    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm md:-translate-y-7">
                        <div className="p-6 sm:px-8">
                            <h2 className="text-lg font-medium text-gray-900">
                                Pro
                                <span className="sr-only">Plan</span>
                            </h2>

                            <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl flex"> 30<FaBangladeshiTakaSign /> </strong>

                                <span className="text-sm font-medium text-gray-700">/month</span>
                            </p>

                            <a
                                className="mt-4 block rounded border border-[#F6866A] bg-[#F6866A] px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-[#F6866A] focus:outline-none focus:ring active:text-[#F6866A] sm:mt-6"
                                href="#"
                            >
                                Get Started
                            </a>
                        </div>

                        
                    </div>

                    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                        <div className="p-6 sm:px-8">
                            <h2 className="text-lg font-medium text-gray-900">
                                Enterprise
                                <span className="sr-only">Plan</span>
                            </h2>

                            <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl flex"> 100<FaBangladeshiTakaSign /> </strong>

                                <span className="text-sm font-medium text-gray-700">/month</span>
                            </p>

                            <a
                                className="mt-4 block rounded border border-[#F6866A] bg-[#F6866A] px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-[#F6866A] focus:outline-none focus:ring active:text-[#F6866A] sm:mt-6"
                                href="#"
                            >
                                Get Started
                            </a>
                        </div>

                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;