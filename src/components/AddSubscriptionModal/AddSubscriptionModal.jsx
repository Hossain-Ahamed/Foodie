import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import edit from '../../assets/images/Home/edit.svg';
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { SwalErrorShow } from "../../assets/scripts/Utility";
import { FaPlus } from "react-icons/fa6";
export default function AddSubscriptionModal({ refetch }) {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { handleSubmit, register, setValue, formState: { errors}, resetField } = useForm();
    const axiosSecure = useAxiosSecure();

    const onSubmit = (data) => {
        // edit request for package data
        axiosSecure.post(`/add-subscription-packages/`, data)
        .then(data => {
            toast.success('successfully created');
            refetch();
            resetField("packageType")
            resetField("duration")
            resetField("finalPrice")
            resetField("cutPrice")
            resetField("shortDescription")
            onOpenChange()
        })
        .catch(err => {
            SwalErrorShow(err)
        })
    }

    return (
        <>
            <button className="bg-green-400 rounded-lg text-white p-3 flex items-center gap-1 text-xl font-medium" onClick={onOpen}> <FaPlus /> Subscription Packages</button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Subscription Packages</ModalHeader>
                            <ModalBody>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="w-full p-1">
                                        <p className="mb-1.5 font-medium text-base text-coolGray-800" data-config-id="auto-txt-3-3">Package Type</p>
                                        <input className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input" type="text"
                                            {...register("packageType", {
                                                required: "*Package Type is Required",
                                            })} />
                                        {errors.packageType?.type === "required" && (<p className='m-0 p-0 pl-1  text-base text-red-500 text-[9px]' role="alert">{errors.packageType.message}</p>)}

                                    </div>
                                    <div className="w-full p-1">
                                        <p className="mb-1.5 font-medium text-base text-coolGray-800" data-config-id="auto-txt-3-3">Package Duration</p>
                                        <input className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input" type="number"
                                            {...register("duration", {
                                                required: "*Package Durarion is Required",
                                                validate: {
                                                    isNumber: (value) => !isNaN(value)
                                                },
                                            })}
                                            onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })} />
                                        {errors.duration?.type === "required" && (<p className='m-0 p-0 pl-1  text-base text-red-500 text-[9px]' role="alert">{errors.duration.message}</p>)}
                                        {errors.duration?.type === "isNumber" && (<p className='m-0 p-0 pl-1  text-base text-red-500 text-[9px]' role="alert">*is not a number</p>)}
                                    </div>
                                    <div className="w-full p-1">
                                        <p className="mb-1.5 font-medium text-base text-coolGray-800" data-config-id="auto-txt-3-3">Final Price</p>
                                        <input className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input" type="number"
                                            {...register("finalPrice", {
                                                required: "*Final Price is Required",
                                                validate: {
                                                    isNumber: (value) => !isNaN(value)
                                                },
                                            })}
                                            onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })} />
                                        {errors.finalPrice?.type === "required" && (<p className='m-0 p-0 pl-1  text-base text-red-500 text-[9px]' role="alert">{errors.finalPrice.message}</p>)}
                                        {errors.finalPrice?.type === "isNumber" && (<p className='m-0 p-0 pl-1  text-base text-red-500 text-[9px]' role="alert">*is not a number</p>)}
                                    </div>
                                    <div className="w-full p-1">
                                        <p className="mb-1.5 font-medium text-base text-coolGray-800" data-config-id="auto-txt-3-3">Cut Price</p>
                                        <input className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input" type="number"

                                            {...register("cutPrice", {
                                                validate: {
                                                    isNumber: (value) => !isNaN(value)
                                                },
                                            })}
                                            onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })} />
                                        {errors.cutPrice?.type === "required" && (<p className='m-0 p-0 pl-1  text-base text-red-500 text-[9px]' role="alert">{errors.cutPrice.message}</p>)}
                                        {errors.cutPrice?.type === "isNumber" && (<p className='m-0 p-0 pl-1  text-base text-red-500 text-[9px]' role="alert">*is not a number</p>)}
                                    </div>
                                    <div className="w-full p-1">
                                        <p className="mb-1.5 font-medium text-base text-gray-800" data-config-id="auto-txt-3-3">Short Description</p>
                                        <textarea
                                            {...register('shortDescription', {
                                                required: "*Short Description is required"
                                            })}
                                            className="block w-full h-32 p-4 text-base text-gray-900 font-normal outline-none focus:border-green-500 border border-gray-400/40 rounded-lg shadow-input resize-none"
                                        ></textarea>
                                        {errors.shortDescription?.type === "required" && (<p className='m-0 p-0 pl-1  text-base text-red-500 text-[9px]' role="alert">{errors.shortDescription.message}</p>)}
                                    </div>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button type="submit" color="primary">
                                            Save
                                        </Button>
                                    </ModalFooter>
                                </form>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
