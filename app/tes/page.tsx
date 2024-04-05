import React from 'react';

const page = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold mb-6">Welcome to TaskList Pro</h1>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Enter your email address to get started
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="name@yourcompany.com"
                    />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-4">
                    Continue with Email
                </button>
                <div className="flex justify-between mb-4">
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        Continue with Google
                    </button>
                    <button className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded shadow">
                        Continue with Apple
                    </button>
                </div>
                <p className="text-center text-blue-500 hover:text-blue-800 font-medium">
                    Already have an account? <a href="#">Sign In</a>
                </p>
            </div>
        </div>
    );
};

export default page;
