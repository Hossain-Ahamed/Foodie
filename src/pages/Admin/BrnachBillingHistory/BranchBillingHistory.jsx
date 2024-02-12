import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import LoadingPage from "../../Shared/LoadingPages/LoadingPage/LoadingPage";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SetTitle from "../../Shared/SetTtitle/SetTitle";

const BranchBillingHistory = () => {
    const axiosSecure = useAxiosSecure();
    const { branchID } = useParams();
    const { refetch: dataRefetch, data: data = {}, isLoading: dataLoading, error: dataError } = useQuery({
        queryKey: ['historyBill', branchID],
        enabled: true,

        queryFn: async () => {


            const res = await axiosSecure.get(`/restaurant/branch/${branchID}`);
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
        <section className="my-8 max-w-6xl mx-auto">
            <SetTitle title="Transactions" />
            <div>
                <p className="text-2xl font-semibold">Branch Information</p>
                <p>{data?.branchDetails.branch_name} <span className="text-sm text-gray-400">({data?.branchDetails._id})</span></p>
                <p>{data?.branchDetails.streetAddress}, {data?.branchDetails?.city}</p>
                <p>{data?.branchDetails.stateProvince}, {data?.branchDetails?.country}</p>
            </div>
            <SectionTitle h1="Transaction History" />
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
                            data?.transactionData?.previousSubscriptions && Array.isArray(data?.transactionData?.previousSubscriptions) && data.transactionData.previousSubscriptions.map((item, _idx) => {

                                return (
                                    <tr key={_idx}

                                        className={`bg-white border-b text-gray-600 hover:bg-gray-50 cursor-pointer`}>




                                        <td className="px-1 py-4 text-center text-xs" >

                                            <p>

                                                {
                                                    item?.startDate && new Date(item?.startDate).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                                                }
                                            </p>
                                            <p>
                                                {
                                                    item?.startDate && new Date(item?.payment_time).toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
                                                }
                                            </p>


                                        </td>
                                        <td className="px-1 py-4 text-center text-xs" >

                                            <p>

                                                {
                                                    item?.endDate && new Date(item?.endDate).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                                                }
                                            </p>
                                            <p>
                                                {
                                                    item?.endDate && new Date(item?.payment_time).toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
                                                }
                                            </p>


                                        </td>
                                        <th scope="row" className="px-1 py-4 font-medium whitespace-nowrap text-center  ">
                                            {item?.transactionID} <span className='text-gray-400 text-[10px] font-normal'>({item?.payment_method})</span>

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
                                            {item?.price} <span className='text-gray-400 text-[10px] font-normal'>(tk)</span>

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