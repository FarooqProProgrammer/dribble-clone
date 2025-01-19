import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FiUsers, FiGrid, FiGlobe, FiAward } from 'react-icons/fi';

const About = () => {
  const stats = [
    { icon: <FiUsers />, number: "5M+", label: "Designers" },
    { icon: <FiGrid />, number: "15M+", label: "Projects" },
    { icon: <FiGlobe />, number: "195+", label: "Countries" },
    { icon: <FiAward />, number: "12+", label: "Years" }
  ];

  const values = [
    {
      title: "Community First",
      description: "We believe in the power of community and creative collaboration."
    },
    {
      title: "Design Excellence",
      description: "We champion creativity and push the boundaries of design innovation."
    },
    {
      title: "Global Impact",
      description: "We connect designers worldwide and create opportunities for all."
    },
    {
      title: "Continuous Growth",
      description: "We support designers in their journey of continuous learning."
    }
  ];

  const team = [
    {
      name: "Sarah Williams",
      role: "CEO & Founder",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      quote: "Building the future of design collaboration"
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      quote: "Empowering designers worldwide"
    },
    {
      name: "Emma Thompson",
      role: "Community Lead",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      quote: "Creating meaningful connections"
    },
    {
      name: "David Kim",
      role: "Product Director",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      quote: "Innovating design solutions"
    }
  ];

  const milestones = [
    { year: "2009", event: "Dribbble was founded" },
    { year: "2012", event: "Reached 1 million users" },
    { year: "2016", event: "Launched Pro features" },
    { year: "2020", event: "Global expansion" },
    { year: "2023", event: "5 million+ active designers" }
  ];

  return (
    <>
      <Helmet>
        <title>About | Dribbble</title>
        <meta name="description" content="Learn more about Dribbble - the world's leading community for creatives to share, grow, and get hired." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Dribbble</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Dribbble is the world's leading community for creatives to share, grow, and get hired.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl text-black mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold mb-1">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="my-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-1/2 px-8">
                    <div className={`bg-white p-6 rounded-xl shadow-sm ${index % 2 === 0 ? 'text-right' : ''}`}>
                      <div className="text-2xl font-bold text-black">{milestone.year}</div>
                      <div className="text-gray-600">{milestone.event}</div>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-black rounded-full relative z-10"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="my-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 shadow-sm text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-3">{member.role}</p>
                <p className="text-sm italic text-gray-500">"{member.quote}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl p-12 text-center mt-20"
        >
          <h2 className="text-3xl font-bold mb-6">Want to Know More?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Reach out to our team to learn more about how Dribbble can help you grow your design career or build your design team.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors">
              View Careers
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
