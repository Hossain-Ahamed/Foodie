import React from 'react';
// import useRestauarantAndBranch from '../../../../Hooks/useRestauarantAndBranch';
import { Link } from 'react-router-dom';
import { AiOutlineEye } from "react-icons/ai";

const BranchesRow = ({ branch, refetch }) => {
    return (

        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className='flex items-center'>
                    <div className='flex items-center gap-5 flex-col md:flex-row'>
                        <div>
                            <span className='text-gray-900 whitespace-no-wrap block'>{branch?.branch_name}</span>
                            <span className='text-gray-400 whitespace-no-wrap block'>{branch?._id}</span>
                        </div>
                    </div>
                    <div className='ml-3'>
                        {/* <p className='text-gray-900 whitespace-no-wrap'>{category?.categoryID}</p> */}
                    </div>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span
                    className='text-gray-900 whitespace-no-wrap block text-left'
                >

                    {branch?.streetAddress}
                </span>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span
                    className='text-gray-900 whitespace-no-wrap block'
                >

                    {branch?.city}
                </span>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span
                    className='text-gray-900 whitespace-no-wrap block text-center'
                >

                    {branch?.stateProvince}
                </span>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

                <span
                    className='text-gray-900 whitespace-no-wrap block text-center'
                >

                    {branch?.country}
                </span>
            </td>


            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span
                    className='text-gray-900 whitespace-no-wrap block text-center'
                >
                    {branch?.paymentTypes}
                </span>
            </td>
            <td className='py-5 border-b border-gray-200 bg-white text-sm'>
                <span
                    className='text-gray-900 whitespace-no-wrap flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-center'
                >
                    <Link title="View" to={`/admin/branch-list/edit/${branch?.uid}`} className="inline-flex ml-3 cursor-pointer text-gray-500"><AiOutlineEye size={25} /></Link>
                </span>
            </td>
        </tr>

    );
};

export default BranchesRow;