import React, { useState } from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';

const Inspiration = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const inspirationItems = [
    { id: 1, title: 'Modern Dashboard', category: 'Web Design', image: 'https://source.unsplash.com/random/400x300?dashboard' },
    { id: 2, title: 'Mobile App UI', category: 'Mobile', image: 'https://source.unsplash.com/random/400x300?mobile' },
    { id: 3, title: 'Landing Page', category: 'Web Design', image: 'https://source.unsplash.com/random/400x300?website' },
    { id: 4, title: 'Brand Identity', category: 'Branding', image: 'https://source.unsplash.com/random/400x300?brand' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Find Inspiration</h1>
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for inspiration..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-pink-50 hover:text-pink-500 hover:border-pink-200 transition-colors">
              <FiFilter className="text-pink-500" />
              <span>Filter</span>
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inspirationItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
