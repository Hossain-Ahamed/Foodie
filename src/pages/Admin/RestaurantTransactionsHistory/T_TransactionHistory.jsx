import React from 'react';

const T_TransactionHistory =({arrayData}) => {
  
    return (
        <div className='flex flex-col items-start p-0'>
            {
                arrayData && Array.isArray(arrayData) &&
                arrayData.sort((a, b) => new Date(b.date) - new Date(a.date)).map(i => <div
                    key={i?._id}
                    className='w-full bg-slate-300/20 px-3 py-1 mb-1 rounded-lg'
                >
                    

                        <p>Time : <span className='font-semibold text-gray-600'>{new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true ,timeZone: 'Asia/Dhaka'}).format(new Date(i?.date))} {i?.date}</span></p>
                        <p>Paid : <span className='font-semibold text-gray-600'> {i?.ammount} tk</span></p>
                    
           
                </div>)
            }

        </div>
    );
};


export default T_TransactionHistory;