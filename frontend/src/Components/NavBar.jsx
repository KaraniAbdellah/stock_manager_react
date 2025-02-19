import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBox, faAdjust, faFileInvoice, faShoppingCart, faChartLine, faDollarSign, faChartBar, faUsers, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router";

export default function NavBar() {
    useEffect(() => {
        const click_eles = document.querySelectorAll(".click_ele");
        click_eles.forEach((ele) => {
            ele.addEventListener("click", function() {
                click_eles.forEach((ele) => {
                    ele.classList.remove("active_ele");
                });
                ele.classList.add("active_ele");
            });
        });
    }, []);
    return (
        <div className='w-[18%] items-start rounded-md bg-gradient-to-b px-3 m-3 py-4 from-sky-700 to-sky-800'>
            <ul className='flex flex-col justify-start items-start '>
                <li className='w-[100%] active_ele click_ele mb-1 text-center px-3 text-white py-2 text-xl font-semibold'>
                <Link to="/" className="flex justify-start items-center">
                    <FontAwesomeIcon className='mr-3 w-[22px] h-[22px]' icon={faTachometerAlt} />
                    <span className=''>DashBoard</span>
                </Link>
                </li>
                <li className='w-[100%] click_ele mb-1 text-center px-3 text-white py-2 text-xl font-semibold'>
                <Link to="/Products" className="flex justify-start items-center">
                    <FontAwesomeIcon className='mr-3 w-[22px] h-[22px]' icon={faBox} />
                    <span className=''>Products</span>
                </Link>
                </li>
                <li className='w-[100%] click_ele mb-1 text-center px-3 text-white py-2 text-xl font-semibold'>
                <Link to="/Adj" className="flex justify-start items-center">
                    <FontAwesomeIcon className='mr-3 w-[22px] h-[22px]' icon={faAdjust} />
                    <span className=''>Adjustments</span>
                </Link>
                </li>
                <li className='w-[100%] click_ele mb-1 text-center px-3 text-white py-2 text-xl font-semibold'>
                <Link to="/Quat" className="flex justify-start items-center">
                    <FontAwesomeIcon className='mr-3 w-[22px] h-[22px]' icon={faFileInvoice} />
                    <span className=''>Quotations</span>
                </Link>
                </li>
                <li className='w-[100%] click_ele mb-1 text-center px-3 text-white py-2 text-xl font-semibold'>
                <Link to="/Purch" className="flex justify-start items-center">
                    <FontAwesomeIcon className='mr-3 w-[22px] h-[22px]' icon={faShoppingCart} />
                    <span className=''>Purchases</span>
                </Link>
                </li>
                <li className='w-[100%] click_ele mb-1 text-center px-3 text-white py-2 text-xl font-semibold'>
                <Link to="/Sales" className="flex justify-start items-center">
                    <FontAwesomeIcon className='mr-3 w-[22px] h-[22px]' icon={faChartLine} />
                    <span className=''>Sales</span>
                </Link>
                </li>
                <li className='w-[100%] click_ele mb-1 text-center px-3 text-white py-2 text-xl font-semibold'>
                <Link to="/Expen" className="flex justify-start items-center">
                    <FontAwesomeIcon className='mr-3 w-[22px] h-[22px]' icon={faDollarSign} />
                    <span className=''>Expenses</span>
                </Link>
                </li>
                <li className='w-[100%] click_ele mb-1 text-center px-3 text-white py-2 text-xl font-semibold'>
                <Link to="/Reports" className="flex justify-start items-center">
                    <FontAwesomeIcon className='mr-3 w-[22px] h-[22px]' icon={faChartBar} />
                    <span className=''>Reports</span>
                </Link>
                </li>
                <li className='w-[100%] click_ele mb-1 text-center px-3 text-white py-2 text-xl font-semibold'>
                <Link to="/People" className="flex justify-start items-center">
                    <FontAwesomeIcon className='mr-3 w-[22px] h-[22px]' icon={faUsers} />
                    <span className=''>People</span>
                </Link>
                </li>
                <li className='w-[100%] click_ele mb-1 text-center px-3 text-white py-2 text-xl font-semibold'>
                <Link to="/Setting" className="flex justify-start items-center">
                    <FontAwesomeIcon className='mr-3 w-[22px] h-[22px]' icon={faCog} />
                    <span className=''>Settings</span>
                </Link>
                </li>
                <li className='w-[100%] click_ele mb-1 text-center px-3 text-white py-2 text-xl font-semibold'>
                <Link to="/Login" className="flex justify-start items-center">
                    <FontAwesomeIcon className='mr-3 w-[22px] h-[22px]' icon={faSignOutAlt} />
                    <span className=''>LogOut</span>
                </Link>
                </li>
            </ul>
        </div>
    );
}
