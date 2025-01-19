import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiVideo, FiTool, FiCompass } from 'react-icons/fi';

const LearnDesign = () => {
  const resources = [
    {
      icon: <FiBook className="text-2xl" />,
      title: "Design Fundamentals",
      description: "Master the basics of design theory and principles",
      color: "bg-purple-100"
    },
    {
      icon: <FiVideo className="text-2xl" />,
      title: "Video Tutorials",
      description: "Learn from expert-curated video content",
      color: "bg-blue-100"
    },
    {
      icon: <FiTool className="text-2xl" />,
      title: "Design Tools",
      description: "Get familiar with industry-standard design tools",
      color: "bg-green-100"
    },
    {
      icon: <FiCompass className="text-2xl" />,
      title: "Design Resources",
      description: "Access curated design resources and templates",
      color: "bg-orange-100"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">Learn Design</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
          Explore our comprehensive design learning resources and start your journey
          to becoming a professional designer.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
        {resources.map((resource, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${resource.color} rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all cursor-pointer`}
          >
            <div className="bg-white rounded-full w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center mb-4">
              {resource.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{resource.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{resource.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 sm:mt-16 text-center px-4"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Start Learning?</h2>
        <button className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-gray-800 transition-colors text-sm sm:text-base">
          Browse Courses
        </button>
      </motion.div>
    </div>
  );
};

export default LearnDesign;
