import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

function RegisterFormComponent() {
    const navigator = useNavigate();
    const [input, setInput] = useState({
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.password !== input.confirmPassword){
           ("Passwords do not match");
            return false;
        }
        else{
            navigator("/");
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <form onSubmit={handleSubmit} class="mt-8 space-y-6">
            <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm -space-y-px">
                <div>
                    <label for="name" class="sr-only">Name</label>
                    <input id="name" name="name" type="text" autocomplete="name" required class="dark:text-white appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-800" placeholder="Name" />
                </div>
                <div>
                    <label for="name" class="sr-only">Registration Number</label>
                    <input id="name" name="name" type="text" autocomplete="name" required class="dark:text-white appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-500 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-800" placeholder="Registration Number" />
                </div>
                <div>
                    <label for="email-address" class="sr-only">Email address</label>
                    <input id="email-address" name="email" type="email" autocomplete="email" required class="dark:text-white appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-500 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-800" placeholder="Email address" />
                </div>
                <div>
                    <label for="password" class="sr-only">Password</label>
                    <input onChange={handleChange} value={input.password} id="password" name="password" type="password" autocomplete="new-password" required class="dark:text-white appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-500 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-800" placeholder="Password" />
                </div>
                <div>
                    <label for="password-confirm" class="sr-only">Confirm password</label>
                    <input onChange={handleChange} value={input.confirmPassword} id="password-confirm" name="confirmPassword" type="password" autocomplete="new-password" required class="dark:text-white appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-500 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-800" placeholder="Confirm password" />
                </div>
            </div>

            <div>
                <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                        <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M3.293 6.293a1 1 0 011.414 0L10 10.586l5.293-5.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </span>
                    Create account
                </button>
            </div>
            <div>
                <Link to="/">
                    <button type="button" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                            <svg class="h-5 w-5 text-red-500 group-hover:text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M3.293 6.293a1 1 0 011.414 0L10 10.586l5.293-5.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        Proceed to Login
                    </button>
                </Link>
            </div>
        </form>
    )
}

export default RegisterFormComponent;