import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload } from '@fortawesome/free-solid-svg-icons';


export default function Adj() {
  return (
    <div className="bg-gray-200 second_content ml-3 mt-3 mr-3 p-3 rounded-md w-[80%] h-full">
      <div className="content">
        <h3 className="text-start mb-4 font-semibold text-sky-800">Adjustments</h3>
        <div className="sales-section grid grid-cols-6 gap-2">
          <main className="col-span-6 md:col-span-2 bg-white p-4 rounded-md shadow-md">
            <p className="flex justify-end items-center ">
              <FontAwesomeIcon className='mr-3 mb-2 text-gray-500 w-[22px] h-[22px]' icon={faDownload} />
            </p>
            <h2 className="text-lg text-start font-semibold mb-2">18/01/2025</h2>
            <div className="sales-info flex justify-between">
              <p className="text-gray-700">Total Sales:</p>
              <span className="font-bold text-green-600">$5,200</span>
            </div>
            <div className="sales-info flex justify-between">
              <p className="text-gray-700">Tasks Sold:</p>
              <span className="font-bold text-sky-900">120</span>
            </div>
          </main>

          
        </div>
      </div>
    </div>
  )
}
