import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import React from 'react';
import { EyeIcon } from './EyeIcon';
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import T_Order_History from "./T_Order_History";
import T_TransactionHistory from "./T_TransactionHistory";

const TransactionHistoryView = ({ item }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <Button className='bg-transparent text-2xl' title='view' onPress={onOpen}>
                <EyeIcon />
            </Button>


            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="auto">
                <ModalContent className='h-fit max-h-[85vh]  overflow-scroll pt-0 mx-0 px-0 scrollbar-hide'>
                    {(onClose) => (
                        <>
                            <ModalHeader className="text-blue-500 flex justify-center">Transaction History</ModalHeader>
                            <div className="px-2 flex w-full flex-col">
                                <Tabs aria-label="Dynamic tabs" fullWidth>

                                    <Tab title='Order History'>
                                        <T_Order_History arrayData={item?.billHistory} />
                                    </Tab>
                                    <Tab title='Payment History'>
                                        <T_TransactionHistory arrayData={item?.paidToRestaurant} />
                                    </Tab>


                                </Tabs>
                            </div>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>
    );
};

export default TransactionHistoryView;