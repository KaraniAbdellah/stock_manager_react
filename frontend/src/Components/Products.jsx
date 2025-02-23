import React, { useEffect } from 'react';
import product1 from "../assests/product1.avif";
import product2 from "../assests/product2.avif";
import product3 from "../assests/product3.webp";
import product4 from "../assests/product4.avif";
import product5 from "../assests/product5.jpg";
import product6 from "../assests/product6.jpg";

export default function Products(width) {
    useEffect(() => {
        if (width && window.innerWidth <= 1200) {
            const second_content = document.querySelector(".second_content");
            second_content.classList.add("setWidth");
        }
    }, []);
    return (
        <div className='bg-gray-200 second_content ml-3 mt-3 mr-3 p-3 rounded-md w-[80%] h-full'>
            <div className="content">
                <h3 className="text-start mb-4 font-semibold text-sky-800">Products</h3>
            <div className='products gap-3 grid grid-cols-6'>
                    <div className="product rounded-md col-span-6 md:col-span-2 p-3 gap-20 bg-white">
                        <div className="info text-center flex justify-center items-center flex-col">
                            <img src={product1} className='h-[300px] w-full' alt="" />
                        </div>
                        <div className="info my-3 flex justify-between items-center">
                            <h3 className='font-semibold'>Product1</h3>
                            <p className='price text-sky-900 text-lg font-semibold'>$ 200.000</p>
                        </div>
                        <div className="desc mb-3 text-start">
                            <p className='text-md text-gray-700'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quos illum expedita. Et, vero aliquam eveniet non dolor labore ut.
                            </p>
                        </div>
                        <div className="btns flex justify-end items-center">
                            <button className='p-1 bg-red-500 text-white rounded-md'>remove</button>
                        </div>
                    </div>
                    <div className="product rounded-md col-span-6 md:col-span-2 p-3 gap-20 bg-white">
                        <div className="info text-center flex justify-center items-center flex-col">
                            <img src={product2} className='h-[300px] w-full' alt="" />
                        </div>
                        <div className="info my-3 flex justify-between items-center">
                            <h3 className='font-semibold'>Product2</h3>
                            <p className='price text-sky-900 text-lg font-semibold'>$ 200.000</p>
                        </div>
                        <div className="desc mb-3 text-start">
                            <p className='text-md text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quos illum expedita. Et, vero aliquam eveniet non dolor labore ut.</p>
                        </div>
                        <div className="btns flex justify-end items-center">
                            <button className='p-1 bg-red-500 text-white rounded-md'>remove</button>
                        </div>
                    </div>
                    <div className="product rounded-md col-span-6 md:col-span-2 p-3 gap-20 bg-white">
                        <div className="info text-center flex justify-center items-center flex-col">
                            <img src={product3} className='h-[300px] w-full' alt="" />
                        </div>
                        <div className="info my-3 flex justify-between items-center">
                            <h3 className='font-semibold'>Product3</h3>
                            <p className='price text-sky-900 text-lg font-semibold'>$ 200.000</p>
                        </div>
                        <div className="desc mb-3 text-start">
                            <p className='text-md text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quos illum expedita. Et, vero aliquam eveniet non dolor labore ut.</p>
                        </div>
                        <div className="btns flex justify-end items-center">
                            <button className='p-1 bg-red-500 text-white rounded-md'>remove</button>
                        </div>
                    </div>
                    <div className="product rounded-md col-span-6 md:col-span-2 p-3 gap-20 bg-white">
                        <div className="info text-center flex justify-center items-center flex-col">
                            <img src={product4} className='h-[300px] w-full' alt="" />
                        </div>
                        <div className="info my-3 flex justify-between items-center">
                            <h3 className='font-semibold'>Product4</h3>
                            <p className='price text-sky-900 text-lg font-semibold'>$ 200.000</p>
                        </div>
                        <div className="desc mb-3 text-start">
                            <p className='text-md text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quos illum expedita. Et, vero aliquam eveniet non dolor labore ut.</p>
                        </div>
                        <div className="btns flex justify-end items-center">
                            <button className='p-1 bg-red-500 text-white rounded-md'>remove</button>
                        </div>
                    </div>
                    <div className="product rounded-md col-span-6 md:col-span-2 p-3 gap-20 bg-white">
                        <div className="info text-center flex justify-center items-center flex-col">
                            <img src={product5} className='h-[300px] w-full' alt="" />
                        </div>
                        <div className="info my-3 flex justify-between items-center">
                            <h3 className='font-semibold'>Product5</h3>
                            <p className='price text-sky-900 text-lg font-semibold'>$ 200.000</p>
                        </div>
                        <div className="desc mb-3 text-start">
                            <p className='text-md text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quos illum expedita. Et, vero aliquam eveniet non dolor labore ut.</p>
                        </div>
                        <div className="btns flex justify-end items-center">
                            <button className='p-1 bg-red-500 text-white rounded-md'>remove</button>
                        </div>
                    </div>
                    <div className="product rounded-md col-span-6 md:col-span-2 p-3 gap-20 bg-white">
                        <div className="info text-center flex justify-center items-center flex-col">
                            <img src={product6} className='h-[300px] w-full' alt="" />
                        </div>
                        <div className="info my-3 flex justify-between items-center">
                            <h3 className='font-semibold'>Product6</h3>
                            <p className='price text-sky-900 text-lg font-semibold'>$ 200.000</p>
                        </div>
                        <div className="desc mb-3 text-start">
                            <p className='text-md text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quos illum expedita. Et, vero aliquam eveniet non dolor labore ut.</p>
                        </div>
                        <div className="btns flex justify-end items-center">
                            <button className='p-1 bg-red-500 text-white rounded-md'>remove</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}






