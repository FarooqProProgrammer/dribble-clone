import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FiUsers, FiGrid, FiGlobe, FiAward } from 'react-icons/fi';
import PageComponent from '../../components/PageComponent';
import Newsletter from '../../components/Newsletter';

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

        <PageComponent
          title={'About Dribbble'}
          description={'Dribbble is the world\'s leading community for creatives to share, grow, and get hired.'}
        />

        {/* Stats Section with improved UI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
              <div className="text-4xl text-[#EA4C89] mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section with improved UI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section with improved UI */}
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
                whileHover={{ y: -5 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] transition-all duration-300 text-center border border-gray-100"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-pink-50"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{member.name}</h3>
                <p className="text-[#EA4C89] font-medium mb-3">{member.role}</p>
                <p className="text-sm italic text-gray-600">"{member.quote}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <div className="mt-20">
          <Newsletter />
        </div>

      </div>
    </>
  );
};

export default About;
