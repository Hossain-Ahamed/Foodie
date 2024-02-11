import React from 'react';
import { SlOptionsVertical } from "react-icons/sl";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { VerticalDotsIcon } from './VerticalDotsIcon';
const RestaurentTableRow = ({ restaurent, getColor }) => {
    const navigate = useNavigate()
    // const getColor = (from, to) => {
    //     const currentTime = new Date().toISOString();
    //     if (new Date(to).getMonth() + 1 === new Date().getMonth() + 1) {
    //         return { "text": "Extend", "color": 'warning', "status": 'Expire Soon' };
    //     } if (currentTime >= from && currentTime <= to) {
    //         return { "text": "Extend", "color": 'success', "status": 'Continuing' };
    //     } else if (currentTime > to) {
    //         return { "text": "Renew", "color": 'danger', "status": "Expired" };
    //     } else {
    //         return { "text": "Paid", "color": 'blue-500', "status": "Paid" };
    //     }
    // };
    const fieldsStatus = getColor(restaurent?.subscriptionStart, restaurent?.subscriptionEnd)
    return (
        <tr>
            <td className='px-1 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className='pl-2 flex items-center'>
                    <div className='flex-shrink-0'>
                        <div className='block relative'>
                            <img
                                alt='profile'
                                src="https://lh3.googleusercontent.com/a/ACg8ocKjKSD7xxcI8hEoNgPnsxZ632hSVJFspYJNcAAmPKc39g=s360-c-no"
                                className='mx-auto object-cover rounded h-10 w-15 '
                            />
                        </div>
                    </div>
                    <div className='ml-3'>
                        <p className={`whitespace-no-wrap text-${fieldsStatus.color}`}>{restaurent?.branch_name}</p>
                        <p className='text-gray-400 whitespace-no-wrap'>{restaurent?.branchID}</p>
                    </div>
                </div>
            </td>
            <td className='px-1 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <p className={`whitespace-no-wrap text-${fieldsStatus.color}`}>{restaurent?.branch_name}</p>
            </td>
            <td className='px-1 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <p className={`whitespace-no-wrap text-${fieldsStatus.color}`}>{
                    restaurent?.subscriptionStart && new Date(restaurent?.subscriptionStart).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                }</p>
                <p className={`whitespace-no-wrap text-${fieldsStatus.color}`}>{
                    restaurent?.payment_time && new Date(restaurent?.payment_time).toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
                }</p>
            </td>
            <td className='px-1 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <p className={`whitespace-no-wrap text-${fieldsStatus.color}`}>{
                    restaurent?.subscriptionEnd && new Date(restaurent?.subscriptionEnd).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                }</p>
                <p className={`whitespace-no-wrap text-${fieldsStatus.color}`}>{
                    restaurent?.payment_time && new Date(restaurent?.payment_time).toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
                }</p>
            </td>
            <td className='px-1 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <p className={`whitespace-no-wrap text-${fieldsStatus.color}`}>{
                    restaurent?.payment_time && new Date(restaurent?.payment_time).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                }</p>
                <p className={`whitespace-no-wrap text-${fieldsStatus.color}`}>{
                    restaurent?.payment_time && new Date(restaurent?.payment_time).toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
                }</p>
            </td>
            <td className='px-1 py-5 border-b border-gray-200 bg-white text-sm text-center'>


                {restaurent?.payment_status === "Paid"
                    ? <p className={`whitespace-no-wrap text-${fieldsStatus.color}`}>{restaurent?.transaction_id} <span className='text-gray-400 text-xs'>({restaurent?.payment_method})</span></p>
                    : ""
                }
            </td>
            <td className='px-1 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <p className={`whitespace-no-wrap text-${fieldsStatus.color}`}>{restaurent?.payment_status}</p>
            </td>
            <td className='px-1 py-5 border-b border-gray-200 bg-white text-sm text-center'>
              
                <p className={`whitespace-no-wrap text-${fieldsStatus.color}`}>
                {
                    restaurent?.isActive ? "Activated" : "Deactivated"
                }
                </p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <div className="relative flex justify-center items-center gap-2">
                    <Dropdown>
                        <DropdownTrigger>
                            <Button isIconOnly size="sm" variant="light">
                                <VerticalDotsIcon className="text-default-300" />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownItem >Notify Owner</DropdownItem>
                            {
                                restaurent?.isActive ?
                                    <DropdownItem >Deactivate</DropdownItem>
                                    :
                                    <DropdownItem >Activate</DropdownItem>

                            }

                            <DropdownItem >Delete</DropdownItem >
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </td>
        </tr>
    )
}

export default RestaurentTableRow;