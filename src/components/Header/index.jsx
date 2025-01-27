import React, { useState } from 'react'
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        // { name: 'Inspiration', path: '/inspiration' },
        { name: 'Find Work', path: '/find-work' },
        { name: 'Learn Design', path: '/learn-design' },
        { name: 'Go Pro', path: '/go-pro' },
        { name: 'Hire Designer', path: '/hire-designer' },
    ];

    return (
        <header className='sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100'>
            <div className='container mx-auto px-4'>
                <div className='flex justify-between items-center py-4'>
                    {/* Logo */}
                    <Link to="/" className='flex-shrink-0'>
                        <img src={logo} alt="Website Logo" className='h-8' />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className='hidden lg:flex items-center gap-8'>
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className='text-[#6e6d7a] text-sm hover:text-[#0d0c22] transition-colors duration-300'
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className='hidden lg:flex items-center gap-6'>
                        <button className='text-[#6e6d7a] hover:text-[#0d0c22] transition-colors duration-300'>
                            <CiSearch className='w-5 h-5' />
                        </button>
                        <Link to="/signin" className='text-[#6e6d7a] hover:text-[#0d0c22] text-sm font-medium transition-colors duration-300'>
                            Sign In
                        </Link>
                        <Link to="/signup" className='bg-[#ea4c89] hover:bg-[#df4881] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-300'>
                            Sign Up
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className='lg:hidden p-2 text-[#6e6d7a] hover:text-[#0d0c22] transition-colors duration-300'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <HiX className='w-6 h-6' /> : <HiMenuAlt3 className='w-6 h-6' />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden ${isMenuOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
                <div className='container mx-auto px-4 py-4 space-y-6 bg-white'>
                    <nav className='flex flex-col gap-4'>
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className='text-[#6e6d7a] text-sm hover:text-[#0d0c22] transition-colors duration-300 py-2'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    
                    <div className='flex flex-col gap-4 pt-4 border-t border-gray-100'>
                        <button className='flex items-center gap-2 text-[#6e6d7a] hover:text-[#0d0c22] transition-colors duration-300'>
                            <CiSearch className='w-5 h-5' />
                            <span className='text-sm'>Search</span>
                        </button>
                        <button className='w-full text-[#6e6d7a] hover:text-[#0d0c22] text-sm font-medium py-2 transition-colors duration-300'>
                            Sign In
                        </button>
                        <button className='w-full bg-[#ea4c89] hover:bg-[#df4881] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-300'>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
