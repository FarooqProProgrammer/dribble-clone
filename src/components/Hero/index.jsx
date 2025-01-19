import React from 'react';
import { CiSearch } from "react-icons/ci";
import { motion } from 'framer-motion';
import { FaChevronRight, FaPlay, FaArrowRight } from 'react-icons/fa';
import "./index.css";

const Hero = () => {
    const trendingSearches = ['landing page', 'ios', 'food', 'landingpage', 'ux design', 'app design'];
    const featuredWorks = [
        { img: 'https://cdn.dribbble.com/userupload/18609035/file/original-beb17b239ec9a3c229dd48e7ae19de1e.jpg', title: 'Web Design', creator: 'John Doe' },
        { img: 'https://cdn.dribbble.com/userupload/18609202/file/original-f669f700601a139bf5ba0f6f95bf8193.jpg', title: 'Mobile App', creator: 'Jane Smith' },
        { img: 'https://cdn.dribbble.com/userupload/18606688/file/original-f4e43f8572d38989fa4d65ab8b19c7ab.jpg', title: 'Brand Identity', creator: 'Mike Johnson' },
    ];

    return (
        <div className="bg-gradient-to-b from-[#f8f7f4] to-white py-20 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 -left-10 w-40 h-40 bg-pink-100 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-20 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-30" />
                <div className="absolute top-40 right-1/4 w-20 h-20 bg-yellow-100 rounded-full blur-2xl opacity-20" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center space-y-8"
                >
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl font-bold text-[#0d0c22] leading-tight">
                        Discover the World's Top
                        <div className="text-[#ea4c89] mt-2">Designers & Creatives</div>
                    </h1>

                    {/* Subheading with Gradient */}
                    <p className="text-lg md:text-xl text-[#6e6d7a] max-w-2xl mx-auto leading-relaxed">
                        Join over <span className="text-[#ea4c89] font-semibold">7 million+</span> designers showcasing their work and growing their career
                    </p>

                    {/* Enhanced Search Bar */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="relative max-w-2xl mx-auto mt-8"
                    >
                        <div className="absolute inset-y-0 left-0 pl-4 sm:pl-5 flex items-center pointer-events-none">
                            <CiSearch className="h-5 w-5 sm:h-6 sm:w-6 text-[#6e6d7a]" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search inspiration..."
                            className="w-full pl-12 sm:pl-14 pr-4 py-3 sm:py-4 text-sm sm:text-base md:text-lg rounded-2xl border border-[#e7e7e9] focus:border-[#ea4c89] focus:ring-2 focus:ring-[#ea4c89] focus:ring-opacity-20 transition-all outline-none text-[#0d0c22] placeholder:text-[#6e6d7a] placeholder:text-sm sm:placeholder:text-base"
                        />
                        <div className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#6e6d7a]">
                            Press <kbd className="mx-1 px-2 py-0.5 bg-gray-100 rounded">⌘</kbd> + <kbd className="mx-1 px-2 py-0.5 bg-gray-100 rounded">K</kbd> to search
                        </div>
                    </motion.div>

                    {/* Trending Tags */}
                    <div className="flex flex-wrap justify-center gap-3">
                        <span className="text-sm text-[#6e6d7a]">Popular searches:</span>
                        {trendingSearches.map((tag, index) => (
                            <button
                                key={index}
                                className="px-4 py-2 text-sm bg-white rounded-full text-[#0d0c22] hover:bg-[#f3f3f4] transition-colors duration-300 shadow-sm hover:shadow border border-[#e7e7e9] flex items-center gap-2 group"
                            >
                                {tag}
                                <FaChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                        ))}
                    </div>

                    {/* Featured Works Grid */}
                    <div className="mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {featuredWorks.map((work, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    key={index}
                                    className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                                >
                                    <div className="aspect-w-4 aspect-h-3">
                                        <img
                                            src={work.img}
                                            alt={work.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 p-4 text-white">
                                            <h3 className="text-lg font-semibold">{work.title}</h3>
                                            <p className="text-sm opacity-90">by {work.creator}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#ea4c89] text-white px-8 py-4 rounded-xl hover:bg-[#df4881] transition-colors mt-8 flex items-center gap-3 mx-auto"
                    >
                        <FaPlay className="w-4 h-4" />
                        See how it works
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
