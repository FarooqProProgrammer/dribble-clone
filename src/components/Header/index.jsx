import React, { useState, useRef, useEffect } from 'react'
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
    const searchRef = useRef(null);
    const mobileSearchRef = useRef(null);

    // Close search dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const menuItems = [
        // { name: 'Inspiration', path: '/inspiration' },
        { name: 'Find Work', path: '/find-work' },
        { name: 'Learn Design', path: '/learn-design' },
        { name: 'Go Pro', path: '/go-pro' },
        { name: 'Hire Designer', path: '/hire-designer' },
    ];

    return (
        <header className='sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100'>
            {/* Mobile Search Overlay */}
            <AnimatePresence>
                {isMobileSearchOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-white z-50 lg:hidden"
                        ref={mobileSearchRef}
                    >
                        <div className="p-4">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3 flex-1">
                                    <CiSearch className="w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search Dribbble..."
                                        className="w-full bg-transparent outline-none text-sm"
                                        autoFocus
                                    />
                                </div>
                                <button
                                    onClick={() => setIsMobileSearchOpen(false)}
                                    className="p-2 text-gray-500"
                                >
                                    <HiX className="w-6 h-6" />
                                </button>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xs font-medium text-gray-500 mb-2">POPULAR SEARCHES</h3>
                                <div className="space-y-2">
                                    {['landing page', 'ios', 'food', 'landingpage', 'ux design', 'app design'].map((term, index) => (
                                        <button
                                            key={index}
                                            className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                        >
                                            {term}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                        <button className='text-[#6e6d7a] hover:text-[#0d0c22] text-sm font-medium transition-colors duration-300'>
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
                        <button 
                            className='flex items-center gap-2 text-[#6e6d7a] hover:text-[#0d0c22] transition-colors duration-300'
                            onClick={() => {
                                setIsMobileSearchOpen(true);
                                setIsMenuOpen(false);
                            }}
                        >
                            <CiSearch className='w-5 h-5' />
                            <span className='text-sm'>Search</span>
                        </button>
                        <Link to="/signin" className='w-full text-[#6e6d7a] hover:text-[#0d0c22] text-sm font-medium py-2 transition-colors duration-300'>
                            Sign In
                        </Link>
                        <Link to="/signup" className='w-full bg-[#ea4c89] hover:bg-[#df4881] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-300'>
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
