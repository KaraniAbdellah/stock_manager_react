import React, {useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


export default function Sales(width) {
      useEffect(() => {
          if (width && window.innerWidth <= 1200) {
              const second_content = document.querySelector(".second_content");
              second_content.classList.add("setWidth");
          }
      }, []);

  return (
    <div className="bg-gray-200 second_content ml-3 mt-3 mr-3 p-3 rounded-md w-[80%] h-full">
      <div className="content">
        <h3 className="text-start mb-4 font-semibold text-sky-800">Sales</h3>
        <div className="sales-section grid grid-cols-6 gap-2">
          <main className="col-span-6 md:col-span-2 bg-white p-4 rounded-md shadow-md">
            <p className="flex justify-end items-center ">
              <FontAwesomeIcon className='cursor-pointer mr-3 mb-2 text-gray-500 w-[22px] h-[22px]' icon={faDownload} />
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
          <main className="col-span-6 md:col-span-2 bg-white p-4 rounded-md shadow-md">
            <p className="flex justify-end items-center ">
              <FontAwesomeIcon className='cursor-pointer mr-3 mb-2 text-gray-500 w-[22px] h-[22px]' icon={faDownload} />
            </p>
            <h2 className="text-lg text-start font-semibold mb-2">18/12/2024</h2>
            <div className="sales-info flex justify-between">
              <p className="text-gray-700">Total Sales:</p>
              <span className="font-bold text-green-600">$4,200</span>
            </div>
            <div className="sales-info flex justify-between">
              <p className="text-gray-700">Tasks Sold:</p>
              <span className="font-bold text-sky-900">190</span>
            </div>
          </main>          <main className="col-span-6 md:col-span-2 bg-white p-4 rounded-md shadow-md">
            <p className="flex justify-end items-center ">
              <FontAwesomeIcon className='cursor-pointer mr-3 mb-2 text-gray-500 w-[22px] h-[22px]' icon={faDownload} />
            </p>
            <h2 className="text-lg text-start font-semibold mb-2">18/11/2024</h2>
            <div className="sales-info flex justify-between">
              <p className="text-gray-700">Total Sales:</p>
              <span className="font-bold text-green-600">$8,200</span>
            </div>
            <div className="sales-info flex justify-between">
              <p className="text-gray-700">Tasks Sold:</p>
              <span className="font-bold text-sky-900">200</span>
            </div>
          </main>          <main className="col-span-6 md:col-span-2 bg-white p-4 rounded-md shadow-md">
            <p className="flex justify-end items-center ">
              <FontAwesomeIcon className='cursor-pointer mr-3 mb-2 text-gray-500 w-[22px] h-[22px]' icon={faDownload} />
            </p>
            <h2 className="text-lg text-start font-semibold mb-2">18/10/2024</h2>
            <div className="sales-info flex justify-between">
              <p className="text-gray-700">Total Sales:</p>
              <span className="font-bold text-green-600">$9,200</span>
            </div>
            <div className="sales-info flex justify-between">
              <p className="text-gray-700">Tasks Sold:</p>
              <span className="font-bold text-sky-900">90</span>
            </div>
          </main>          <main className="col-span-6 md:col-span-2 bg-white p-4 rounded-md shadow-md">
            <p className="flex justify-end items-center ">
              <FontAwesomeIcon className='cursor-pointer mr-3 mb-2 text-gray-500 w-[22px] h-[22px]' icon={faDownload} />
            </p>
            <h2 className="text-lg text-start font-semibold mb-2">18/10/2024</h2>
            <div className="sales-info flex justify-between">
              <p className="text-gray-700">Total Sales:</p>
              <span className="font-bold text-green-600">$5,200</span>
            </div>
            <div className="sales-info flex justify-between">
              <p className="text-gray-700">Tasks Sold:</p>
              <span className="font-bold text-sky-900">120</span>
            </div>
          </main>          <main className="col-span-6 md:col-span-2 bg-white p-4 rounded-md shadow-md">
            <p className="flex justify-end items-center ">
              <FontAwesomeIcon className='cursor-pointer mr-3 mb-2 text-gray-500 w-[22px] h-[22px]' icon={faDownload} />
            </p>
            <h2 className="text-lg text-start font-semibold mb-2">18/09/2024</h2>
            <div className="sales-info flex justify-between">
              <p className="text-gray-700">Total Sales:</p>
              <span className="font-bold text-green-600">$2,200</span>
            </div>
            <div className="sales-info flex justify-between">
              <p className="text-gray-700">Tasks Sold:</p>
              <span className="font-bold text-sky-900">130</span>
            </div>
          </main>          <main className="col-span-6 md:col-span-2 bg-white p-4 rounded-md shadow-md">
            <p className="flex justify-end items-center ">
              <FontAwesomeIcon className='cursor-pointer mr-3 mb-2 text-gray-500 w-[22px] h-[22px]' icon={faDownload} />
            </p>
            <h2 className="text-lg text-start font-semibold mb-2">18/08/2025</h2>
            <div className="sales-info flex justify-between">
              <p className="text-gray-700">Total Sales:</p>
              <span className="font-bold text-green-600">$7,200</span>
            </div>
            <div className="sales-info flex justify-between">
              <p className="text-gray-700">Tasks Sold:</p>
              <span className="font-bold text-sky-900">70</span>
            </div>
          </main>
          
        </div>
      </div>
    </div>
  );
}
