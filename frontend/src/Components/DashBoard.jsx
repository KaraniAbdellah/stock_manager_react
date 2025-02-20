import React, { useEffect, useState } from "react";
import "../index.css";
import AddProduct from "./AddProduct";

export default function DashBoard() {
  const [products, setProducts] = useState([]);
  const [enbleAddProduct, setEnbleAddProduct] = useState(false);
  const handleAddProduct = () => {
    setEnbleAddProduct(!enbleAddProduct);
  };
  useEffect(() => {
    console.log(products);
  }, [products]);

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
        <table className="w-full my-5 border border-gray-300 border-sky-900 border-2">
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
                <tr key={index} className="hover:bg-gray-100">
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
                  <td className="whitespace-nowrap p-2 border-sky-900 border-2 border-solid">
                    <img
                      src={product.img}
                      alt="Example Product"
                      className="w-12 h-12 object-cover"
                    />
                  </td>
                  <td className="whitespace-nowrap p-2 border-sky-900 border-2 border-solid">
                    <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 ml-2">
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
