import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const Faq = () => {
    return (
        <div className="space-y-4 max-w-screen-xl mx-auto mb-6 select-none">
            <SectionTitle h1='Frequently Asked Questions' padding='mt-7 pb-10' />
            <div>
                <details
                    className="group bg-gray-100 p-6 [&_summary::-webkit-details-marker]:hidden rounded-md"
                    open
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-semibold" data-config-id="auto-txt-5-3">What is a Restaurant Management System?</h2>

                        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        A restaurant management system is software designed to streamline various aspects of running a restaurant, including order management, inventory tracking, table reservations, menu updates, billing, employee management, reporting, and customer relationship management. It helps restaurants operate more efficiently and provide better service to customers.
                    </p>
                </details>

                <details
                    className="group bg-gray-100 p-6 [&_summary::-webkit-details-marker]:hidden rounded-md"
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-semibold" data-config-id="auto-txt-5-3">What steps do I need to take to join?</h2>

                        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        <div>
                            {/* Step 1: Fill out the registration form */}
                            <p>Fill out the registration form located at <Link to='/registration-form' className='text-blue-400 cursor-pointer'><code>Registration Form</code></Link>.</p>

                            {/* Step 2: Select a package */}
                            <p>Select a package that suits your needs.</p>

                            {/* Step 3: Proceed to payment */}
                            <p>Proceed to payment to complete the registration process.</p>

                            {/* Step 4: Start using the services */}
                            <p>Once payment is confirmed, you can start using the services or benefits associated with the selected package.</p>
                        </div>

                    </p>
                </details>
                <details
                    className="group bg-gray-100 p-6 [&_summary::-webkit-details-marker]:hidden rounded-md"
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-semibold" data-config-id="auto-txt-5-3">Why you should choose Foodie ?</h2>

                        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        <div>
                            <p>Foodie is our restaurant management system (RMS) designed to provide a user-friendly experience. It includes a QR-based ordering system for both on-site and off-site orders.</p>
                            <p>With Foodie, users can easily navigate through the restaurant&#39;s site, place orders seamlessly, and enjoy an intuitive user interface.</p>
                            <p>Foodie aims to streamline restaurant operations, making it convenient for both restaurant owners and customers to manage orders and enjoy a smooth dining experience.</p>
                        </div>

                    </p>
                </details>
            </div>
        </div>
    );
};

export default Faq;