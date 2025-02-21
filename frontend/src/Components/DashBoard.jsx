import React, { useEffect, useState } from "react";
import "../index.css";
import AddProduct from "./AddProduct";
import axios from "axios";

export default function DashBoard() {
    const [products, setProducts] = useState([]);
    const [enbleAddProduct, setEnbleAddProduct] = useState(false);
    const [Edit_Add_Action, SetEdit_Add_Action] = useState({desc: "Add Product", IsEdit: false});
    const [editedProductId, setEditedProductId] = useState("");

    const handleAddProduct = () => {
        SetEdit_Add_Action({desc: "Add Product", IsEdit: false});
        setEnbleAddProduct(!enbleAddProduct);
    };

    const EditProduct = (e) => {
        setEditedProductId(e.target.parentElement.parentElement.getAttribute("id"));
        setEnbleAddProduct(!enbleAddProduct);
        SetEdit_Add_Action({desc: "Edit Product", IsEdit: true});
    }

    const DeleteProduct = (e) => {
        const id = e.target.parentElement.parentElement.getAttribute("id");
        console.log(e.target.parentElement.parentElement.remove());

        axios.delete(`http://127.0.0.1:3001/api/deleteProduct/${id}`).then((res) => {
            console.log(res);
        });
    }

    useEffect(() => {
        axios.get("http://127.0.0.1:3001/api/GetAllProduct").then((res) => {
            setProducts(res.data);
        });
    }, []);

    return (
        <div className="bg-gray-200 relative dashboard second_content w-full ml-3 mt-3 mr-3 p-3 rounded-md h-full">
        <div className="content">
            <h3 className="text-start font-semibold text-sky-800">DashBaord</h3>
            <main className="flex flex-col lg:flex-row md:flex-row justify-between items-center mt-5 ">
            <input
                className="lg:w-[70%] lg:mb-0 w-[100%] mb-3 md:w-[70%] md:mb-0 p-3 rounded-md outline-none border-2 border-solid border-sky-700"
                type="text"
                placeholder="product name..."
            />
            <button
                onClick={() => handleAddProduct()}
                className="lg:w-[28%] w-[100%] md:w-[28%] hover:bg-sky-700 text-zinc-700 hover:text-white p-3 rounded-md outline-none border-2 border-solid border-sky-700"
                type="text"
                placeholder="product name..."
            >
                <span className="text-base font-semibold">Add Product</span>
            </button>
            </main>
        </div>
        <div className="">
            {enbleAddProduct ? (
            <AddProduct
                editedProductId = {editedProductId}
                Edit_Add_Action = {Edit_Add_Action}
                SetEdit_Add_Action={SetEdit_Add_Action}
                setProducts={setProducts}
                products={products}
                setEnbleAddProduct={setEnbleAddProduct}
                enbleAddProduct={enbleAddProduct}
            ></AddProduct>
            ) : (
            ""
            )}
        </div>
        <div className="overflow-auto">
            <table className="w-full my-5 border-sky-900 border-2">
            <thead className="bg-sky-800">
                <tr>
                <th className="p-2 border-sky-800 border-2 border-solid text-white">
                    Product Name
                </th>
                <th className="p-2 border-sky-800 border-2 border-solid text-white">
                    Description
                </th>
                <th className="p-2 border-sky-800 border-2 border-solid text-white">
                    Price
                </th>
                <th className="p-2 border-sky-800 border-2 border-solid text-white">
                    Stock
                </th>
                <th className="p-2 border-sky-800 border-2 border-solid text-white">
                    Image
                </th>
                <th className="p-2 border-sky-800 border-2 border-solid text-white">
                    Action
                </th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => {
                return (
                    <tr key={product._id} id={product._id} className="hover:bg-gray-100">
                    <td className="whitespace-nowrap p-2 border-sky-900 border-2 border-solid">
                        {product.name}
                    </td>
                    <td className="whitespace-nowrap p-2 border-sky-900 border-2 border-solid">
                        {product.description}
                    </td>
                    <td className="whitespace-nowrap p-2 border-sky-900 border-2 border-solid">
                        ${product.price}
                    </td>
                    <td className="whitespace-nowrap p-2 border-sky-900 border-2 border-solid">
                        {product.stock}
                    </td>
                    <td className="whitespace-nowrap border-sky-900 border-2 border-solid">
                        <img
                        src={product.img}
                        alt="Example Product"
                        className="h-12 object-cover w-[100%]"
                        />
                    </td>
                    <td className="whitespace-nowrap p-2 border-sky-900 border-2 border-solid">
                        <button onClick={(e) => EditProduct(e)} className="edit_product px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Edit
                        </button>
                        <button onClick={(e) => DeleteProduct(e)} className="delte_product px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 ml-2">
                        Delete
                        </button>
                    </td>
                    </tr>
                );
                })}
            </tbody>
            </table>
        </div>
        </div>
    );
}
