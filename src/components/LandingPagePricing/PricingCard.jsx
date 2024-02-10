import React from 'react';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import SectionTitle from '../SectionTitle/SectionTitle';
import LoadingPage from '../../pages/Shared/LoadingPages/LoadingPage/LoadingPage';
import ErrorPage from '../../pages/Shared/ErrorPage/ErrorPage';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
// import { TbCurrencyTaka } from "react-icons/tb";
const PricingCard = () => {
    const axiosSecure = useAxiosSecure();
    const { handleSubmit, register, setValue } = useForm();
    const { refetch: dataRefetch, data: data = [], isLoading: dataLoading, error: dataError, } = useQuery({
        queryKey: ['paymenttype',],
        enabled: true,
        queryFn: async () => {
            let res = await axiosSecure.get(`/subscription-packages`);

            res = {
                data: [
                    {
                        "packageType": "Starter",
                        "shortDescription": "3 month subscription - Get started with our Starter package!",
                        "finalPrice": "1500",
                        "cutPrice": "0"

                    },
                    {
                        "packageType": "Pro",
                        "shortDescription": "6 month subscription - Upgrade to our Pro package for long time non-stop support!",
                        "finalPrice": "2800",
                        "cutPrice": "0"
                    },
                    {
                        "packageType": "Enterprise",
                        "shortDescription": "12 month subscription - Unlock premium prizes   with our Enterprise package!",
                        "finalPrice": "5000",
                        "cutPrice": "0"

                    }
                ]
            }

            return res?.data;
        },
    });


    if (dataLoading) {
        return <LoadingPage />
    }
    if (dataError) {
        return <ErrorPage />
    }
    return (
        <div>
            <div className="max-w-screen-xl px-4 py-5 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto">
                <SectionTitle h1='Pricing' padding='mt-7 pb-10' />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8 mx-auto">
                    {
                        data && Array.isArray(data) && data.map((item, _idx) => <div key={_idx} className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                            <div className="p-6 sm:px-8">
                                <h2 className="text-lg font-medium text-gray-900">
                                    {item?.packageType}
                                    <span className="sr-only">Plan</span>
                                </h2>

                                <p className="mt-2 text-gray-700">{item?.shortDescription}</p>

                                <p className="mt-2 sm:mt-4">
                                    <strong className="text-3xl font-bold text-gray-900 sm:text-4xl flex"> {item?.finalPrice}<FaBangladeshiTakaSign /> </strong>

                                    <span className="inline-flex items-center text-sm font-medium text-gray-700 line-through">{item?.cutPrice} <FaBangladeshiTakaSign /> </span>
                                </p>

                                <a
                                    className="mt-4 block rounded border border-[#F6866A] bg-[#F6866A] px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-[#F6866A] focus:outline-none focus:ring active:text-[#F6866A] sm:mt-6"
                                    href="/registration-form"
                                >
                                    Get Started
                                </a>
                            </div>


                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default PricingCard;