import {Link} from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../api/user.api";
import { logout } from "../store/slice/authSlice.js";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [clickedOnLogin, setClickedOnLogin] = useState(false);
  const [error, setError] = useState("");
  const { isAuthenticated } = useSelector((state) => state.auth);
  
  //handle login function
  const handleLogin = () => {
                  navigate({ to: "/auth" });
                  setClickedOnLogin((prev) => !prev);
                  if(clickedOnLogin){
                    navigate({ to: "/" }); // Redirect to home if continuing without login
                    setClickedOnLogin(false);
                  }
  }

  //handle logout function
  const handleLogout = async () => {
    try {
      const data = await logoutUser();
      dispatch(logout());
      console.log(data);
      navigate({ to: "/" });
    } catch (error) {
      setError(error.message || "Logout failed, Please try again");
    }
  }

  return (
    <nav className='bg-white shadow-md'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16 items-center'>
                {/* Left side -App Name */}
                <div className='flex items-center'>
                    <Link to="/" className='text-xl font-bold text-gray-800'>
                        URL Shortner
                    </Link>
                </div>
                {isAuthenticated ? (
                  <button className="
                px-6 py-3
                bg-blue-600 text-white 
                rounded-lg 
                font-medium 
                shadow-sm 
                hover:bg-blue-700 
                transition-all 
                duration-200 
                hover:shadow 
                cursor-pointer
              " onClick={handleLogout}>Logout</button>
                ) : (
                  <button onClick={handleLogin} className="
                px-6 py-3
                bg-blue-600 text-white 
                rounded-lg 
                font-medium 
                shadow-sm 
                hover:bg-blue-700 
                transition-all 
                duration-200 
                hover:shadow 
                cursor-pointer
              " >{clickedOnLogin ? "Continue without login" : "Login"}</button>
                )}
            </div>
        </div>
    </nav>
  )
}

export default Navbar;