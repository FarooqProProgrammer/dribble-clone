import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const Explore = () => {
  const [selectedFilter, setSelectedFilter] = useState('popular');

  const filters = [
    { id: 'popular', name: 'Popular' },
    { id: 'new', name: 'New & Noteworthy' },
    { id: 'goods', name: 'Goods for Sale' },
    { id: 'following', name: 'Following' }
  ];

  const categories = [
    'Animation', 'Branding', 'Illustration', 'Mobile', 'Print', 'Typography', 'Web Design'
  ];

  const shots = [
    {
      id: 1,
      title: "Mobile App Design",
      image: "https://placehold.co/600x400",
      author: "Jane Cooper",
      likes: 234,
      views: 1200
    },
    {
      id: 2,
      title: "Website Redesign",
      image: "https://placehold.co/600x400",
      author: "John Smith",
      likes: 456,
      views: 2300
    },
    {
      id: 3,
      title: "Website Redesign",
      image: "https://placehold.co/600x400",
      author: "John Smith",
      likes: 456,
      views: 2300
    },
    {
      id: 4,
      title: "Website Redesign",
      image: "https://placehold.co/600x400",
      author: "John Smith",
      likes: 456,
      views: 2300
    },


    // Add more shots as needed
  ];

  return (
    <>
      <Helmet>
        <title>Explore Design Work | Popular Shots | Dribbble</title>
        <meta name="description" content="Discover the world's top designers & creatives. Explore trending design work from illustration to web design, mobile apps, print and more." />
      </Helmet>
      <div className="min-h-screen bg-gray-50 px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Explore Design Work</h1>
            <p className="text-gray-600 mt-2">Trending designs to inspire you</p>
          </div>

          {/* Filters */}
          <div className="flex overflow-x-auto pb-2 mb-6 sm:mb-8 hide-scrollbar">
            <div className="flex gap-4 min-w-max">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-full ${
                    selectedFilter === filter.id
                      ? 'bg-[#EA4C89] text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  } transition-colors duration-200`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="overflow-x-auto pb-2 mb-6 sm:mb-8 hide-scrollbar">
            <div className="flex gap-3 min-w-max">
              {categories.map(category => (
                <button
                  key={category}
                  className="px-4 py-1 rounded-full bg-white text-sm text-gray-700 hover:bg-gray-100 border border-gray-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Shots */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {shots.map(shot => (
              <div key={shot.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="relative pt-[75%]">
                  <img
                    src={shot.image}
                    alt={shot.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">{shot.title}</h3>
                    <button className="text-[#EA4C89] hover:text-[#F082AC]">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"/>
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm text-gray-600">by {shot.author}</p>
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <span>{shot.likes} likes</span>
                      <span>{shot.views} views</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-[#EA4C89] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300">
              Load More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
