'use client'
import React, { useState } from 'react'
import { data } from '@/components/data'
import { usePathname } from 'next/navigation';
export default function CastomdataTable() {
    const PageCize = 20;
    const [carrentPage, setCarrentPage] = useState(1);
    const endIndex = 5 * carrentPage;
    const startIndex = endIndex - 5;
    const currentlyDispalyedData = data.slice(startIndex, endIndex);

    return (
        <div className='mb-10'>
            <h1 className='text-xl font-bold mb-2'>Recent Order</h1>
            <div className="relative overflow-x-auto rounded-md">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 !z-10 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-accent dark:text-white">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                fIRST nAME
                            </th>
                            <th scope="col" className="px-6 py-3">
                                lAST nAME
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                gender
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentlyDispalyedData.map((prodact) => {
                            return (
                                <tr key={prodact.id} className="bg-white border-b dark:bg-section dark:border-body hover:bg-sidebar dark:hover:bg-sidebar">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {prodact.id}
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {prodact.first_name}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {prodact.last_name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {prodact.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {prodact.gender}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
                <nav className="flex pb-5 xl:pb-0 items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 dark:text-white">{startIndex + 1} - {endIndex}</span> of <span className="font-semibold text-gray-900 dark:text-white">{PageCize}</span></span>
                    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                        <li>
                            <button onClick={() => setCarrentPage(carrentPage !== 1 ? carrentPage - 1 : carrentPage)} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-section border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-body dark:hover:text-white">Prev</button>
                        </li>
                        <li>
                            <button onClick={() => setCarrentPage(endIndex !== PageCize ? carrentPage + 1 : carrentPage)} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-section border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-body dark:hover:text-white">Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div >
    )
}
