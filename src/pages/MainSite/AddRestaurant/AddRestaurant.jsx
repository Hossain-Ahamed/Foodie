import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { getAllDistricts, getCountries, getDivisions, getProvinceOfSelectedCity, validateEmail, validateMobileNumber } from '../../../assets/scripts/Utility';
import SetTitle from '../../Shared/SetTtitle/SetTitle';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
// import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AddRestaurant = () => {
    const countries = getCountries();

    // const axiosSecure = useAxiosSecure();

    const AllDistricts = getAllDistricts();
    const AllDivisions = getDivisions();

    const { register, handleSubmit, formState: { errors }, setValue, control, getValues } = useForm();

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'branches',
    });

    // handle image
    const [selectedImage0, setSelectedImage0] = useState(null);

    const handleImageUpload0 = (event) => {
        const file = event.target.files[0];
        setSelectedImage0(URL.createObjectURL(file));
        setValue("img", file);

    };

    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const onSubmit = (data) => {

        console.log(data)



        // first image upload check  --main image
        if (!selectedImage0) {
            Swal.fire({
                icon: "error",
                title: "No Photo is selected",
                text: "Upload a photo"


            });

            return;
        }


        if (data?.branches.length <= 0) {
            Swal.fire({
                icon: "error",
                title: "No branch is created",
                text: "Create a branch",

            });

            return;
        }
        const resData = new FormData();

        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                const value = data[key];
    
                // If the value is an array, handle it separately
                if (Array.isArray(value)) {
                    value.forEach((item, index) => {
                        // Append array items with indexes
                        for (const subKey in item) {
                            if (Object.prototype.hasOwnProperty.call(item, subKey)) {
                                resData.append(`${key}[${index}][${subKey}]`, item[subKey]);
                            }
                        }
                    });
                } else {
                    // Append single values
                    resData.append(key, value);
                }
            }
        }
    
        // If there's an image, you can append it as well
        // Assuming data.img is a File object
        // if (data && data.img instanceof File) {
        //     resData.append('img', data.img);
        // }

        console.log([...resData])

        // Add fields to the FormData object
        // resData.append('res_name', data.res_name);
        // resData.append('res_email', data.res_email);
        // resData.append('res_mobile', data.res_mobile);
        // resData.append('res_Owner_Name', data.res_Owner_Name);
        // resData.append('res_Owner_email', data.res_Owner_email);
        // resData.append('res_Owner_mobile', data.res_Owner_mobile);
        // resData.append('res_Owner_streetAddress', data.res_Owner_streetAddress);
        // resData.append('res_Owner_city', data.res_Owner_city);
        // resData.append('res_Owner_stateProvince', data.res_Owner_stateProvince);
        // resData.append('res_Owner_postalCode', data.res_Owner_postalCode);
        // resData.append('res_Owner_country', data.res_Owner_country);

        // Add branch information
        // data.branches.forEach((branch, index) => {
        //     resData.append(`branches[${index}][name]`, branch.name);
        //     resData.append(`branches[${index}][streetAddress]`, branch.streetAddress);
        //     resData.append(`branches[${index}][city]`, branch.city);
        //     resData.append(`branches[${index}][stateProvince]`, branch.stateProvince);
        //     resData.append(`branches[${index}][postalCode]`, branch.postalCode);
        //     resData.append(`branches[${index}][country]`, branch.country);
        // });


        // resData.append('img', data.img);



        // for (const entry of resData.entries()) {
        //     // Each entry is an array [key, value]
        //     const [key, value] = entry;

        //     // Log the key-value pair to the console
        //     console.log(`${key}: ${value}`);
        // }


        axiosSecure.post(`${import.meta.env.VITE_serverAddress}/create-restaurant`, data,{
            headers:  {
                'Content-Type': 'multipart/form-data'
              }
        } )
            .then(res => {

                console.log(res.data);
                // navigate(`/select-package/${res?.data?.branchID}`, { replace: true })
            }).catch(e => {
                console.error(e)
                Swal.fire({
                    icon: "error",
                    text: e?.code + " " + e?.message,
                    title: e?.response?.data?.message

                });
            })
    };

    const generateBranchID = (branch) => {

        const { streetAddress, city, stateProvince, country, postalCode, branch_name } = branch;
        if (!streetAddress || !city || !stateProvince || !country || !postalCode) {
            let message = "";
            let fieldName = ""
            if (!streetAddress) {
                message = "Street Address Missing"
                fieldName = "Street Address"
            } else if (!city) {
                message = "City Name Missing"
                fieldName = "Street Address"
            } else if (!stateProvince) {
                message = "State / Province Name Missing"
                fieldName = "State / Province Address"
            } else if (!country) {
                message = "Country Name Missing"
                fieldName = "Country Address"
            } else if (!postalCode) {
                message = "Postal Code Missing"
                fieldName = "Postal Code"
            } else if (!branch_name) {
                message = "Branch name Missing"
                fieldName = "Branch Name"
            } else {
                message = "Necessary Data missing"
                fieldName = "Necessary Data"
            }
            Swal.fire({
                icon: "error",
                title: message,
                text: "Insert " + fieldName,

            });
            return;
        }

        // Combine values with hyphens
        const combinedInfo = `${branch_name}-${city}-${postalCode}`.replace(/\s/g, '-');

        // Append Date.now() to make it unique
        const uniqueBranchID = `${combinedInfo}-${Date.now().toString().slice(-6)}`;
        return uniqueBranchID;
    };

    return (
        <>
            <SetTitle title="Add Restaurant" />
            <form onSubmit={handleSubmit(onSubmit)} className='max-w-7xl mx-auto flex flex-col items-center py-12 select-none ' autoComplete='off'>
                <SectionTitle h1={`Restaurant Form`} />

                {/* restaurant info  */}
                <div className="w-full p-3 ">
                    <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">


                        {/* pp */}
                        <p className="mt-3 mb-1.5 font-medium text-coolGray-800 text-base" data-config-id="auto-txt-10-3">
                            Logo
                        </p>
                        <div className=''>

                            {/* iamge 1  */}
                            <div
                                className=" flex items-center justify-center relative  h-60"

                            >

                                {!selectedImage0 &&
                                    <>
                                        <div className="w-full">
                                            <div className="flex flex-wrap -m-3">
                                                <div className="w-full p-3">

                                                    <div className="relative flex flex-col items-center justify-center mb-6 p-6 h-44 text-center text-green-500 focus-within:border-green-500 border border-dashed border-coolGray-200 rounded-lg">
                                                        <svg className="mb-1.5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <svg className="mb-1.5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-1-3">
                                                                <path d="M8.71 7.71L11 5.41V15C11 15.2652 11.1054 15.5196 11.2929 15.7071C11.4804 15.8946 11.7348 16 12 16C12.2652 16 12.5196 15.8946 12.7071 15.7071C12.8946 15.5196 13 15.2652 13 15V5.41L15.29 7.71C15.383 7.80373 15.4936 7.87813 15.6154 7.92889C15.7373 7.97966 15.868 8.0058 16 8.0058C16.132 8.0058 16.2627 7.97966 16.3846 7.92889C16.5064 7.87813 16.617 7.80373 16.71 7.71C16.8037 7.61704 16.8781 7.50644 16.9289 7.38458C16.9797 7.26272 17.0058 7.13202 17.0058 7C17.0058 6.86799 16.9797 6.73729 16.9289 6.61543C16.8781 6.49357 16.8037 6.38297 16.71 6.29L12.71 2.29C12.6149 2.19896 12.5028 2.1276 12.38 2.08C12.1365 1.97999 11.8635 1.97999 11.62 2.08C11.4972 2.1276 11.3851 2.19896 11.29 2.29L7.29 6.29C7.19676 6.38324 7.1228 6.49393 7.07234 6.61575C7.02188 6.73758 6.99591 6.86814 6.99591 7C6.99591 7.13186 7.02188 7.26243 7.07234 7.38425C7.1228 7.50607 7.19676 7.61677 7.29 7.71C7.38324 7.80324 7.49393 7.8772 7.61575 7.92766C7.73757 7.97812 7.86814 8.00409 8 8.00409C8.13186 8.00409 8.26243 7.97812 8.38425 7.92766C8.50607 7.8772 8.61676 7.80324 8.71 7.71ZM21 12C20.7348 12 20.4804 12.1054 20.2929 12.2929C20.1054 12.4804 20 12.7348 20 13V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V13C4 12.7348 3.89464 12.4804 3.70711 12.2929C3.51957 12.1054 3.26522 12 3 12C2.73478 12 2.48043 12.1054 2.29289 12.2929C2.10536 12.4804 2 12.7348 2 13V19C2 19.7957 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7957 22 19V13C22 12.7348 21.8946 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12Z" fill="currentColor"></path>
                                                            </svg>
                                                        </svg>
                                                        <p className="mb-1 text-sm text-gray-800 font-medium">
                                                            <span className="text-gray-500" data-config-id="auto-txt-11-3">Click to Upload a file</span>
                                                            <span data-config-id="auto-txt-12-3">or drag and drop</span>
                                                        </p>
                                                        <p className="text-xs text-gray-500 font-medium" data-config-id="auto-txt-13-3">PNG, JPG, GIF or up to 10MB</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                }
                                {selectedImage0 && (
                                    <img src={selectedImage0} alt="Uploaded" className=" h-60 rounded-2xl object-contain" />
                                )}
                                <input

                                    type="file"
                                    accept="image/*"
                                    className="opacity-0 w-full h-full absolute top-0 left-0 cursor-pointer"
                                    onChange={handleImageUpload0}

                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap pb-3 -m-3">
                            <div className="w-full p-3">
                                <p className="mb-1.5 font-medium text-base text-coolGray-800" data-config-id="auto-txt-3-3">Restaurant Name</p>
                                <input className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input" type="text" placeholder="food cart"
                                    {...register("res_name", {
                                        required: "*Restaurant name is Required",
                                    })} />
                                {errors.res_name?.type === "required" && (<p className='m-0 p-0 pl-1  text-base text-red-500 text-[9px]' role="alert">{errors.res_name.message}</p>)}

                            </div>



                            {/* email  */}
                            <div className="w-full md:w-1/2 p-3">
                                <p className="mb-1.5 font-medium text-base text-coolGray-800" data-config-id="auto-txt-5-3">Restaurant Email</p>
                                <input className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input" type="email" placeholder="alex@example.com"
                                    {...register("res_email", {
                                        required: "*E-mail is Required",

                                        validate: {
                                            notEmail: (value) => validateEmail(value)
                                        },
                                    })} />
                                {errors.res_email?.type === "required" && (<p className='m-0 p-0 pl-1  text-base text-red-500 text-[9px]' role="alert">{errors.res_email.message}</p>)}
                                {errors.res_email?.type === "notEmail" && (<p className='m-0 p-0 pl-1  text-base text-red-500 text-[9px]' role="alert">*Not an Email</p>)}

                            </div>

                            {/* phone  */}
                            <div className="w-full md:w-1/2 p-3">
                                <p className="mb-1.5 font-medium text-base text-coolGray-800" data-config-id="auto-txt-6-3">Restaurant Phone number</p>
                                <input className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input" type="tel" placeholder="01x xxx xxxx "
                                    {...register("res_mobile", {
                                        required: "*Contact number is Required",
                                        validate: {
                                            notPhone: (value) => validateMobileNumber(value)
                                        }
                                    })} />
                                {errors.res_mobile?.type === "required" && (<p className='m-0 p-0 pl-1  text-base text-red-500 text-[9px]' role="alert">{errors.res_mobile.message}</p>)}
                                {errors.res_mobile?.type === "notPhone" && (<p className='m-0 p-0 pl-1  text-base text-red-500 text-[9px]' role="alert">*Not a phone number</p>)}

                            </div>




                        </div>
                    </div>
                </div>


                {/*  contact  */}

                <div className="w-full  p-3">
                    <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
                        <p className="mb-1.5 text-[18px] font-semibold text-gray-900 text-coolGray-800" data-config-id="auto-txt-21-3">Owner Contact</p>
                        <div className="flex flex-wrap -m-3 mb-3">

                            {/*  Name */}
                            <div className="w-full p-3">
                                <label htmlFor="emergencyName" className="mb-1.5 font-medium text-base text-coolGray-800">
                                    Owner Name
                                </label>
                                <input
                                    {...register('res_Owner_Name', { required: 'Owner Name is required' })}
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                                    type="text"
                                    placeholder="Owner name"
                                />
                                {errors.res_Owner_Name && (
                                    <p className='m-0 p-0 pl-1 text-base text-red-500 text-[9px]' role="alert">
                                        {errors.res_Owner_Name.message}
                                    </p>
                                )}
                            </div>



                            {/* email  */}
                            <div className="w-full md:w-1/2 p-3">
                                <p className="mb-1.5 font-medium text-base text-coolGray-800" data-config-id="auto-txt-5-3">Owner Email</p>
                                <input className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input" type="email" placeholder="alex@example.com"
                                    {...register("res_Owner_email", {
                                        required: "*E-mail is Required",

                                        validate: {
                                            notEmail: (value) => validateEmail(value)
                                        },
                                    })} />
                                {errors.res_Owner_email?.type === "required" && (<p className='m-0 p-0 pl-1  text-base text-red-500 text-[9px]' role="alert">{errors.res_Owner_email.message}</p>)}
                                {errors.res_Owner_email?.type === "notEmail" && (<p className='m-0 p-0 pl-1  text-base text-red-500 text-[9px]' role="alert">*Not an Email</p>)}

                            </div>

                            {/* phone  */}
                            <div className="w-full md:w-1/2 p-3">
                                <p className="mb-1.5 font-medium text-base text-coolGray-800" data-config-id="auto-txt-6-3">Onwer Phone number</p>
                                <input className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input" type="tel" placeholder="01x xxx xxxx "
                                    {...register("res_Owner_mobile", {
                                        required: "*Contact number is Required",
                                        validate: {
                                            notPhone: (value) => validateMobileNumber(value)
                                        }
                                    })} />
                                {errors.res_Owner_mobile?.type === "required" && (<p className='m-0 p-0 pl-1  text-base text-red-500 text-[9px]' role="alert">{errors.res_Owner_mobile.message}</p>)}
                                {errors.res_Owner_mobile?.type === "notPhone" && (<p className='m-0 p-0 pl-1  text-base text-red-500 text-[9px]' role="alert">*Not a phone number</p>)}

                            </div>


                            <div className="w-full  p-3">
                                <label htmlFor="res_Owner_streetAddress" className="mb-1.5 font-medium text-base text-gray-800">
                                    Street Address
                                </label>
                                <input
                                    id="res_Owner_streetAddress"
                                    className="w-full px-4 py-2.5 text-base text-gray-900 font-normal outline-none focus:border-green-500 border border-gray-400/40 rounded-lg shadow-input"
                                    type="text"
                                    placeholder="Enter your street address"
                                    {...register('res_Owner_streetAddress', {
                                        required: '*Street Address is required',
                                    })}

                                />
                                {errors.res_Owner_streetAddress && (
                                    <p className='m-0 p-0 pl-1 text-base text-red-500 text-[9px]' role="alert">
                                        {errors.res_Owner_streetAddress.message}
                                    </p>
                                )}
                            </div>
                            {/* City/Town */}
                            <div className="w-full md:w-1/2 p-3">

                                <select

                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5"

                                    {...register('res_Owner_city', { required: 'City/Town is required' })}
                                    defaultValue=""
                                    onChange={(e) => { setValue(`res_Owner_city`, e.target.value); setValue(`res_Owner_stateProvince`, getProvinceOfSelectedCity(e.target.value)) }}

                                >
                                    <option value="" disabled>
                                        Select City / Town
                                    </option>

                                    {AllDistricts.map((item, _idx) => (
                                        <option key={item?.name} value={item?.name}>
                                            {item?.name}
                                        </option>
                                    ))}
                                </select>

                                {errors.res_Owner_city && (
                                    <p className='m-0 p-0 pl-1 text-base text-red-500 text-[9px]' role="alert">
                                        {errors.res_Owner_city.message}
                                    </p>
                                )}
                            </div>

                            {/* State / Province */}
                            <div className="w-full md:w-1/2 p-3">
                                <select

                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5"
                                    defaultValue=""
                                    {...register('res_Owner_stateProvince', { required: 'State / Province is required' })}

                                >
                                    <option value="" disabled>
                                        Select State / Province
                                    </option>

                                    {AllDivisions.map((item, _idx) => (
                                        <option key={item?.name} value={item?.name}>
                                            {item?.name}
                                        </option>
                                    ))}
                                </select>

                                {errors.res_Owner_stateProvince && (
                                    <p className='m-0 p-0 pl-1 text-base text-red-500 text-[9px]' role="alert">
                                        {errors.res_Owner_stateProvince.message}
                                    </p>
                                )}
                            </div>

                            {/* ZIP / Postal Code */}
                            <div className="w-full md:w-1/2 p-3">
                                <label htmlFor="res_Owner_postalCode" className="mb-1.5 font-medium text-base text-gray-800">
                                    ZIP / Postal code
                                </label>
                                <input
                                    {...register('res_Owner_postalCode', { required: 'ZIP / Postal code is required' })}
                                    className="w-full px-4 py-2.5 text-base text-gray-900 font-normal outline-none focus:border-green-500 border border-gray-400/40 rounded-lg shadow-input"
                                    type="text"
                                    placeholder="ZIP / Postal code"
                                />
                                {errors.res_Owner_postalCode && (
                                    <p className='m-0 p-0 pl-1 text-base text-red-500 text-[9px]' role="alert">
                                        {errors.res_Owner_postalCode.message}
                                    </p>
                                )}
                            </div>

                            {/* Country */}
                            <div className="w-full md:w-1/2 p-3">
                                <label htmlFor="res_Owner_country" className="mb-1.5 font-medium text-base text-gray-800">
                                    Country
                                </label>
                                <div className="relative">
                                    <svg className="absolute right-4 top-1/2 transhtmlForm -translate-y-1/2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-2-3">
                                        <path d="M11.3333 6.1133C11.2084 5.98913 11.0395 5.91943 10.8633 5.91943C10.6872 5.91943 10.5182 5.98913 10.3933 6.1133L8.00001 8.47329L5.64001 6.1133C5.5151 5.98913 5.34613 5.91943 5.17001 5.91943C4.99388 5.91943 4.82491 5.98913 4.70001 6.1133C4.63752 6.17527 4.58792 6.249 4.55408 6.33024C4.52023 6.41148 4.50281 6.49862 4.50281 6.58663C4.50281 6.67464 4.52023 6.76177 4.55408 6.84301C4.58792 6.92425 4.63752 6.99799 4.70001 7.05996L7.52667 9.88663C7.58865 9.94911 7.66238 9.99871 7.74362 10.0326C7.82486 10.0664 7.912 10.0838 8.00001 10.0838C8.08801 10.0838 8.17515 10.0664 8.25639 10.0326C8.33763 9.99871 8.41136 9.94911 8.47334 9.88663L11.3333 7.05996C11.3958 6.99799 11.4454 6.92425 11.4793 6.84301C11.5131 6.76177 11.5305 6.67464 11.5305 6.58663C11.5305 6.49862 11.5131 6.41148 11.4793 6.33024C11.4454 6.249 11.3958 6.17527 11.3333 6.1133Z" fill="#8896AB"></path>
                                    </svg>
                                    <select
                                        defaultValue="Bangladesh"
                                        {...register('res_Owner_country', { required: 'Country is required' })}
                                        className="appearance-none w-full py-2.5 px-4 text-gray-900 text-base font-normal bg-white border outline-none border-gray-400/40 hover:border-green-500 rounded-lg shadow-input"
                                    >
                                        <option value="" disabled>Select Country</option>
                                        {
                                            countries.map(i => <option key={i?.alpha_3_code} value={i?.en_short_name}>{i.en_short_name}</option>)
                                        }
                                    </select>
                                </div>
                                {errors.res_Owner_country && (
                                    <p className='m-0 p-0 pl-1 text-base text-red-500 text-[9px]' role="alert">
                                        {errors.res_Owner_country.message}
                                    </p>
                                )}
                            </div>



                        </div>
                    </div>

                </div>



                {/* address of restaurant */}
                <div className="w-full p-3">
                    <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
                        <p className="mb-1.5 text-[18px] font-semibold text-gray-900 text-coolGray-800" data-config-id="auto-txt-21-3">Branch Addresses</p>
                        {
                            <div key={0} className="flex flex-wrap -m-3 mb-5">
                                {/* <div className="inline-flex items-center justify-center w-full">
                                    <hr className="w-64 md:w-80 h-1 my-8 bg-gray-200 border-0 rounded " />
                                    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 font-semibold font-mono">
                                        Branch No : {0 + 1}
                                    </div>
                                </div> */}

                                <div className="w-full  p-3">
                                    <label htmlFor={`branches[${0}].name`} className="mb-1.5 font-medium text-base text-coolGray-800">
                                        Branch Name
                                    </label>
                                    <input
                                        {...register(`branches[${0}].name`, { required: 'Branch Name is required' })}
                                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                                        type="text"
                                        placeholder="Enter branch name"
                                    />
                                    {errors.branches && errors.branches[0]?.name && (
                                        <p className='m-0 p-0 pl-1 text-base text-red-500 text-[9px]' role="alert">
                                            {errors.branches[0].name?.message}
                                        </p>
                                    )}
                                </div>
                                <div className="w-full p-3">
                                    <label htmlFor={`branches[${0}].streetAddress`} className="mb-1.5 font-medium text-base text-coolGray-800">
                                        Street Address
                                    </label>
                                    <input
                                        id={`branches[${0}].streetAddress`}
                                        {...register(`branches[${0}].streetAddress`, {
                                            required: '*Street Address is required',
                                        })}
                                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                                        type="text"
                                        placeholder="Enter your street address"
                                    />
                                    {errors.branches && errors.branches[0]?.streetAddress && (
                                        <p className='m-0 p-0 pl-1 text-base text-red-500 text-[9px]' role="alert">
                                            {errors.branches[0].streetAddress.message}
                                        </p>
                                    )}
                                </div>


                                <div className="w-full md:w-1/2 p-3">
                                    <label htmlFor={`branches[${0}].city`} className="mb-1.5 font-medium text-base text-coolGray-800">
                                        City/Town
                                    </label>
                                    <select

                                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5"

                                        defaultValue=""
                                        {...register(`branches[${0}].city`, { required: 'City/Town is required' })}
                                        onChange={(e) => { setValue(`branches[${0}].city`, e.target.value); setValue(`branches[${0}].stateProvince`, getProvinceOfSelectedCity(e.target.value)) }}
                                    >
                                        <option value="" disabled>
                                            Select City
                                        </option>

                                        {AllDistricts.map((item, _idx) => (
                                            <option key={item?.name} value={item?.name}>
                                                {item?.name}
                                            </option>
                                        ))}
                                    </select>

                                    {errors.branches && errors.branches[0]?.city && (
                                        <p className='m-0 p-0 pl-1 text-base text-red-500 text-[9px]' role="alert">
                                            {errors.branches[0].city.message}
                                        </p>
                                    )}
                                </div>


                                <div className="w-full md:w-1/2 p-3">
                                    <label htmlFor={`branches[${0}].city`} className="mb-1.5 font-medium text-base text-coolGray-800">
                                        State / Province
                                    </label>
                                    <select
                                        label="Select Dish Category"
                                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5"

                                        defaultValue=""
                                        {...register(`branches[${0}].stateProvince`, { required: 'State / Province is required' })}
                                    >
                                        <option value="" disabled>
                                            Select Province / State
                                        </option>

                                        {AllDivisions.map((item, _idx) => (
                                            <option key={item?.name} value={item?.name}>
                                                {item?.name}
                                            </option>
                                        ))}
                                    </select>


                                    {errors.branches && errors.branches[0]?.stateProvince && (
                                        <p className='m-0 p-0 pl-1 text-base text-red-500 text-[9px]' role="alert">
                                            {errors.branches[0].stateProvince.message}
                                        </p>
                                    )}
                                </div>

                                <div className="w-full md:w-1/2 p-3">
                                    <label htmlFor={`branches[${0}].postalCode`} className="mb-1.5 font-medium text-base text-coolGray-800">
                                        ZIP / Postal code
                                    </label>
                                    <input
                                        {...register(`branches[${0}].postalCode`, { required: 'ZIP / Postal code is required' })}
                                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                                        type="text"
                                        placeholder="ZIP / Postal code"
                                    />
                                    {errors.branches && errors.branches[0]?.postalCode && (
                                        <p className='m-0 p-0 pl-1 text-base text-red-500 text-[9px]' role="alert">
                                            {errors.branches[0].postalCode.message}
                                        </p>
                                    )}
                                </div>


                                <div className="w-full md:w-1/2 p-3">
                                    <label htmlFor={`branches[${0}].country`} className="mb-1.5 font-medium text-base text-coolGray-800">
                                        Country
                                    </label>
                                    <div className="relative">
                                        <svg className="absolute right-4 top-1/2 transhtmlForm -translate-y-1/2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-2-3">
                                            <path d="M11.3333 6.1133C11.2084 5.98913 11.0395 5.91943 10.8633 5.91943C10.6872 5.91943 10.5182 5.98913 10.3933 6.1133L8.00001 8.47329L5.64001 6.1133C5.5151 5.98913 5.34613 5.91943 5.17001 5.91943C4.99388 5.91943 4.82491 5.98913 4.70001 6.1133C4.63752 6.17527 4.58792 6.249 4.55408 6.33024C4.52023 6.41148 4.50281 6.49862 4.50281 6.58663C4.50281 6.67464 4.52023 6.76177 4.55408 6.84301C4.58792 6.92425 4.63752 6.99799 4.70001 7.05996L7.52667 9.88663C7.58865 9.94911 7.66238 9.99871 7.74362 10.0326C7.82486 10.0664 7.912 10.0838 8.00001 10.0838C8.08801 10.0838 8.17515 10.0664 8.25639 10.0326C8.33763 9.99871 8.41136 9.94911 8.47334 9.88663L11.3333 7.05996C11.3958 6.99799 11.4454 6.92425 11.4793 6.84301C11.5131 6.76177 11.5305 6.67464 11.5305 6.58663C11.5305 6.49862 11.5131 6.41148 11.4793 6.33024C11.4454 6.249 11.3958 6.17527 11.3333 6.1133Z" fill="#8896AB"></path>
                                        </svg>
                                        <select
                                            {...register(`branches[${0}].country`, { required: 'Country is required' })}
                                            defaultValue="Bangladesh"
                                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg appearance-none"
                                        >
                                            <option value="" disabled>Select Country</option>
                                            {countries.map((country, i) => (
                                                <option key={i + 0} value={country?.en_short_name} className='text-black'>
                                                    {country?.en_short_name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {errors.branches && errors.branches[0]?.country && (
                                        <p className='m-0 p-0 pl-1 text-base text-red-500 text-[9px]' role="alert">
                                            {errors.branches[0].country.message}
                                        </p>
                                    )}


                                </div>






                                {/* <div className='w-full flex flex-wrap justify-end items-center gap-2'>
                                    <button
                                        type="button"
                                        onClick={() => remove(index)}
                                        className="flex-shrink-0 px-4 py-2 bg-red-500 hover:bg-red-600 font-medium text-sm text-white border border-red-500 rounded-md shadow-button"
                                    >
                                        Remove Branch
                                    </button>

                                </div> */}

                            </div>
                        }


                        {/* <div className='w-full flex flex-wrap justify-start items-center gap-2'>
                            <button
                                type="button"
                                onClick={() => append({})}
                                className="flex-shrink-0 px-4 py-2 bg-green-500 hover:bg-green-600 font-medium text-sm text-white border border-green-500 rounded-md shadow-button"
                            >
                                Add Branch
                            </button>
                        </div> */}
                    </div>

                    <div className="flex items-start mb-5 mt-2 pl-2">
                        <div className="flex items-center h-5">
                            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="/privacy-policy" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                    </div>

                    <div className='my-4 w-full flex flex-wrap justify-center items-center gap-2'>
                        <button
                            type='submit' className="flex flex-wrap justify-center  px-4 py-2 bg-green-500 hover:bg-green-600 font-medium text-sm text-white border border-green-500 rounded-md shadow-button">
                            <p data-config-id="auto-txt-22-3">Submit</p>
                        </button>
                    </div>
                </div>






            </form >
        </>
    );
};


export default AddRestaurant;