import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import useCart from '../../../../Hooks/useCart';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useProfile from '../../../../Hooks/useProfile';
import LoadingPage from '../../../LoadingPage/LoadingPage/LoadingPage';
import Swal from 'sweetalert2';
import SetTitle from '../../../Shared/SetTtitle/SetTitle';


const ELEMENTS_OPTIONS = {
    fonts: [
        {
            cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
        },
    ],
};


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_PK);



const Payment = () => {
    
    const { cartID } = useParams();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { data: { Details, price } = {}, error: detailError, isLoading: detailLoading, refetch: detailrefetch } = useQuery({
        queryKey: ['detailCartData', cartID],
       
        queryFn: async () => {
            const res = await axiosSecure.get(`/get-paymnet-data/${cartID}`);
            // console.log(res.data)
            return res.data;
        },
        cacheTime:0
    })


    if (detailError) {
        console.error(detailError)
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: `${detailError?.response?.data?.message}`,
            showConfirmButton: false,
            timer: 1500
        })

        return navigate('/dashboard/carts');
    }

    if (detailLoading) {
        return <LoadingPage />
    }

    return (
        <section className='min-h-screen py-10'>
            <SetTitle title="Payment" />
            <SectionTitle h1="Payment Form" />

            <div className=' py-7 px-4  max-w-xl mx-auto bg-white text-black dark:bg-white dark:text-black'>


                <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                    <CheckOutForm priceDetails={Details} price={price} />
                </Elements>


            </div>
        </section>
    );
};

export default Payment;