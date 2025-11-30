import {Link} from "@tanstack/react-router";

const Navbar = () => {
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
                <button onClick={() => {
                  
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
              " >Login</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;