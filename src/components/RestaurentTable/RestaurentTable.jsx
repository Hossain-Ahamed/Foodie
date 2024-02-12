import React from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import SetTitle from '../../pages/Shared/SetTtitle/SetTitle';
import SectionTitle from '../SectionTitle/SectionTitle';
import RestaurentTableRow from './RestaurentTableRow';
import ErrorPage from '../../pages/Shared/ErrorPage/ErrorPage';
import LoadingPage from '../../pages/Shared/LoadingPages/LoadingPage/LoadingPage';

const RestaurentTable = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch: dataRefetch, data: data = {}, isLoading: dataLoading, error: dataError } = useQuery({
        queryKey: ['res_table'],
        enabled: true,
        queryFn: async () => {


            const res = await axiosSecure.get(`/all-branch-payment-wise-list-for-dev-admins`);


            // const res = {
            //     data: [
            //         {
            //             "res_id": 1,
            //             "res_name": "Restaurant A",
            //             "branch_name": "Main Branch",
            //             "branchID": "B001",
            //             "subscriptionStart": "2024-01-28T12:00:00Z",
            //             "subscriptionEnd": "2025-01-28T12:00:00Z",
            //             "amount": 5000,
            //             "payment_time": "2024-01-28T14:30:00Z",
            //             "transaction_id": "T001",
            //             "payment_method": "card",
            //             "payment_status": "Paid"
            //         },
            //         {
            //             "res_id": 2,
            //             "res_name": "Restaurant B",
            //             "branch_name": "Downtown Branch",
            //             "branchID": "B002",
            //             "subscriptionStart": "2024-02sssssssssss-15xxxxxxT12:00:00Z",
            //             "subscriptionEnd": "2025-02-15T12:00:00Z",
            //             "amount": 6000,
            //             "payment_time": "2024-02-15T16:45:00Z",
            //             "transaction_id": "T002",
            //             "payment_method": "card",
            //             "payment_status": "Paid"
            //         },
            //         {
            //             "res_id": 3,
            //             "res_name": "Restaurant C",
            //             "branch_name": "East Side Branch",
            //             "branchID": "B003",
            //             "subscriptionStart": "2024-03-10T12:00:00Z",
            //             "subscriptionEnd": "2025-03-10T12:00:00Z",
            //             "amount": 7500,
            //             "payment_time": "2024-03-10T11:15:00Z",
            //             "transaction_id": "T003",
            //             "payment_method": "card",
            //             "payment_status": "Unpaid"
            //         },
            //         // Add 12 more entries as needed
            //         {
            //             "res_id": 4,
            //             "res_name": "Restaurant D",
            //             "branch_name": "West Side Branch",
            //             "branchID": "B004",
            //             "subscriptionStart": "2024-04-05T12:00:00Z",
            //             "subscriptionEnd": "2025-04-05T12:00:00Z",
            //             "amount": 7000,
            //             "payment_time": "2024-04-05T14:20:00Z",
            //             "transaction_id": "T004",
            //             "payment_method": "card",
            //             "payment_status": "Pending"
            //         },
            //         {
            //             "res_id": 5,
            //             "res_name": "Restaurant E",
            //             "branch_name": "Uptown Branch",
            //             "branchID": "B005",
            //             "subscriptionStart": "2024-05-20T12:00:00Z",
            //             "subscriptionEnd": "2025-05-20T12:00:00Z",
            //             "amount": 8000,
            //             "payment_time": "2024-05-20T13:45:00Z",
            //             "transaction_id": "T005",
            //             "payment_method": "card",
            //             "payment_status": "Unpaid"
            //         },
            //         // Continue adding entries...
            //     ]
            // }


            return res.data;
        },

    });
    const getColor = (from, to) => {
        const currentTime = new Date().toISOString();
        const toDate = new Date(to); // Example date

        const currentMonth = new Date().getMonth() + 1; // Get current month
        const currentYear = new Date().getFullYear(); // Get current year

        const toMonth = toDate.getMonth() + 1; // Get month of 'to'
        const toYear = toDate.getFullYear(); // Get year of 'to'

        if (currentMonth === toMonth && currentYear === toYear) {

            return { "text": "Extend", "color": 'warning', "status": 'Expire Soon' };
        } if (currentTime >= from && currentTime <= to) {
            return { "text": "Extend", "color": 'success', "status": 'Continuing' };
        } else if (currentTime > to) {
            return { "text": "Renew", "color": 'danger', "status": "Expired" };
        } else {
            return { "text": "Paid", "color": 'blue-500', "status": "Paid" };
        }
    };

    if (dataLoading) {
        return <LoadingPage />
    }

    if (dataError) {
        return <ErrorPage />
    }

    return (
        <div className='max-w-[1600px] mx-auto'>
            <div className='py-8'>
                <SetTitle title="Payments" />
                <SectionTitle h1="Branch Payment & Activation List" />
                <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto mt-4'>
                    <div className='inline-block min-w-full shadow rounded-lg overflow-h_idden'>
                        <table className='min-w-full leading-normal'>
                            <thead>
                                <tr>
                                    <th
                                        scope='col'
                                        className='px-1 py-3 bg-white  border-b border-gray-200 text-gray-800 text-center text-sm uppercase font-normal'
                                    >
                                        Restaurent Name
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-1 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal text-center'
                                    >
                                        Branch Name
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-1 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal text-center'
                                    >
                                        Subscription Start
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-1 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal text-center'
                                    >
                                        Subscription End
                                    </th>

                                    <th
                                        scope='col'
                                        className='px-1 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal text-center'
                                    >
                                        Payment Time
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-1 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal text-center'
                                    >
                                        Transaction ID
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-1 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal text-center'
                                    >
                                        Paid
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-1 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal text-center'
                                    >
                                        Activation 
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-1 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal text-center'
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>{data && Array.isArray(data) && data.map((item, _idx) => <RestaurentTableRow key={_idx} restaurent={item} getColor={getColor} />)}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurentTable;