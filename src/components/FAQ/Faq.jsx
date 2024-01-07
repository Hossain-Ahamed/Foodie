import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                        recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
                        consequuntur distinctio corporis earum similique!
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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                        recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
                        consequuntur distinctio corporis earum similique!
                    </p>
                </details>
            </div>
        </div>
    );
};

export default Faq;