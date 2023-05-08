import React, {useState} from "react";
import { Link } from 'react-router-dom';

function LoginFormComponent() {
    const [input, setInput] = useState({
        "password": '',
        "email": ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8010/proxy/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
            body: JSON.stringify({Email: input.email, Password: input.password})
        }).then(response => {
            if(response.redirected) window.location.href = response.url;
        }).catch(err => console.log(err))
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <form onSubmit={handleSubmit} class="mt-8 space-y-6" method="POST">
                <input type="hidden" name="remember" value="true" />
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="email-address" class="sr-only">Email address</label>
                        <input onChange = {handleChange} value = {input.email} id="email-address" name="email" type="email" autocomplete="email" required className="dark:text-white appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-500 placeholder-gray-500 text-white-400 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-800" placeholder="Email address" />
                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <input onChange = {handleChange} value = {input.password} id="password" name="password" type="password" autocomplete="current-password" required className="dark:text-white appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-500 placeholder-gray-500 text-white-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-800" placeholder="Password" />
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                        <label for="remember-me" class="ml-2 block text-sm text-gray-400">
                            Remember me
                        </label>
                    </div>

                    <div class="text-sm">
                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                            Forgot your password?
                        </a><br/>
                    </div>
                </div>
                <div>
                    <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Sign in
                    </button>
                </div>
                <div>
                    <Link to="/register">
                    <button type="button" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Register
                    </button>
                    </Link>
                </div>
            </form>
    )
}

export default LoginFormComponent