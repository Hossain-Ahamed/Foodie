import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import LoadingPage from "../../Shared/LoadingPages/LoadingPage/LoadingPage";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SetTitle from "../../Shared/SetTtitle/SetTitle";

const BranchBillingHistory = () => {
    const axiosSecure = useAxiosSecure();
    const {  branchID } = useParams();
    const { refetch: dataRefetch, data: data = {}, isLoading: dataLoading, error: dataError } = useQuery({
        queryKey: ['historyBill', branchID],
        enabled: true,
   
        queryFn: async () => {


            // const res = await axiosSecure.get(`/restaurant/${branch}/bill-history-list`);


            const res = {
                data: [
                    {
                        
                        "subscriptionStart": "2024-01-28T12:00:00Z",
                        "subscriptionEnd": "2025-01-28T12:00:00Z",
                        "amount": 5000,
                        "payment_time": "2024-01-28T14:30:00Z",
                        "transaction_id": "T001",
                        "payment_method": "card"
                    },
                    {
                        
                        "subscriptionStart": "2024-02-15T12:00:00Z",
                        "subscriptionEnd": "2025-02-15T12:00:00Z",
                        "amount": 6000,
                        "payment_time": "2024-02-15T16:45:00Z",
                        "transaction_id": "T002",
                        "payment_method": "card"
                    },
                    {
                        
                        "subscriptionStart": "2024-03-10T12:00:00Z",
                        "subscriptionEnd": "2025-03-10T12:00:00Z",
                        "amount": 7500,
                        "payment_time": "2024-03-10T11:15:00Z",
                        "transaction_id": "T003",
                        "payment_method": "card"
                    },
                    // Add 12 more entries as needed
                    {
                        
                        "subscriptionStart": "2024-04-05T12:00:00Z",
                        "subscriptionEnd": "2025-04-05T12:00:00Z",
                        "amount": 7000,
                        "payment_time": "2024-04-05T14:20:00Z",
                        "transaction_id": "T004",
                        "payment_method": "card"
                    },
                    {
                        
                        "subscriptionStart": "2024-05-20T12:00:00Z",
                        "subscriptionEnd": "2025-05-20T12:00:00Z",
                        "amount": 8000,
                        "payment_time": "2024-05-20T13:45:00Z",
                        "transaction_id": "T005",
                        "payment_method": "card"
                    },
                    // Continue adding entries...
                ]
            }


            return res.data;
        },

    });


    if (dataLoading) {
        return <LoadingPage />
    }

    if (dataError) {
        return <ErrorPage />
    }
    return (
        <section  className="my-8 max-w-6xl mx-auto">
            <SectionTitle h1="Transaction History" />
            <SetTitle title="Transactions"/>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
                <table className=" w-full text-sm text-left rtl:text-right text-gray-500 shaodow shadow-md">
                    <thead className="text-sm text-gray-700  bg-gray-50 border-b">
                        <tr>

                            <th scope="col" className="px-1 text-center">
                                From
                            </th>
                            <th scope="col" className="px-1 text-center">
                                To
                            </th>

                            <th scope="col" className="px-1 text-center">
                                Transaction ID
                            </th>
                            <th scope="col" className="px-1 text-center">
                                Payment Date
                            </th>
                            <th scope="col" className="px-1 text-right">
                                Amount
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && Array.isArray(data) && data.map((item, _idx) => {

                                return (
                                    <tr key={_idx}

                                        className={`bg-white border-b text-gray-600 hover:bg-gray-50 cursor-pointer`}>

                                        


                                        <td className="px-1 py-4 text-center text-xs" >

                                            <p>

                                                {
                                                    item?.subscriptionStart && new Date(item?.subscriptionStart).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                                                }
                                            </p>
                                            <p>
                                                {
                                                    item?.subscriptionStart && new Date(item?.subscriptionStart).toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
                                                }
                                            </p>


                                        </td>
                                        <td className="px-1 py-4 text-center text-xs" >

                                            <p>

                                                {
                                                    item?.subscriptionEnd && new Date(item?.subscriptionEnd).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                                                }
                                            </p>
                                            <p>
                                                {
                                                    item?.subscriptionEnd && new Date(item?.subscriptionEnd).toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
                                                }
                                            </p>


                                        </td>
                                        <th scope="row" className="px-1 py-4 font-medium whitespace-nowrap text-center  ">
                                            {item?.transaction_id} <span className='text-gray-400 text-[10px] font-normal'>({item?.payment_method})</span>

                                        </th>
                                        <td className="px-1 py-4 text-center text-xs" >

                                            <p>

                                                {
                                                    item?.payment_time && new Date(item?.payment_time).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                                                }
                                            </p>
                                            <p>
                                                {
                                                    item?.payment_time && new Date(item?.payment_time).toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
                                                }
                                            </p>


                                        </td>
                                        <th scope="row" className="px-1 py-4 font-medium whitespace-nowrap text-right ">
                                            {item?.amount} <span className='text-gray-400 text-[10px] font-normal'>(tk)</span>

                                        </th>


                                    </tr>
                                )
                            }

                            )
                        }



                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default BranchBillingHistory;