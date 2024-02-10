import React from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from './../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import SetTitle from '../Shared/SetTtitle/SetTitle';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import LoadingPage from '../Shared/LoadingPages/LoadingPage/LoadingPage';
import ErrorPage from './../Shared/ErrorPage/ErrorPage';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';

const PackageSelection = () => {
    const { branchID } = useParams();
    const axiosSecure = useAxiosSecure();
    const { handleSubmit, register, setValue } = useForm();
    const { refetch: dataRefetch, data: data = [], isLoading: dataLoading, error: dataError, } = useQuery({
        queryKey: ['paymenttype', branchID],
        enabled: true,
        cacheTime: 0,
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

    const handleChange = (Changedata) => {

        setValue('packageType', Changedata);
        
        const reqData = {
            "packageType": Changedata
        }
       
        Swal.fire({
            title: "Are you sure?",
            
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "info",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Purchase"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/payment-package/branch/${branchID}`, reqData)
                    .then(data => {
                        toast.success("Successfully Changed");
                    })
                    .catch((error) => {
                        console.error(error)
                        Swal.fire({
                            icon: 'error',
                            title: error?.code + " " + error?.message,
                            text: error.response.data?.message
                        })
                    })
            }
        });

    };

    if (dataLoading) {
        return <LoadingPage />
    }
    if (dataError || !branchID) {
        return <ErrorPage />
    }
    return (
        <section className='min-h-[800px] my-auto px-4 py-5 sm:px-6 sm:py-12 lg:px-8 '>
            <SetTitle title="Payment packages" />
            <SectionTitle h1="Select Package" />
            <form className='max-w-screen-xl px-4 py-5 sm:px-6 sm:py-12 lg:px-8   mx-auto '>
                <fieldset className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8 mx-auto">
                    <legend className="sr-only">Payment Packages</legend>

                    {

                        data && Array.isArray(data) && data.map((item, _idx) => <React.Fragment key={_idx}>
                            <input
                                type="radio"
                                {...register("packageType")}
                                id={item?.packageType}
                               
                                className="peer hidden [&:checked_+_label_svg]:block"
                                onClick={() => handleChange(item?.packageType)}
                            />
                            <label htmlFor={item?.packageType} className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-500 hover:shadow-md peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500">
                                <div className="divide-y divide-gray-200 rounded-2xl  ">
                                    <div className="p-6 sm:px-8">
                                        <h2 className="text-lg font-medium text-gray-900">
                                            {item?.packageType}
                                            <span className="sr-only">Plan</span>
                                        </h2>

                                        <p className="mt-2 text-gray-700">{item?.shortDescription}</p>

                                        <p className="mt-2 sm:mt-4">
                                            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl flex ">{item?.finalPrice} ৳ </strong>

                                            <span className="text-sm font-medium text-gray-700 line-through">৳ {item?.cutPrice}</span>
                                        </p>

                                       
                                    </div>
                                </div>
                            </label>
                        </React.Fragment>)


                    }
                </fieldset>


            </form>
        </section>
    );
};

export default PackageSelection;