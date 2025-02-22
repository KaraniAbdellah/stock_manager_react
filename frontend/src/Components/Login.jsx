import React, { useState } from 'react';
import { Link } from "react-router-dom";
import App from '../App';

export default function Login() {
    const [render, setRender] = useState(false);
    const handleSubmit = (e) => {
        const email = document.querySelector(".email");
        const password = document.querySelector(".password");
        const inputs = [email, password];

        let allValid = true;
        inputs.forEach((input) => {
            if (input.value === "") {
                input.classList.add("InvalidInputs");
                allValid = false;
            } else {
                input.classList.add("validInputs");
            }
        });
        if (allValid) {
            setRender(true);
        }
    };

  return (
    <div>
        {render? <App></App>
        :
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 border-2 border-sky-900 border-solid rounded-lg shadow-md w-80">
        <h2 className="text-xl font-bold text-center mb-4"><span className='text-sky-900'>L</span>ogin</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={`w-full email p-2 mb-2 border rounded-md`}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={`w-full password p-2 mb-4 border rounded-md`}
        />
        <button className="w-full bg-sky-900 text-white border-2 border-white border-solid p-2 rounded-md" onClick={(e) => handleSubmit(e)}>
        Login
        </button>
      </div>
    </div>}
    </div>
  );
}
