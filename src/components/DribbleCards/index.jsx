import React, { useState } from 'react';
import Select from "react-tailwindcss-select";
import { FaFilter, FaHeart, FaEye, FaFire } from 'react-icons/fa';

const DribbleCards = () => {

    const options = [
        { value: "popular", label: "Popular" },
        { value: "noteworthy", label: "Noteworthy" },
    ];

    const filterOptions = [
        { value: "all", label: "All" },
        { value: "animation", label: "Animation" },
        { value: "branding", label: "Branding" },
        { value: "illustration", label: "Illustration" },
        { value: "mobile", label: "Mobile" },
        { value: "print", label: "Print" },
        { value: "product", label: "Product" },
        { value: "typography", label: "Typography" },
        { value: "web", label: "Web" },
    ];

    const [category, setCategory] = useState(null);
    const [filter, setFilter] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleCategoryChange = value => {
        console.log("Category value:", value);
        setCategory(value);
    };

    const handleFilterChange = value => {
        console.log("Filter value:", value);
        setFilter(value);
    };

    const cards = [
        { name: 'Tohid Ahmed | Logo Brand', img: 'https://cdn.dribbble.com/userupload/18609035/file/original-beb17b239ec9a3c229dd48e7ae19de1e.jpg?format=webp&resize=1200x900&vertical=center' },
        { name: 'John Doe | Web Design', img: 'https://cdn.dribbble.com/userupload/18609202/file/original-f669f700601a139bf5ba0f6f95bf8193.jpg?format=webp&resize=1200x900&vertical=center' },
        { name: 'Jane Smith | Mobile App', img: 'https://cdn.dribbble.com/userupload/18606688/file/original-f4e43f8572d38989fa4d65ab8b19c7ab.jpg?format=webp&resize=320x240&vertical=center' },
        { name: 'Alice Johnson | Illustration', img: 'https://cdn.dribbble.com/userupload/18606762/file/original-98063d2047122173f95fe7af92314a67.jpg?format=webp&resize=320x240&vertical=center' },
        { name: 'Bob Brown | Branding', img: 'https://cdn.dribbble.com/userupload/18549938/file/original-9aa6952b1a9222694230ce1881c3e665.jpg?format=webp&resize=320x240&vertical=center' },
        { name: 'Charlie Davis | Animation', img: 'https://cdn.dribbble.com/userupload/18586380/file/original-33f225d69bc012f61fec257aa90e4265.png?format=webp&resize=320x240&vertical=center' },
        { name: 'Diana Evans | Typography', img: 'https://cdn.dribbble.com/userupload/18609130/file/original-f5912361c9668b63cd12c4943c10ea2f.jpg?format=webp&resize=320x240&vertical=center' },
        { name: 'Eve Foster | Print Design', img: 'https://cdn.dribbble.com/userupload/18611518/file/original-d9fb644e19793cdd306b9eb5313531b1.jpg?format=webp&resize=320x240&vertical=center' },
        { name: 'Frank Green | Product Design', img: 'https://cdn.dribbble.com/userupload/18433072/file/original-954a4f570be08477abb8f73cef96f22f.png?format=webp&resize=320x240&vertical=center' },
        { name: 'Grace Harris | UX/UI', img: 'https://cdn.dribbble.com/userupload/18573507/file/original-173dcc8665f8c99660b026084f2e03a8.jpg?crop=0x0-2800x2100&format=webp&resize=320x240&vertical=center' },
        { name: 'Hannah White | Graphic Design', img: 'https://cdn.dribbble.com/userupload/18581194/file/original-4d171e48514b40b2835b69226934a102.jpg?crop=0x0-3333x2500&format=webp&resize=320x240&vertical=center' },
        { name: 'Ian Black | Motion Graphics', img: 'https://cdn.dribbble.com/userupload/18195204/file/original-16f00eeeb912f45bcac8d4201da396c0.jpg?format=webp&resize=320x240&vertical=center' },
    ].map(card => ({
        ...card,
        likes: Math.floor(Math.random() * 1000),
        views: Math.floor(Math.random() * 10000)
    }));

    return (
        <div className='container mx-auto px-4 py-10'>
            {/* New Heading Section */}
            <div className='mb-12 text-center max-w-3xl mx-auto'>
                <div className='flex items-center justify-center gap-2 mb-4'>
                    <FaFire className='text-[#ea4c89] text-2xl' />
                    <span className='text-sm font-medium text-[#ea4c89]'>Popular Shots</span>
                </div>
                <h2 className='text-3xl md:text-4xl font-bold text-[#0d0c22] mb-4'>
                    Explore Inspiring Digital Designs
                </h2>
                <p className='text-[#6e6d7a] text-lg leading-relaxed'>
                    Discover the best shots from designers worldwide. Get inspired by the latest trends in web, mobile, branding, and more.
                </p>
            </div>

            <div className='flex flex-col sm:flex-row justify-between items-center gap-4 mb-8'>
                <div className='w-full sm:w-[200px]'>
                    <Select
                        value={category}
                        onChange={handleCategoryChange}
                        options={options}
                        className="hover:border-pink-500 transition-all"
                        placeholder='Popular'
                    />
                </div>
                <div className='w-full sm:w-[200px] flex items-center gap-2'>
                    <FaFilter className='text-[#6e6d7a]' />
                    <Select
                        value={filter}
                        onChange={handleFilterChange}
                        options={filterOptions}
                        className="hover:border-pink-500 transition-all"
                        placeholder='Filter'
                    />
                </div>
            </div>

            <div className='grid mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {cards.map((card, index) => (
                    <div key={index} className='group relative bg-[#1c1c1c] rounded-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl'>
                        <div className='relative overflow-hidden'>
                            <img 
                                className='w-full h-[200px] object-cover transform transition-transform group-hover:scale-105' 
                                src={card.img} 
                                alt={card.name}
                                loading="lazy"
                            />
                            <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100'>
                                <div className='flex gap-4 text-white'>
                                    <div className='flex items-center gap-1'>
                                        <FaHeart /> <span>{card.likes}</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaEye /> <span>{card.views}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-sm font-medium text-[rgba(255,255,255,0.9)] truncate'>
                                    {card.name}
                                </h2>
                            </div>
                            <div className='mt-2 flex items-center gap-2'>
                                <div className='w-6 h-6 rounded-full bg-pink-500'></div>
                                <span className='text-xs text-[#6e6d7a]'>Pro Member</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {isLoading && (
                <div className='flex justify-center items-center py-8'>
                    <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500'></div>
                </div>
            )}

            <div className='flex justify-center mt-10'>
                <button 
                    className='bg-transparent border border-[#6e6d7a] text-[#6e6d7a] px-6 py-3 rounded-lg hover:bg-pink-500 hover:border-pink-500 hover:text-white transition-all'
                    onClick={() => setIsLoading(true)}
                >
                    Load More
                </button>
            </div>
        </div>
    );
}

export default DribbleCards;
