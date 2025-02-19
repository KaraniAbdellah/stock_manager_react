
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Header() {
    const [user_state, setUserSatate] = useState("Login");


    return (
        <header className='bg-gray-200 h-[60px] w-[100%] flex justify-between items-start p-2'>
            <div className="logo">
                <p className="text-3xl text-zinc-700 ml-2 dark:text-white font-bold">Semicolon</p>
            </div>
            <main className="flex">
                <ul className='flex justify-between items-center mr-5'>
                    <li><a className='text-blue-700 hover:text-blue-800 transition-all text-2xl mr-5' href="https://www.linkedin.com/in/abdellah-karani-965928294/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a className='text-gray-900 hover:text-black transition-all text-2xl mr-5' href="https://github.com/KaraniAbdellah"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a className='text-blue-400 hover:text-blue-500 transition-all text-2xl' href="https://x.com/karani66745"><FontAwesomeIcon icon={faTwitter} /></a></li>
                </ul>
                <button class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-sky-700 to-blue-800 group-hover:from-sky-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    {user_state}
                    </span>
                </button>

            </main>
        </header>
    );
}
