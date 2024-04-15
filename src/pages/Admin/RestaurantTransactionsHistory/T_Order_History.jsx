import React from 'react';

const T_Order_History = ({ arrayData }) => {

    return (
        <div className='flex flex-col items-start p-0'>
            {
                arrayData && Array.isArray(arrayData) &&
                arrayData.map(i => <div
                    key={i?._id}
                    className='w-full bg-slate-300/20 px-3 py-1 mb-1 rounded-lg'
                >
                    <div className='flex justify-between gap-x-4 '>

                        <p>Order ID : <span className='font-semibold text-gray-600'>{i?.orderID && i?.orderID.slice(-6)}</span></p>
                        <p><span className='font-semibold text-gray-600'>{i?.price} tk</span></p>
                    </div>
                    <div className='text-xs mt-1'>

                        <p>Transaction ID : <span className='font-semibold text-gray-600'>{i?.transactionID}</span></p>
                        <p>Method ID : <span className='font-semibold text-gray-600'>{i?.methodID}</span></p>
                        <p>Intent Method ID: <span className='font-semibold text-gray-600'>{i?.intent_methodID}</span></p>
                    </div>
                </div>)
            }

        </div>
    );
};

export default T_Order_History;