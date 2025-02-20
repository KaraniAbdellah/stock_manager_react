
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const AddProduct = ({setProducts, products,  setEnbleAddProduct, enbleAddProduct}) => {
    const handleCancel = () => {
        setEnbleAddProduct(!enbleAddProduct);
    }
    const handleAddProduct = (e) => {
        e.preventDefault();
        const product_name_input = document.querySelector(".product_name_input");
        const description_input = document.querySelector(".description_input");
        const image_input = document.querySelector(".image_input");
        const price_input = document.querySelector(".price_input");
        const stock_input = document.querySelector(".stock_input");

        const product = {
            name: product_name_input.value,
            description: description_input.value,
            img: image_input.value,
            price: price_input.value,
            stock: stock_input.value
        }
        setProducts((p) => [...p, product]);

        
    }
    
    return (
        <div className="p-6 bg-white rounded-md shadow-lg w-full absolute top-0 left-0">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-zinc-700">Add New Product</h2>
                <p className="cancel hover:bg-gray-200 p-1 rounded-full w-[40px] h-[40px] flex justify-center items-center" onClick={() => handleCancel()}>
                    <FontAwesomeIcon className="cursor-pointer text-2xl text-zinc-700" icon={faXmark} />
                </p>
            </div>
            <form action="" className="mt-4">
                <div className="product_name w-full mb-3">
                    <label className="block w-full mb-2 font-semibold text-start" htmlFor="">Product name</label>
                    <input className='product_name_input w-[100%] p-2 rounded-md outline-none border-2 border-solid border-sky-700' type="text" placeholder='product name...' />
                </div>
                <div className="description mb-3">
                    <label className="block w-full mb-2 font-semibold text-start" htmlFor="">Description</label>
                    <textarea className='description_input w-[100%] p-2 rounded-md outline-none border-2 border-solid border-sky-700' placeholder='description...' />
                </div>
                <div className="price_stock flex justify-between items-center mb-3">
                    <div className="price w-[47%]">
                        <label className="block w-full mb-2 font-semibold text-start" htmlFor="">Price$</label>
                        <input min="0" className='price_input w-[100%] p-2 rounded-md outline-none border-2 border-solid border-sky-700' type="number" placeholder='0' />
                    </div>
                    <div className="stock w-[47%]">
                        <label className="block w-full mb-2 font-semibold text-start" htmlFor="">Stock</label>
                        <input min="0" className='stock_input w-[100%] p-2 rounded-md outline-none border-2 border-solid border-sky-700' type="number" placeholder='0' />
                    </div>
                </div>
                <div className="image mb-5">
                    <label className="block w-full mb-2 font-semibold text-start" htmlFor="">Image</label>
                    <input className='image_input w-[100%] p-2 rounded-md outline-none border-2 border-solid border-sky-700' type="file" placeholder='0' />
                </div>
                <div className="btns flex justify-end items-center">
                    <button onClick={() => handleCancel()} className="bg-sky-700 text-white hover:bg-sky-800 mr-3 font-bold py-2 px-4 rounded">
                        cancel
                    </button>
                    <button onClick={(e) => handleAddProduct(e)} className="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded">
                        add Product
                    </button>
                </div>
            </form>
        
        </div>
    );
};

export default AddProduct;


