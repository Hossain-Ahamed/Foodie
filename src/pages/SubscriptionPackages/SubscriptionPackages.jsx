import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import LoadingPage from '../Shared/LoadingPages/LoadingPage/LoadingPage';
import ErrorPage from '../Shared/ErrorPage/ErrorPage';
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';

import deleteIcon from '../../assets/images/Home/delete.svg'
import Swal from 'sweetalert2';
import EditSubscriptionModal from '../../components/EditSubscriptionModal/EditSubscriptionModal';
import { SwalErrorShow } from '../../assets/scripts/Utility';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import AddSubscriptionModal from '../../components/AddSubscriptionModal/AddSubscriptionModal';
const SubscriptionPackages = () => {
    const axiosSecure = useAxiosSecure();

    const { refetch, data: data = [], isLoading, error } = useQuery({
        queryKey: ['subscription-packages'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/subscription-packages`);
            return res.data;
        }
    })

    if (isLoading) {
        return <LoadingPage />
    }
    if (error) {
        return <ErrorPage />
    }
    const handlePackageDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // delete package request
                axiosSecure.delete(`/delete-subscription-packages/${id}`)
                .then(data => {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your package has been deleted.",
                        icon: "success"
                    });
                    refetch()
                })
                .catch(err => SwalErrorShow(err))
            }
        });
    }
    return (
        <>
        <div className='flex w-full flex-wrap items-center'>
                <div className='flex-grow'><SectionTitle h1="Subscription Packages"/></div>
            <div className=''><AddSubscriptionModal refetch={refetch}/></div>
        </div>
        
            <div className="flex flex-wrap justify-center gap-12">
                {
                    data && Array.isArray(data) && data.map(subscription => <Card key={subscription?._id} className="py-4 h-56 w-64 mt-20 package-animation">
                        <CardHeader className="pt-2 px-4 flex-col items-start space-y-1">
                            <div className='flex justify-between items-center w-full'>
                                <h4 className="font-bold text-2xl">{subscription?.packageType}</h4>
                                <div>
                                    <EditSubscriptionModal defaultData={subscription} refetch={refetch} />
                                    <button className='ml-3' onClick={() => handlePackageDelete(subscription._id)}><img src={deleteIcon} alt="" /></button>
                                </div>
                            </div>
                            <small className="text-bold">( {subscription?.duration} Months )</small>
                            <div>
                                <p className="text-sm uppercase">Final Price: {subscription?.finalPrice}</p>
                                <p className="text-sm uppercase">Cut Price: {subscription?.cutPrice}</p>
                                <small className="text-default-500">{subscription?.shortDescription}</small>
                            </div>

                        </CardHeader>
                    </Card>)
                }
            </div>
        </>
    );
};

export default SubscriptionPackages;