import { Button, User } from '@nextui-org/react';
import React, { useState } from 'react';
import { EyeIcon } from './EyeIcon';
import { GiTakeMyMoney } from "react-icons/gi";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { SwalErrorShow } from '../../../assets/scripts/Utility';
import TransactionHistoryView from './TransactionHistoryView';

const RestaurantTransactionsHistoryTableRow = ({ item, refetch }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [Loading, setLoading] = useState(false);
    const { handleSubmit, register, setValue, formState: { errors }, resetField, reset } = useForm();

    const axiosSecure = useAxiosSecure();
    const onSubmit = data => {


        const due = (item?.NeedToPay - item?.paid) || 0;
        const paid = parseFloat(data?.amount);
        if (paid > due) {
            toast.error(`Resstricted ! due : ${due} paid : ${paid} `);
            return;
        }
        setLoading(true);

        const uploadData = {
            amount: paid,
            _id: item?._id
        }
        axiosSecure.patch(`add-payment-to-res-owner`, uploadData)
            .then(res => {

                refetch();
                toast.success("Successful!");
                onOpenChange();
                reset();
            })
            .catch(e => SwalErrorShow(e))
            .finally(() => setLoading(false));

    }
    return (
        <>
            <tr

                className={`bg-white border-b text-gray-600 hover:bg-gray-50 cursor-pointer`}>




                <td className="px-2 py-4  text-xs" >

                    <User
                        avatarProps={{ radius: "lg", src: item?.res_id?.img }}
                        description={item?.branchID?.branch_name}
                        name={item?.res_id?.res_name}
                        classNames=' object-contain '
                    >
                        {item?.branchID?.branch_name}
                    </User>


                </td>
                <td className="px-1 py-4 text-center text-xs" >
                    <p>{item?.month} {item?.year}</p>
                </td>
                <td className="px-1 py-4 text-center text-xs" >
                    <p>{item?.NeedToPay}</p>
                </td>
                <td className="px-1 py-4 text-center text-xs" >
                    <p>{item?.paid}</p>
                </td>
                <td className="px-1 py-4 text-center text-xs" >
                    <p>{(item?.NeedToPay - item?.paid).toFixed(2) || 0}</p>
                </td>
                <td className="px-1 py-4 text-center text-xs flex justify-start items-start" >
                    <TransactionHistoryView item={item}/>
                    <Button onClick={onOpen} className='bg-transparent text-xl' title='payment to restaurant owner'>
                        <GiTakeMyMoney className='text-3xl ' />
                    </Button>

                </td>



            </tr>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col items-center gap-1">Payment Amount</ModalHeader>
                            <ModalBody>
                                <form onSubmit={handleSubmit(onSubmit)} className='w-full'>

                                    <div className="w-full p-1 relative">

                                        <input className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input" type="text"
                                            {...register("amount", {
                                                required: "*amount of payment is Required",
                                                validate: {
                                                    isNumber: (value) => !isNaN(value)
                                                },
                                            })}
                                            onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })} />

                                        <p className='absolute top-3 right-5 text-xl'>tk</p>
                                        {errors.amount?.type === "required" && (<p className='m-0 p-0 pl-1  text-base text-red-500 text-[9px]' role="alert">{errors.amount.message}</p>)}
                                        {errors.amount?.type === "isNumber" && (<p className='m-0 p-0 pl-1  text-base text-red-500 text-[9px]' role="alert">*is not a number</p>)}
                                    </div>

                                    <Button color='primary' variant='solid' className='text-lg w-full mt-5' type='submit' isLoading={Loading}>
                                        Pay
                                    </Button>
                                </form>
                            </ModalBody>

                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default RestaurantTransactionsHistoryTableRow;