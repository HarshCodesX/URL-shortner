import {useState} from "react";
import { loginUser } from "../api/user.api";
import { login } from "../store/slice/authSlice.js";
import {useNavigate} from "@tanstack/react-router";

//redux
import { useSelector, useDispatch } from "react-redux";

const LoginForm = ({state}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    console.log(auth);

    const handleSubmit = async (e) => {
        setLoading(true);
        setError("");

        try {
            const data = await loginUser(email, password);
            dispatch(login(data.user));
            setLoading(false);
            navigate({to:"/dashboard"});
        } 
        catch (error) {
            setLoading(false);
            setError(error.message || "Login failed, Please check your credentials");
        }
    };
    return (
        <div className="w-full max-w-md mx-auto">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">{error}</div>
                )}

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input 
                        type="email" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email"
                        placeholder="Email"
                        value={email}
                        onChange={((e) => setEmail(e.target.value))}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-grap-700 text-sm dont-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input 
                        type="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        placeholder="*************"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                        required
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button 
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full
                        ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
                        type="submit"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? 'Signing in...' : 'Sign in'}
                    </button>
                </div>

                <div className="text-center mt-4">
                    <p className="cursor-pointer text-sm text-gray-600">
                        Don't have an account? <span onClick={() => state(false)} className="text-blue-700">Register</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;