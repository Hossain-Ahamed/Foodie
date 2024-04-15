import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import LoadingPage from '../../Shared/LoadingPages/LoadingPage/LoadingPage';
import ErrorPage from '../../Shared/ErrorPage/ErrorPage';
import RestaurantTransactionsHistoryTableRow from './RestaurantTransactionsHistoryTableRow';

const RestaurantTransactionsHistory = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: data = [], isLoading, error } = useQuery({
        queryKey: ['branch-wise-transactions-all-foodie-site'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/branch-wise-transactions-all-foodie-site`);
            return res.data
        }
    });

  

 

    if (isLoading) {
        return <LoadingPage />;
    }
    if (error) {
        return <ErrorPage />;
    }

    return (
        <>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
                <table className=" w-full text-sm text-left rtl:text-right text-gray-500 shaodow shadow-md">
                    <thead className="text-sm text-gray-700  bg-gray-50 border-b">
                        <tr>

                            <th scope="col" className="px-3 text-left">
                                Name
                            </th>
                            <th scope="col" className="px-3 text-center">
                                To
                            </th>

                            <th scope="col" className="px-3 text-center">
                                Amount to Pay
                            </th>
                            <th scope="col" className="px-3 text-center">
                                Paid
                            </th>
                            <th scope="col" className="px-3 text-center">
                                Outstanding
                            </th>
                            <th scope="col" className="px-8 text-left">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && Array.isArray(data) && data.map((item, _idx) => {

                                return <RestaurantTransactionsHistoryTableRow item={item} key={_idx} refetch={refetch}/>
                            }

                            )
                        }



                    </tbody>
                </table>
            </div>
        </>
    );
};

export default RestaurantTransactionsHistory;