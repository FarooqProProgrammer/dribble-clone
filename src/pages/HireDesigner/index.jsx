import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter, FiBriefcase, FiStar, FiUser, FiMapPin } from 'react-icons/fi';

const HireDesigner = () => {
  const designers = [
    {
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      location: "San Francisco, CA",
      rating: 4.9,
      projects: 124,
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      specialty: ["Mobile Design", "Web Design", "Branding"]
    },
    {
      name: "Mike Chen",
      role: "Product Designer",
      location: "New York, NY",
      rating: 4.8,
      projects: 98,
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      specialty: ["Product Design", "Design Systems", "Prototyping"]
    },
    {
      name: "Emma Wilson",
      role: "Visual Designer",
      location: "London, UK",
      rating: 4.7,
      projects: 156,
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      specialty: ["Illustration", "Brand Identity", "Motion Design"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Hire the World's Best Designers</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Connect with top-tier designers who can bring your vision to life. Find the perfect match for your project needs.
        </p>
      </motion.div>

      <div className="mb-12">
        <div className="bg-white rounded-xl shadow-sm border p-4 sm:p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search designers by skill, location, or name"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              <FiFilter />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designers.map((designer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <img
                  src={designer.avatar}
                  alt={designer.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{designer.name}</h3>
                  <p className="text-gray-600 text-sm">{designer.role}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <FiMapPin className="text-gray-400" />
                    <span>{designer.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 my-4 text-sm">
                <div className="flex items-center gap-1">
                  <FiStar className="text-yellow-400" />
                  <span>{designer.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiBriefcase className="text-gray-400" />
                  <span>{designer.projects} projects</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {designer.specialty.map((skill, i) => (
                  <span key={i} className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>

              <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
                View Profile
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center bg-gray-50 rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold mb-4">Can't find the right designer?</h2>
        <p className="text-gray-600 mb-6">Post a job and let designers come to you</p>
        <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
          Post a Job
        </button>
      </motion.div>
    </div>
  );
};

export default HireDesigner;