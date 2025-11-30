import {Link} from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const [clickedOnLogin, setClickedOnLogin] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth);
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
              " onClick={() => {
                
              }}>Logout</button>
                ) : (
                  <button onClick={() => {
                  navigate({ to: "/auth" });
                  setClickedOnLogin((prev) => !prev);
                  if(clickedOnLogin){
                    navigate({ to: "/" });// Redirect to home if continuing without login
                    setClickedOnLogin(false);
                  }
                }} className="
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