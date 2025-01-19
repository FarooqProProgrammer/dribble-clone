import React from 'react';
import { motion } from 'framer-motion';
import { FiDollarSign, FiClock, FiBriefcase, FiFileText, FiTag, FiUsers } from 'react-icons/fi';

const Freelance = () => {
  const categories = [
    "UI/UX Design", "Web Design", "Mobile App Design",
    "Brand Identity", "Illustration", "Motion Design"
  ];

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
    >
      <motion.div
        variants={itemVariants}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Post a Freelance Project</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Connect with talented designers and bring your project to life. Get matched with the perfect freelancer for your needs.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2"
        >
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Title
                </label>
                <input
                  type="text"
                  placeholder="Enter a clear title for your project"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description
                </label>
                <textarea
                  rows="4"
                  placeholder="Describe your project requirements in detail"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <div className="relative">
                    <FiDollarSign className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter your budget"
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Timeline
                  </label>
                  <div className="relative">
                    <FiClock className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Expected duration"
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {categories.map((category, index) => (
                    <label
                      key={index}
                      className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                    >
                      <input type="checkbox" className="h-4 w-4 border-gray-300 rounded" />
                      <span className="ml-2 text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Post Project
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="space-y-6"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-sm p-6"
          >
            <h3 className="text-lg font-semibold mb-4">Why Post on Dribbble?</h3>
            <ul className="space-y-4">
              {[
                { icon: <FiUsers />, text: "Access to top design talent" },
                { icon: <FiFileText />, text: "Detailed project matching" },
                { icon: <FiTag />, text: "Competitive pricing" },
                { icon: <FiBriefcase />, text: "Secure collaboration" }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <span className="text-black">{item.icon}</span>
                  {item.text}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-50 rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              Our project specialists are here to help you find the perfect designer for your project.
            </p>
            <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Contact Support
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Freelance;