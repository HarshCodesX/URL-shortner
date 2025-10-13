import React, { useState } from "react";
import { registerUser } from "../api/user.api";

const RegisterForm = ({state}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        //validate form
        if(password.length < 6){
            setError("Password must be at least 6 characters long");
            return;
        }

        setLoading(true);
        setError('');

        try {
            await registerUser(name, email, password);
            setLoading(false);
        } 
        catch (error) {
            setLoading(false);
            setError(error.message || "Registration failed. Please try again");
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <div onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl font-bold text-center  mb-6">Create an Account</h2>
                    {error && (
                        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                            {error}
                        </div>
                    )}

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Full name</label>
                        <input 
                            type="text" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-70 leading-tight focus:outline-none focus:shadow-outline" 
                            id="name" 
                            placeholder="Full Name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input 
                            type="email" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-70 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input 
                            type="password" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-70 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            placeholder="*********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={6}
                        />
                    </div>
                
                    <div className="flex items-center justify-center">
                        <button 
                            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            type="submit"
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            {loading ? 'Creating...' : 'Create Account'}
                        </button>
                    </div>

                    <div className="text-center mt-4">
                        <p className="cursor-pointer text-sm text-gray-600">
                            Already have an account? <span onClick={() => state(true)} className="text-blue-500 hover:text-blue-700">Sign In</span>
                        </p>
                    </div>
            </div>
        </div>
    );
};

export default RegisterForm;