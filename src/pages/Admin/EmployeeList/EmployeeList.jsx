import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import SetTitle from '../../Shared/SetTtitle/SetTitle';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import { IoAddOutline } from 'react-icons/io5';
import EmployeeListRow from './EmployeeListRow';

const EmployeeList = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: data = [], isLoading, error } = useQuery({
        queryKey: ['employee-list'],
        queryFn: async () => {
            // const res = await axiosSecure.get(`/restaurant/${res_id}/branch/${branchID}/employee-list`);
            return [
                {
                    _id: "1",
                    f_name: "Farhan Hasan",
                    l_name: "Nilok",
                    email: "nilok@gmail.com",
                    mobile: "018399473783",
                    gender: "Male",
                    nid: "8349490384893",
                    uid: "4385884935",
                    role: "Admin",
                    DOB: "27-01-2001",
                    profilePhoto: "https://lh3.googleusercontent.com/a/ACg8ocKjKSD7xxcI8hEoNgPnsxZ632hSVJFspYJNcAAmPKc39g=s360-c-no",
                    streetAddress: "J A M T O L A",
                    city: 'Narayanganj',
                    stateProvince: 'Dhaka',
                    postalCode: '435',
                    country: "Bangladesh",
                },
                {
                    _id: "2",
                    f_name: "Fattan Prodan",
                    l_name: "Pathul",
                    email: "pathul@gmail.com",
                    mobile: "018399473783",
                    gender: "Female",
                    nid: "8349490384893",
                    uid: "4385884935",
                    role: "Admin",
                    DOB: "27-01-2001",
                    profilePhoto: "https://lh3.googleusercontent.com/a/ACg8ocKjKSD7xxcI8hEoNgPnsxZ632hSVJFspYJNcAAmPKc39g=s360-c-no",
                    streetAddress: "J A M T O L A",
                    city: 'Narayanganj',
                    stateProvince: 'Dhaka',
                    postalCode: '435',
                    country: "Bangladesh",
                },
                {
                    _id: "3",
                    f_name: "Hossain",
                    l_name: "Ahamed",
                    email: "hossain@gmail.com",
                    mobile: "018399473783",
                    gender: "Male",
                    nid: "8349490384893",
                    uid: "4385884935",
                    role: "Admin",
                    DOB: "27-01-2001",
                    profilePhoto: "https://lh3.googleusercontent.com/a/ACg8ocKjKSD7xxcI8hEoNgPnsxZ632hSVJFspYJNcAAmPKc39g=s360-c-no",
                    streetAddress: "J A M T O L A",
                    city: 'Narayanganj',
                    stateProvince: 'Dhaka',
                    postalCode: '435',
                    country: "Bangladesh",
                },
                {
                    _id: "4",
                    f_name: "Gazi Fuad",
                    l_name: "Tahsin",
                    email: "tahsin@gmail.com",
                    mobile: "018399473783",
                    gender: "Female",
                    nid: "8349490384893",
                    uid: "4385884935",
                    role: "Admin",
                    DOB: "27-01-2001",
                    profilePhoto: "https://lh3.googleusercontent.com/a/ACg8ocKjKSD7xxcI8hEoNgPnsxZ632hSVJFspYJNcAAmPKc39g=s360-c-no",
                    streetAddress: "J A M T O L A",
                    city: 'Narayanganj',
                    stateProvince: 'Dhaka',
                    postalCode: '435',
                    country: "Bangladesh",
                },
                {
                    _id: "5",
                    f_name: "Gazi Fuad",
                    l_name: "Tahsin",
                    email: "tahsin@gmail.com",
                    mobile: "018399473783",
                    gender: "Male",
                    nid: "8349490384893",
                    uid: "4385884935",
                    role: "Admin",
                    DOB: "27-01-2001",
                    profilePhoto: "https://lh3.googleusercontent.com/a/ACg8ocKjKSD7xxcI8hEoNgPnsxZ632hSVJFspYJNcAAmPKc39g=s360-c-no",
                    streetAddress: "J A M T O L A",
                    city: 'Narayanganj',
                    stateProvince: 'Dhaka',
                    postalCode: '435',
                    country: "Bangladesh",
                },
                {
                    _id: "6",
                    f_name: "Gazi Fuad",
                    l_name: "Tahsin",
                    email: "tahsin@gmail.com",
                    mobile: "018399473783",
                    gender: "Female",
                    nid: "8349490384893",
                    uid: "4385884935",
                    role: "Admin",
                    DOB: "27-01-2001",
                    profilePhoto: "https://lh3.googleusercontent.com/a/ACg8ocKjKSD7xxcI8hEoNgPnsxZ632hSVJFspYJNcAAmPKc39g=s360-c-no",
                    streetAddress: "J A M T O L A",
                    city: 'Narayanganj',
                    stateProvince: 'Dhaka',
                    postalCode: '435',
                    country: "Bangladesh",
                },
            ]
        }
    })
    return (
        <div className='max-w-[1600px] mx-auto'>
            <section className='max-w-[1600px] mx-auto mt-5'>
                <SetTitle title="Employee List" />

                <div className='flex  gap-3 '>
                    <div className='w-full '>
                        <SectionTitle h1="Employee List" />
                    </div>
                    <div>
                        <Link to={`/add-employee`} className='flex justify-center items-center gap-2 text-white font-medium  px-4 py-2 bg-green-400 rounded-md text-nowrap '>Add Employee<IoAddOutline className='text-white' /></Link>

                    </div>

                </div>
                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'
                                        >
                                            Employee
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-center text-sm uppercase font-normal'
                                        >
                                            Gender
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal text-center'
                                        >Employee ID</th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal text-center'
                                        >NID</th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-center text-sm uppercase font-normal'
                                        >
                                            Phone
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-center text-sm uppercase font-normal'
                                        >
                                            City
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal text-center'
                                        >
                                            Role
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal text-center'
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>{data && Array.isArray(data) && data.map((employee, _idx) => <EmployeeListRow key={_idx} employee={employee} />)}</tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default EmployeeList;