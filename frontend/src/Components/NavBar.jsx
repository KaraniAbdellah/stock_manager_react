import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBox, faAdjust, faFileInvoice, faShoppingCart, faChartLine, faDollarSign, faChartBar, faUsers, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router";

export default function NavBar() {
    useEffect(() => {
        const click_eles = document.querySelectorAll(".click_ele");
        const second_contents = document.querySelectorAll(".second_content");
        click_eles.forEach((ele) => {
            ele.addEventListener("click", function() {
                click_eles.forEach((ele) => {
                    ele.classList.remove("active_ele");
                });
                ele.classList.add("active_ele");
            });
        });

        window.addEventListener("resize", function() {
            const aside = document.querySelector("aside");
            const second_content = document.querySelector(".second_content");
        
            if (window.innerWidth <= 1200) {
                aside.classList.add("hideAside");
                second_content.classList.add("setWidth");
            } else {
                aside.classList.remove("hideAside");
                second_content.classList.remove("setWidth");
            }
        });

        // Run once on page load
        window.dispatchEvent(new Event("resize"));
    }, []);
    return (
        <aside className='aside w-[18%] items-start rounded-md bg-gradient-to-b px-3 my-3 ml-3 py-4 from-sky-700 to-sky-800'>
            <ul className='flex flex-col justify-start items-start '>
                <li className='w-[100%] hover:bg-gray-600 hover:rounded-md hover:transition-all hover:bg-opacity-25  active_ele click_ele mb-1 text-center px-3 text-white py-2 text-xl'>
                <Link to="/" className="flex justify-start items-center">
                    <FontAwesomeIcon className='mr-3 w-[22px] h-[22px]' icon={faTachometerAlt} />
                    <span className=''>DashBoard</span>
                </Link>
                </li>
                <li className='w-[100%] hover:bg-gray-600 hover:rounded-md hover:transition-all hover:bg-opacity-25 click_ele mb-1 text-center px-3 text-white py-2 text-xl'>
                <Link to="/Products" className="flex justify-start items-center">
                    <FontAwesomeIcon className='mr-3 w-[22px] h-[22px]' icon={faBox} />
                    <span className=''>Products</span>
                </Link>
                </li>
                <li className='w-[100%] hover:bg-gray-600 hover:rounded-md hover:transition-all hover:bg-opacity-25 click_ele mb-1 text-center px-3 text-white py-2 text-xl'>
                <Link to="/Sales" className="flex justify-start items-center">
                    <FontAwesomeIcon className='mr-3 w-[22px] h-[22px]' icon={faChartLine} />
                    <span className=''>Sales</span>
                </Link>
                </li>
                <li className='w-[100%] hover:bg-gray-600 hover:rounded-md hover:transition-all hover:bg-opacity-25 click_ele mb-1 text-center px-3 text-white py-2 text-xl'>
                <Link to="/People" className="flex justify-start items-center">
                    <FontAwesomeIcon className='mr-3 w-[22px] h-[22px]' icon={faUsers} />
                    <span className=''>People</span>
                </Link>
                </li>
                <li className='w-[100%] hover:bg-gray-600 hover:rounded-md hover:transition-all hover:bg-opacity-25 click_ele mb-1 text-center px-3 text-white py-2 text-xl'>
                <Link to="/Setting" className="flex justify-start items-center">
                    <FontAwesomeIcon className='mr-3 w-[22px] h-[22px]' icon={faCog} />
                    <span className=''>Settings</span>
                </Link>
                </li>
                
            </ul>
        </aside>
    );
}




{
/* 
<li className='w-[100%] hover:bg-gray-600 hover:rounded-md hover:transition-all hover:bg-opacity-25 click_ele mb-1 text-center px-3 text-white py-2 text-xl'>
    <Link to="/Login" className="flex justify-start items-center">
        <FontAwesomeIcon className='mr-3 w-[22px] h-[22px]' icon={faSignOutAlt} />
        <span className=''>LogOut</span>
    </Link>
</li> 
*/
}
