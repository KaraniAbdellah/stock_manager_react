import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Login() {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [validation, setValidation] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    let newValidation = {};
    Object.keys(inputs).forEach(key => {
      newValidation[key] = inputs[key].trim() === "" ? "InvalidInputs" : "validInputs";
    });
    setValidation(newValidation);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 border-2 border-sky-900 border-solid rounded-lg shadow-md w-80">
        <h2 className="text-xl font-bold text-center mb-4"><span className='text-sky-900'>L</span>ogin</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={`w-full p-2 mb-2 border rounded-md ${validation.email}`}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={`w-full p-2 mb-4 border rounded-md ${validation.password}`}
          onChange={handleChange}
        />

        <Link to="/">
            <button className="w-full bg-sky-900 text-white border-2 border-white border-solid p-2 rounded-md" onClick={(e) => handleSubmit(e)}>
            Login
            </button>
        </Link>
      </div>
    </div>
  );
}
