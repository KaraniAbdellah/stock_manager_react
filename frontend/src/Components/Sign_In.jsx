import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function SignIn() {

    const handleSubmit = (e) => {
        let firstName = document.querySelector(".firstName");
        let lastName = document.querySelector(".lastName");
        let email = document.querySelector(".email");
        let password = document.querySelector(".password");
        const inputs = [firstName, lastName, email, password];
        inputs.forEach((input) => {
            if (input.value === "") input.classList.add("InvalidInputs");
            else input.classList.add("validInputs");
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 border-2 border-sky-900 border-solid rounded-lg shadow-md w-80">
            <h2 className="text-xl font-bold text-center mb-4"><span className='text-sky-900'>S</span>ign In</h2>
            <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className={`w-full firstName p-2 mb-2 border rounded-md`}
            />
            <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className={`w-full lastName p-2 mb-2 border rounded-md`}
            />
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

            <Link to="/login">
                <button className="w-full bg-sky-900 text-white border-2 border-white border-solid p-2 rounded-md" onClick={(e) => handleSubmit(e)}>
                    Sign Up
                </button>
            </Link>

            <Link to="/login">
            <p className="text-center mt-2 text-sm">
                Already have an account? <span className="text-sky-900 font-semibold">Login</span>
            </p>
            </Link>
        </div>
        </div>
    );
}
