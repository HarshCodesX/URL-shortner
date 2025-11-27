import {Link} from "@tanstack/react-router";

const Navbar = () => {
  return (
    <nav className='bg-white shadow-md'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16'>
                {/* Left side -App Name */}
                <div className='flex items-center'>
                    <Link to="/" className='text-xl font-bold text-gray-800'>
                        URL Shortner
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar