import { use, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars, faBackward } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

export default function Header() {
    const [show, setShow] = useState(false);

    const handleShowHidden = () => {
        const aside = document.querySelector("aside");
        const second_content = document.querySelector(".second_content");
        setShow(!show);
        if (window.innerWidth <= 1200) {
            second_content.classList.add("setWidth");
            aside.classList.toggle("hideAside");
        } else {
            aside.classList.toggle("hideAside");
            second_content.classList.toggle("setWidth");
        }
    }

    return (
        <header className='bg-gray-200 h-[70px] w-[100%] flex justify-between items-center p-2'>
            <div className="logo">
                <p className="text-3xl text-sky-900 ml-2 font-bold">Stock Manager</p>
            </div>
            <main className="flex">
                <ul className='justify-between items-center mr-5 hidden lg:flex md:hidden sm:hidden'>
                    <li><a className='text-sky-900 hover:text-blue-800 transition-all text-2xl mr-5' href="https://www.linkedin.com/in/abdellah-karani-965928294/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a className='text-sky-900 hover:text-black transition-all text-2xl mr-5' href="https://github.com/KaraniAbdellah"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a className='text-sky-900 hover:text-blue-500 transition-all text-2xl' href="https://x.com/karani66745"><FontAwesomeIcon icon={faTwitter} /></a></li>
                </ul>
                <button onClick={() => handleShowHidden()} className="relative mr-5 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-sky-700 to-blue-800 group-hover:from-sky-600 group-hover:to-blue-500 hover:text-white  focus:ring-blue-300 ">
                    <span className="switch_ele relative text-lg text-zinc-700 px-4 py-2 hover:text-white transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-transparent">
                        {show ? <FontAwesomeIcon className='text-lg' icon={faBackward} /> : <FontAwesomeIcon className='text-lg' icon={faBars} />}
                    </span>
                </button>
            </main>
        </header>
    );
}
