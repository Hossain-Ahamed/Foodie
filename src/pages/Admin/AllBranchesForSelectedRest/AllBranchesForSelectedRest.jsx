import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import LoadingPage from '../../Shared/LoadingPages/LoadingPage/LoadingPage';
import ErrorPage from '../../Shared/ErrorPage/ErrorPage';
import SetTitle from '../../Shared/SetTtitle/SetTitle';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import BranchesRow from './BranchesRow';

const AllBranchesForSelectedRest = () => {
    const axiosSecure = useAxiosSecure();
    const {resID} = useParams()
    const { refetch, data: { branches, restaurantDetails } = {}, isLoading, error } = useQuery({
        queryKey: ['branch-for-dev'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/restaurant-all-branches/${resID}`); // get all branches of a restaurant
            // console.log(res.data);
            return res.data;
        }
    })

    if (isLoading) {
        return <LoadingPage />
    }
    if (error) {
        return <ErrorPage />
    }

    return (
        <div className='max-w-[1600px] mx-auto'>
            <SetTitle title="Restaurent Branches" />
            <SectionTitle h1="Restaurent Branches" />
            <div className='mt-5 flex flex-wrap justify-between items-center'>
                <div className='mb-3 md:mb-0'>
                    <p className='text-xl font-semibold mb-2'>Restaurant Information</p>
                    <p>Name: {restaurantDetails?.res_name}</p>
                    <p>Email: {restaurantDetails?.res_email}</p>
                    <p>Phone: {restaurantDetails?.res_mobile}</p>
                </div>

                <div>
                    <p className='text-xl font-semibold mb-2'>Owner Information</p>
                    <p>Name: {restaurantDetails?.res_Owner_Name}</p>
                    <p>Email: {restaurantDetails?.res_Owner_email}</p>
                    <p>Phone: {restaurantDetails?.res_Owner_mobile}</p>
                    <p>{restaurantDetails?.res_Owner_streetAddress}, {restaurantDetails?.res_Owner_city}</p>
                    <p>{restaurantDetails?.res_Owner_stateProvince}, {restaurantDetails?.res_Owner_country}</p>
                </div>
            </div>
            <section className='mt-5'>
                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'
                                        >
                                            Branch
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'
                                        >
                                            Street Address
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'
                                        >
                                            City
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal text-center'
                                        >State/Province
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal text-center'
                                        >Country
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal text-center'
                                        >Payment Type</th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal text-center'
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>{branches && Array.isArray(branches) && branches.map((branch, _idx) => <BranchesRow key={_idx} branch={branch} />)}</tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default AllBranchesForSelectedRest;