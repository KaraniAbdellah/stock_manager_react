import React from 'react'
import "../index.css";


export default function DashBoard() {
    const handleAddProduct = () => {
        
    }
    return (
        <div className='bg-gray-200 dashboard second_content w-full ml-3 mt-3 mr-3 p-3 rounded-md h-full'>
            <div className="content">
                <h3 className='text-start font-semibold text-sky-800'>DashBaord</h3>
                <main className='flex justify-between items-center mt-5'>
                    <input className='w-[70%] p-3 rounded-md outline-none border-2 border-solid border-sky-700' type="text" placeholder='product name...' />
                    <button onClick={() => handleAddProduct()} className='w-[28%] hover:bg-sky-700 text-zinc-700 hover:text-white p-3 rounded-md outline-none border-2 border-solid border-sky-700' type="text" placeholder='product name...' >
                        <span className='text-base font-semibold'>
                            Add Product
                        </span>
                    </button>
                </main>
            </div>
    </div>
    );
}
