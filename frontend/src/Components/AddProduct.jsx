
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

const AddProduct = ({editedProductId, Edit_Add_Action, SetEdit_Add_Action, setProducts, products,  setEnbleAddProduct, enbleAddProduct}) => {
    const [Base64Data, setBase64Data] = useState(""); 
    // Function to Hide Add Product Form
    const handleCancel = () => {
        setEnbleAddProduct(!enbleAddProduct);
    }

    // Function For Check The Inputs
    function checkInputs(inputsData) {
        let check = true;
        inputsData.map((input) => {
            if (input.value === "") {
                input.classList.add("InvalidInputs");
                check = false;
            } else {
                input.classList.add("validInputs");
            }
        });
        return check;
    }

    // Convert Image To Base64
    function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }

    // Listen to Image 
    useEffect(() => {
        const image_input = document.querySelector(".image_input");
        image_input.addEventListener("change", async (event) => {
            const file = event.target.files[0];
            if (file) {
                try {
                    const base64 = await convertToBase64(file);
                    console.log(base64);
                    setBase64Data(base64);
                } catch (error) {
                    console.error("Error converting to Base64:", error);
                }
            }
        });
    }, []);

    const handleAddProduct = (e) => {
        e.preventDefault();
        const product_name_input = document.querySelector(".product_name_input");
        const description_input = document.querySelector(".description_input");
        const price_input = document.querySelector(".price_input");
        const stock_input = document.querySelector(".stock_input");
        const image_input = document.querySelector(".image_input");

        // Inputs Validation
        const inputsData = [product_name_input, description_input, image_input, price_input, stock_input];

        if (checkInputs(inputsData)) {
            const product = {
                name: product_name_input.value,
                description: description_input.value,
                img: Base64Data,
                price: price_input.value,
                stock: stock_input.value
            }
            if (!Edit_Add_Action.IsEdit) {
                // For Add Product
                setProducts((p) => [...p, product]);
                axios.post("http://127.0.0.1:3001/api/addProduct", product).then((res) => {
                    console.log(res);
                });
            } else {
                // For Edit Product
                products.map((p, index) => {
                    if (p._id === editedProductId) {
                        products[index] = product;
                    }
                });
                // Put Request For Edit
                axios.put(`http://127.0.0.1:3001/api/updateProduct/${editedProductId}`, product).then((res) => {
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                });
            }
            const message_ele = document.querySelector(".message");
            message_ele.classList.add("block");
            message_ele.classList.remove("hidden");
        } else {
            console.log("Some Inputs Was Empty");
        }
    }

    return (
        <div className="p-6 bg-white rounded-md shadow-lg w-full absolute top-0 left-0">
            <div className="message hidden w-[50%] p-1 transfrom -translate-x-1/2 absolute top-0 right-0 rounded-sm bg-green-600 text-white font-semibold">
                {Edit_Add_Action.desc} Successfully
            </div>
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
                    <input accept=".png, jpeg, .jpg" className='image_input w-[100%] p-2 rounded-md outline-none border-2 border-solid border-sky-700' type="file" placeholder='0' />
                </div>
                <div className="btns flex justify-end items-center">
                    <button onClick={() => handleCancel()} className="bg-sky-700 text-white hover:bg-sky-800 mr-3 font-bold py-2 px-4 rounded">
                        cancel
                    </button>
                    <button onClick={(e) => handleAddProduct(e)} className="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded">
                        {Edit_Add_Action.desc}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;


