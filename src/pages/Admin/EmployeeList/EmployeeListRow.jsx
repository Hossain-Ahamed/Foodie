import React from 'react';
// import useRestauarantAndBranch from '../../../../Hooks/useRestauarantAndBranch';
import { Link } from 'react-router-dom';
import { AiOutlineEye } from "react-icons/ai";
import Swal from 'sweetalert2';
import { FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import { SwalErrorShow } from '../../../assets/scripts/Utility';
import edit from '../../../assets/images/Home/edit.svg'
import trash from '../../../assets/images/Home/delete.svg'
const EmployeeListRow = ({ employee, refetch }) => {
  const axiosSecure = useAxiosSecure();
  
    const handleDeleteEmployee = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/delete-dev-profile/${id}`)
                    .then(res => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Employee has been deleted.",
                            icon: "success"
                        });
                        refetch()
                    })
                    .catch(err => SwalErrorShow(err))
             
            }
        });
    }
    return (

        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className='flex items-center'>
                    <div className='flex items-center gap-5 flex-col md:flex-row'>
                        <div className=''>
                            <img
                                alt='profile'
                                src={employee?.profilePhoto}
                                className='mx-auto object-cover rounded h-10 w-15 '
                            />
                        </div>
                        <div>
                            <span className='text-gray-900 whitespace-no-wrap block'>{employee?.f_name} {employee?.l_name}</span>
                            <span className='text-gray-400 whitespace-no-wrap block'>{employee?.email}</span>
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

                    {employee?.gender}
                </span>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span
                    className='text-gray-900 whitespace-no-wrap block text-center'
                >

                    {employee?.uid}
                </span>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span
                    className='text-gray-900 whitespace-no-wrap block text-center'
                >

                    {employee?.nid}
                </span>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

                <a href={`tel:${employee.mobile}`} className='text-gray-600 whitespace-no-wrap block hover:underline cursor-pointer text-center'>{employee?.mobile}</a>
            </td>


            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span
                    className='text-gray-900 whitespace-no-wrap block text-center'
                >
                    {employee?.city}
                </span>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span
                    className='text-gray-900 whitespace-no-wrap block text-center'
                >

                    {employee?.role}
                </span>
            </td>
            <td className='py-5 border-b border-gray-200 bg-white text-sm'>
                <span
                    className='text-gray-900 whitespace-no-wrap flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-center'
                >
                    <Link title="Edit" to={`/admin/employee-list/edit/${employee?.uid}`} className="inline-flex ml-3 cursor-pointer"><img src={edit} /></Link>
                    <span title="Delete" onClick={() => handleDeleteEmployee(employee?._id)} className="inline-flex ml-3 cursor-pointer"><img src={trash} /></span>
                </span>
            </td>
        </tr>

    );
};

export default EmployeeListRow;