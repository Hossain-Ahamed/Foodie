import { useFieldArray, useForm } from "react-hook-form";
import { getAllDistricts, getCountries, getDivisions, getProvinceOfSelectedCity, validateEmail, validateMobileNumber } from "../../../assets/scripts/Utility";
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import LoadingPage from "../../Shared/LoadingPages/LoadingPage/LoadingPage";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import SetTitle from "../../Shared/SetTtitle/SetTitle";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const RestaurantDetailForDev = () => {
    const AllDistricts = getAllDistricts();
    const AllDivisions = getDivisions();

    const countries = getCountries();

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

    // fetch data 
    const axiosSecure = useAxiosSecure();
    const { res_id } = useParams();

    const { refetch: dataRefetch, data: data = {}, isLoading: dataLoading, error: dataError } = useQuery({
        queryKey: ['restaurantData', res_id],
        enabled: true,
        queryFn: async () => {


            let res = await axiosSecure.get(`/edit-restaurant/${res_id}`);


            res = {
                data: {

                    "_id": "87342fdjskllf",
                    "res_name": "Fuoco",
                    "res_email": "hossainahamed6872@gmail.com",
                    "res_mobile": "01868726172",
                    "res_Owner_Name": "Hossain",
                    "res_Owner_email": "hossainahamed6872@gmail.com",
                    "res_Owner_mobile": "01868726172",
                    "res_Owner_streetAddress": "J A M T O L A",
                    "res_Owner_city": "Narayanganj",
                    "res_Owner_stateProvince": "Dhaka",
                    "res_Owner_postalCode": "1400",
                    "res_Owner_country": "Bangladesh",
                    "branches": [{
                        "branch_name": "Fouco Update",
                        "streetAddress": "Jamtola",
                        "city": "Mymensingh",
                        "stateProvince": "Dhaka",
                        "postalCode": "1440",
                        "country": "Bangladesh",
                        "branchID": "q-Naynabad-f-Bangladesh-1440-1705850705607"
                    },],



                    "img": "https://lh3.googleusercontent.com/a/ACg8ocKjKSD7xxcI8hEoNgPnsxZ632hSVJFspYJNcAAmPKc39g=s360-c-no",

                }
            }
            const data = res.data;


            setValue('res_name', data?.res_name);
            setValue('res_email', data?.res_email);
            setValue('res_mobile', data?.res_mobile);
            setValue('res_Owner_Name', data?.res_Owner_Name);
            setValue('res_Owner_email', data?.res_Owner_email);
            setValue('res_Owner_mobile', data?.res_Owner_mobile);
            setValue('res_Owner_streetAddress', data?.res_Owner_streetAddress);
            setValue('res_Owner_city', data?.res_Owner_city);
            setValue('res_Owner_stateProvince', data?.res_Owner_stateProvince);
            setValue('res_Owner_postalCode', data?.res_Owner_postalCode);
            setValue('res_Owner_country', data?.res_Owner_country);
            setValue('img', data?.img);


            setValue('branches', data?.branches);
            setSelectedImage0(data?.img);

            return res?.data;
        },

    });


    const onSubmit = (data) => {

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

        console.log(data)
        // navigate('/payment?id=43875734', { replace: true })

    };





    if (dataLoading) {
        return <LoadingPage />
    }
    if (dataError) {
        return <ErrorPage />
    }
    return (
        <>
            <SetTitle title="Restaurant Detail Form" />
            <form onSubmit={handleSubmit(onSubmit)} className='max-w-7xl mx-auto flex flex-col items-center py-12 select-none '>
                <SectionTitle h1={`Restaurant Data`} />

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

                        <div className="flex flex-wrap pb-3 mt-3">
                            <div className="w-full md:w-1/2 p-3">
                                <p className="mb-1.5 font-medium text-base text-coolGray-800" data-config-id="auto-txt-3-3">Restaurant Name</p>
                                <input className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input" type="text" placeholder="food cart"
                                    {...register("res_name", {
                                        required: "*Restaurant name is Required",
                                    })} />
                                {errors.res_name?.type === "required" && (<p className='m-0 p-0 pl-1  text-base text-red-500 text-[9px]' role="alert">{errors.res_name.message}</p>)}

                            </div>

                            <div className="w-full md:w-1/2 p-3">
                                <p className="mb-1.5 font-medium text-base text-coolGray-800" data-config-id="auto-txt-3-3">Restaurant ID</p>
                                <input className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input disabled:cursor-not-allowed " type="text" placeholder="food cart"
                                    defaultValue={data?._id} disabled />

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
                                    onChange={(e) => { setValue(`res_Owner_stateProvince`, getProvinceOfSelectedCity(e.target.value)) }}

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

                                    {...register('res_Owner_stateProvince', { required: 'State / Province is required' })}
                                    onChange={(e) => { setValue(`res_Owner_stateProvince`, getProvinceOfSelectedCity(e.target.value)) }}

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
                                        defaultValue=""
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
                        <div className='w-full flex flex-wrap justify-between items-center'>
                            <div>

                                <p className="mb-1.5 text-[18px] font-semibold  text-gray-800" data-config-id="auto-txt-21-3">Branch Addresses</p>
                            </div>

                        </div>
                        {fields.map((branch, index) => (
                            <div key={index} className="flex flex-wrap -m-3 mb-5">



                                {/* Street Address */}
                                <div className="w-full p-3">
                                    <label htmlFor={`branches[${index}].streetAddress`} className="mb-1.5 font-medium text-base text-coolGray-800">
                                        Street Address
                                    </label>
                                    <input
                                        id={`branches[${index}].streetAddress`}
                                        {...register(`branches[${index}].streetAddress`, {
                                            required: '*Street Address is required',
                                        })}
                                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                                        type="text"
                                        placeholder="Enter your street address"
                                    />
                                    {errors.branches && errors.branches[index]?.streetAddress && (
                                        <p className='m-0 p-0 pl-1 text-base text-red-500 text-[9px]' role="alert">
                                            {errors.branches[index].streetAddress.message}
                                        </p>
                                    )}
                                </div>

                                {/* City/Town */}
                                <div className="w-full md:w-1/2 p-3">
                                    <label htmlFor={`branches[${index}].city`} className="mb-1.5 font-medium text-base text-coolGray-800">
                                        City/Town
                                    </label>
                                    <select

                                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5"

                                        defaultValue={`branches[${index}].city`}
                                        {...register(`branches[${index}].city`, { required: 'City/Town is required' })}
                                        onChange={(e) => { setValue(`branches[${index}].stateProvince`, getProvinceOfSelectedCity(e.target.value)) }}
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

                                    {errors.branches && errors.branches[index]?.city && (
                                        <p className='m-0 p-0 pl-1 text-base text-red-500 text-[9px]' role="alert">
                                            {errors.branches[index].city.message}
                                        </p>
                                    )}
                                </div>

                                {/* State / Province */}
                                <div className="w-full md:w-1/2 p-3">
                                    <label htmlFor={`branches[${index}].stateProvince`} className="mb-1.5 font-medium text-base text-coolGray-800">
                                        State / Province
                                    </label>
                                    <select

                                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5"

                                        defaultValue={`branches[${index}].stateProvince`}
                                        {...register(`branches[${index}].stateProvince`, { required: 'State / Province is required' })}
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


                                    {errors.branches && errors.branches[index]?.stateProvince && (
                                        <p className='m-0 p-0 pl-1 text-base text-red-500 text-[9px]' role="alert">
                                            {errors.branches[index].stateProvince.message}
                                        </p>
                                    )}
                                </div>

                                {/* ZIP / Postal Code */}
                                <div className="w-full md:w-1/2 p-3">
                                    <label htmlFor={`branches[${index}].postalCode`} className="mb-1.5 font-medium text-base text-coolGray-800">
                                        ZIP / Postal code
                                    </label>
                                    <input
                                        {...register(`branches[${index}].postalCode`, { required: 'ZIP / Postal code is required' })}
                                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                                        type="text"
                                        placeholder="ZIP / Postal code"
                                    />
                                    {errors.branches && errors.branches[index]?.postalCode && (
                                        <p className='m-0 p-0 pl-1 text-base text-red-500 text-[9px]' role="alert">
                                            {errors.branches[index].postalCode.message}
                                        </p>
                                    )}
                                </div>

                                {/* Country */}
                                <div className="w-full md:w-1/2 p-3">
                                    <label htmlFor={`branches[${index}].country`} className="mb-1.5 font-medium text-base text-coolGray-800">
                                        Country
                                    </label>
                                    <div className="relative">
                                        <svg className="absolute right-4 top-1/2 transhtmlForm -translate-y-1/2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-2-3">
                                            <path d="M11.3333 6.1133C11.2084 5.98913 11.0395 5.91943 10.8633 5.91943C10.6872 5.91943 10.5182 5.98913 10.3933 6.1133L8.00001 8.47329L5.64001 6.1133C5.5151 5.98913 5.34613 5.91943 5.17001 5.91943C4.99388 5.91943 4.82491 5.98913 4.70001 6.1133C4.63752 6.17527 4.58792 6.249 4.55408 6.33024C4.52023 6.41148 4.50281 6.49862 4.50281 6.58663C4.50281 6.67464 4.52023 6.76177 4.55408 6.84301C4.58792 6.92425 4.63752 6.99799 4.70001 7.05996L7.52667 9.88663C7.58865 9.94911 7.66238 9.99871 7.74362 10.0326C7.82486 10.0664 7.912 10.0838 8.00001 10.0838C8.08801 10.0838 8.17515 10.0664 8.25639 10.0326C8.33763 9.99871 8.41136 9.94911 8.47334 9.88663L11.3333 7.05996C11.3958 6.99799 11.4454 6.92425 11.4793 6.84301C11.5131 6.76177 11.5305 6.67464 11.5305 6.58663C11.5305 6.49862 11.5131 6.41148 11.4793 6.33024C11.4454 6.249 11.3958 6.17527 11.3333 6.1133Z" fill="#8896AB"></path>
                                        </svg>
                                        <select
                                            {...register(`branches[${index}].country`, { required: 'Country is required' })}

                                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg appearance-none"
                                        >
                                            <option value="" disabled>Select Country</option>
                                            {countries.map((country, i) => (
                                                <option key={i + index} value={country?.en_short_name} className='text-black'>
                                                    {country?.en_short_name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {errors.branches && errors.branches[index]?.country && (
                                        <p className='m-0 p-0 pl-1 text-base text-red-500 text-[9px]' role="alert">
                                            {errors.branches[index].country.message}
                                        </p>
                                    )}
                                </div>
                                <div className="w-full md:w-1/2 p-3">
                                    <label htmlFor={`branches[${index}].branch_name`} className="mb-1.5 font-medium text-base text-coolGray-800">
                                        Branch Name
                                    </label>
                                    <input
                                        {...register(`branches[${index}].branch_name`, { required: 'Branch Name is required' })}
                                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                                        type="text"
                                        placeholder="Enter branch name"
                                    />
                                    {errors.branches && errors.branches[index]?.branch_name && (
                                        <p className='m-0 p-0 pl-1 text-base text-red-500 text-[9px]' role="alert">
                                            {errors.branches[index].branch_name?.message}
                                        </p>
                                    )}
                                </div>

                                {/* Branch ID */}
                                <div className="w-full md:w-1/2 p-3 relative">
                                    <label htmlFor={`branches[${index}].branchID`} className="mb-1.5 font-medium text-base text-coolGray-800">
                                        Branch ID
                                    </label>
                                    <input
                                        {...register(`branches[${index}].branchID`, { required: 'branch ID is required', },)}
                                        className="read-only:cursor-not-allowed w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                                        type="text"
                                        placeholder="Branch ID"
                                        readOnly
                                    />

                                    {errors.branches && errors.branches[index]?.branchID && (
                                        <p className='m-0 p-0 pl-1 text-base text-red-500 text-[9px]' role="alert">
                                            {errors.branches[index].branchID.message}
                                        </p>
                                    )}
                                </div>



                            </div>
                        ))}


                    </div>


                    <div className='my-4 w-full flex flex-wrap justify-center items-center gap-2'>
                        <button
                            type='submit' className="flex flex-wrap justify-center  px-4 py-2 bg-green-500 hover:bg-green-600 font-medium text-sm text-white border border-green-500 rounded-md shadow-button">
                            <p data-config-id="auto-txt-22-3">Update</p>
                        </button>
                    </div>
                </div>






            </form >
        </>
    );
};


export default RestaurantDetailForDev;