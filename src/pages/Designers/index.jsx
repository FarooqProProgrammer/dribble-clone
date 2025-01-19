import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const Designers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);

  const skills = ['UI Design', 'UX Design', 'Illustration', 'Brand Design', 'Web Design', 'Mobile Design', '3D Design'];

  const designers = [
    {
      id: 1,
      name: "Alex Morgan", role: "Senior UI Designer",
      location: "San Francisco, CA",
      available: true,
      avatar: "https://placehold.co/100x100",
      cover: "https://placehold.co/400x200",
      skills: ["UI Design", "Web Design"],
      followers: 2300,
      shots: 48
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Product Designer",
      location: "London, UK",
      available: false,
      avatar: "https://placehold.co/100x100",
      cover: "https://placehold.co/400x200",
      skills: ["UX Design", "Mobile Design"],
      followers: 1800,
      shots: 36
    },
    // Add more designers as needed
  ];

  return (
    <>

      <Helmet>
        <title>Designers | Dribbble</title>
      </Helmet>


      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Designers</h1>
            <p className="text-gray-600">Discover talented designers available for hire</p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search designers..."
                    className="w-full px-4 py-3 pl-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EA4C89] focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <svg className="w-6 h-6 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Location Dropdown */}
              <div className="w-full lg:w-48">
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EA4C89] focus:border-transparent">
                  <option value="">Any Location</option>
                  <option value="remote">Remote</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                </select>
              </div>
            </div>

            {/* Skills Filter */}
            <div className="mt-4 overflow-x-auto">
              <div className="flex flex-wrap gap-2 min-w-max pb-2">
                {skills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => setSelectedSkills(prev =>
                      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
                    )}
                    className={`px-4 py-2 rounded-full text-sm ${selectedSkills.includes(skill)
                      ? 'bg-[#EA4C89] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      } transition-colors duration-200`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Designers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {designers.map((designer) => (
              <div key={designer.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                {/* Cover Image */}
                <div className="relative h-32">
                  <img src={designer.cover} alt="" className="w-full h-full object-cover" />
                  <img
                    src={designer.avatar}
                    alt={designer.name}
                    className="absolute -bottom-6 left-6 w-16 h-16 rounded-full border-4 border-white"
                  />
                </div>

                {/* Designer Info */}
                <div className="p-6 pt-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{designer.name}</h3>
                      <p className="text-gray-600 text-sm">{designer.role}</p>
                      <p className="text-gray-500 text-sm mt-1">{designer.location}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs ${designer.available ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                      }`}>
                      {designer.available ? 'Available' : 'Unavailable'}
                    </span>
                  </div>

                  {/* Skills */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {designer.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="mt-4 flex justify-between items-center pt-4 border-t">
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span>{designer.followers} followers</span>
                      <span>{designer.shots} shots</span>
                    </div>
                    <button className="text-[#EA4C89] hover:text-[#F082AC]">
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-8 sm:mt-12">
            <button className="bg-[#EA4C89] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300">
              Load More Designers
            </button>
          </div>
        </div>
      </div>
    </>

  );
};

export default Designers;