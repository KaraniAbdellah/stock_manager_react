import React, {useEffect} from 'react';
import friend1 from "../assests/friend-01.jpg";
import friend2 from "../assests/friend-02.jpg";
import friend3 from "../assests/friend-03.jpg";
import friend4 from "../assests/friend-04.jpg";
import friend5 from "../assests/friend-05.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faXmark, faPhone, faMessage, faFaceSmile, faCode, faNewspaper } from '@fortawesome/free-solid-svg-icons';


export default function People(width) {
        useEffect(() => {
            if (width && window.innerWidth <= 1200) {
                const second_content = document.querySelector(".second_content");
                second_content.classList.add("setWidth");
            }
        }, []);

    return (
        <div className='bg-gray-200 second_content ml-3 mt-3 mr-3 p-3 rounded-md w-[80%] h-full'>
        <div className="content">
            <h3 className="text-start mb-4 font-semibold text-sky-800">People</h3>
        <div className='peoples gap-3 grid grid-cols-6'>
                <div className="people rounded-md col-span-6 md:col-span-2 p-3 gap-20 bg-white">
                    <div className="icons text-start">
                        <FontAwesomeIcon className='bg-zinc-300 p-3 mr-2 rounded-full text-lg text-zinc-500' icon={faPhone} />
                        <FontAwesomeIcon className='bg-zinc-300 p-3 rounded-full text-lg text-zinc-500' icon={faMessage} />
                    </div>
                    <div className="info text-center mb-2 flex justify-center items-center flex-col">
                        <img src={friend1} className='rounded-full w-[100px] mb-2 h-[100px]' alt="" />
                        <h3 className='font-semibold'>Abdellah Karani</h3>
                        <p className='text-gray-500'>Admin</p>
                    </div>
                    <hr />
                    <div className="join_time mt-4 flex justify-between items-center">
                        <p className='text-gray-400'>joined 17/01/2023</p>
                        <div className="btns">
                            <button className='p-1 mr-2 bg-blue-500 text-white rounded-md'>profile</button>
                            <button className='p-1 bg-red-500 text-white rounded-md'>remove</button>
                        </div>
                    </div>
                </div>
                <div className="people rounded-md col-span-6 md:col-span-2 p-3 gap-20 bg-white">
                    <div className="icons text-start">
                        <FontAwesomeIcon className='bg-zinc-300 p-3 mr-2 rounded-full text-lg text-zinc-500' icon={faPhone} />
                        <FontAwesomeIcon className='bg-zinc-300 p-3 rounded-full text-lg text-zinc-500' icon={faMessage} />
                    </div>
                    <div className="info text-center mb-2 flex justify-center items-center flex-col">
                        <img src={friend4} className='rounded-full w-[100px] mb-2 h-[100px]' alt="" />
                        <h3 className='font-semibold'>Ossama Ossama</h3>
                        <p className='text-gray-500'>Admin</p>
                    </div>
                    <hr />
                    <div className="join_time mt-4 flex justify-between items-center">
                        <p className='text-gray-400'>joined 17/01/2023</p>
                        <div className="btns">
                            <button className='p-1 mr-2 bg-blue-500 text-white rounded-md'>profile</button>
                            <button className='p-1 bg-red-500 text-white rounded-md'>remove</button>
                        </div>
                    </div>
                </div>
                <div className="people rounded-md col-span-6 md:col-span-2 p-3 gap-20 bg-white">
                    <div className="icons text-start">
                        <FontAwesomeIcon className='bg-zinc-300 p-3 mr-2 rounded-full text-lg text-zinc-500' icon={faPhone} />
                        <FontAwesomeIcon className='bg-zinc-300 p-3 rounded-full text-lg text-zinc-500' icon={faMessage} />
                    </div>
                    <div className="info text-center mb-2 flex justify-center items-center flex-col">
                        <img src={friend2} className='rounded-full w-[100px] mb-2 h-[100px]' alt="" />
                        <h3 className='font-semibold'>Ahmed Ali</h3>
                        <p className='text-gray-500'>Manager</p>
                    </div>
                    <hr />
                    <div className="join_time mt-4 flex justify-between items-center">
                        <p className='text-gray-400'>joined 17/01/2023</p>
                        <div className="btns">
                            <button className='p-1 mr-2 bg-blue-500 text-white rounded-md'>profile</button>
                            <button className='p-1 bg-red-500 text-white rounded-md'>remove</button>
                        </div>
                    </div>
                </div>
                <div className="people rounded-md col-span-6 md:col-span-2 p-3 gap-20 bg-white">
                    <div className="icons text-start">
                        <FontAwesomeIcon className='bg-zinc-300 p-3 mr-2 rounded-full text-lg text-zinc-500' icon={faPhone} />
                        <FontAwesomeIcon className='bg-zinc-300 p-3 rounded-full text-lg text-zinc-500' icon={faMessage} />
                    </div>
                    <div className="info text-center mb-2 flex justify-center items-center flex-col">
                        <img src={friend3} className='rounded-full w-[100px] mb-2 h-[100px]' alt="" />
                        <h3 className='font-semibold'>Mohamed Ayman</h3>
                        <p className='text-gray-500'>Manager</p>
                    </div>
                    <hr />
                    <div className="join_time mt-4 flex justify-between items-center">
                        <p className='text-gray-400'>joined 17/01/2023</p>
                        <div className="btns">
                            <button className='p-1 mr-2 bg-blue-500 text-white rounded-md'>profile</button>
                            <button className='p-1 bg-red-500 text-white rounded-md'>remove</button>
                        </div>
                    </div>
                </div>
                <div className="people rounded-md col-span-6 md:col-span-2 p-3 gap-20 bg-white">
                    <div className="icons text-start">
                        <FontAwesomeIcon className='bg-zinc-300 p-3 mr-2 rounded-full text-lg text-zinc-500' icon={faPhone} />
                        <FontAwesomeIcon className='bg-zinc-300 p-3 rounded-full text-lg text-zinc-500' icon={faMessage} />
                    </div>
                    <div className="info text-center mb-2 flex justify-center items-center flex-col">
                        <img src={friend5} className='rounded-full w-[100px] mb-2 h-[100px]' alt="" />
                        <h3 className='font-semibold'>Adam Adam</h3>
                        <p className='text-gray-500'>Maintenance Technician </p>
                    </div>
                    <hr />
                    <div className="join_time mt-4 flex justify-between items-center">
                        <p className='text-gray-400'>joined 17/01/2023</p>
                        <div className="btns">
                            <button className='p-1 mr-2 bg-blue-500 text-white rounded-md'>profile</button>
                            <button className='p-1 bg-red-500 text-white rounded-md'>remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
