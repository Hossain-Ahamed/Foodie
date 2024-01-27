import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { FaKey } from "react-icons/fa6";
import toast from "react-hot-toast";
import { MailIcon } from "./MailIcon";
import { LockIcon } from "./LockIcon";
// import ToasterProvider from "../Toastprovider/ToastProvider";
export default function ChangePasswordModal({ userEmail }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isFormValid, setFormValid] = useState(false);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const onSubmit = (data) => {
        const isValid = data.email && data.password && data.confirmPass;
        setFormValid(isValid)
        verifyEmailPassword(data.email, data.password, data.confirmPass)
    }

    const verifyEmailPassword = (email, password, confirmPass) => {
        if (userEmail === email) {
            if (password === confirmPass) {
                toast.success('Password changed successfully.')
            } else {
                toast.error("Password did'nt matched, Try again.")
            }
        } else {
            toast.error('Failed to change password.')
        }
    }
    const onClose = () => {
        // Only close the modal if the form is valid
        if (isFormValid) {
            onOpenChange(false);
        }
    };
    return (
        <>
            <Button onPress={onOpen}>Change Password</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col md:flex-row items-center gap-1">Change Password <FaKey /></ModalHeader>
                            <ModalBody>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Input
                                        autoFocus
                                        endContent={
                                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                        label="Email"
                                        placeholder="Enter your email"
                                        variant="bordered"
                                        {...register("email", {
                                            required: "*Email is Required",
                                        })}
                                    />
                                    {errors.email?.type === "required" && (<p className='m-0 p-0 text-base text-red-500 text-[9px]' role="alert">{errors.email.message}</p>)}
                                    <Input
                                        endContent={
                                            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                        label="Password"
                                        placeholder="Enter your password"
                                        type="password"
                                        variant="bordered"
                                        {...register("password", {
                                            required: "*Password is Required",
                                        })}
                                        className="mt-4"
                                    />
                                    {errors.password?.type === "required" && (<p className='m-0 p-0 text-base text-red-500 text-[9px]' role="alert">{errors.password.message}</p>)}
                                    <Input
                                        endContent={
                                            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                        label="Confirm Password"
                                        placeholder="Enter your password"
                                        type="password"
                                        variant="bordered"
                                        {...register("confirmPass", {
                                            required: "*Confirm Password is Required",
                                        })}
                                        className="mt-4"
                                    />
                                    {errors.confirmPass?.type === "required" && (<p className='m-0 p-0 text-base text-red-500 text-[9px]' role="alert">{errors.confirmPass.message}</p>)}
                                    <ModalFooter>
                                        <Button color="danger" variant="flat" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button type="submit" color="primary" onPress={onClose}>
                                            Confirm
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
