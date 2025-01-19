import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram, FaPinterest, FaBehance } from 'react-icons/fa';
import logo from '../../assets/logo.svg';

const Footer = () => {
  const footerLinks = {
    forDesigners: [
      { name: 'Go Pro!', link: '/go-pro' },
      { name: 'Explore design work', link: '/explore' },
      { name: 'Design blog', link: '/blog' },
      { name: 'Overtime podcast', link: '/podcast' },
      { name: 'Playoffs', link: '/playoffs' },
      { name: 'Code of conduct', link: '/conduct' },
    ],
    hireDesigners: [
      { name: 'Post a job opening', link: '/jobs/new' },
      { name: 'Post a freelance project', link: '/freelance' },
      { name: 'Search for designers', link: '/designers' },
    ],
    brands: [
      { name: 'Advertise with us', link: '/advertise' },
      { name: 'Company', link: '/company' },
      { name: 'Careers', link: '/careers' },
    ],
    company: [
      { name: 'About', link: '/about' },
      { name: 'Careers', link: '/careers' },
      { name: 'Support', link: '/support' },
      { name: 'Media kit', link: '/media-kit' },
      { name: 'Testimonials', link: '/testimonials' },
      { name: 'API', link: '/api' },
      { name: 'Terms of service', link: '/terms' },
      { name: 'Privacy policy', link: '/privacy' },
    ],
  };

  const socialLinks = [
    { icon: <FaTwitter />, link: '#', label: 'Twitter' },
    { icon: <FaFacebookF />, link: '#', label: 'Facebook' },
    { icon: <FaInstagram />, link: '#', label: 'Instagram' },
    { icon: <FaPinterest />, link: '#', label: 'Pinterest' },
    { icon: <FaBehance />, link: '#', label: 'Behance' },
  ];

  return (
    <footer className="bg-[#fafafb] pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-8 pb-12 border-b border-gray-200">
          {/* Logo and Description Section */}
          <div className="lg:w-1/4 space-y-6">
            <img src={logo} alt="Dribbble" className="h-8" />
            <p className="text-[#6e6d7a] text-sm leading-relaxed">
              Dribbble is the world's leading community for creatives to share, grow, and get hired.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-8 h-8 flex items-center justify-center rounded-md bg-[#e7e7e9] text-[#6e6d7a] hover:bg-[#ea4c89] hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:w-3/4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links], index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-sm font-semibold text-[#0d0c22] uppercase">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.link}
                        className="text-sm text-[#6e6d7a] hover:text-[#ea4c89] transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            <span className="text-xs text-[#6e6d7a]">© 2024 Dribbble</span>
            <span className="text-xs text-[#6e6d7a]">Jobs</span>
            <span className="text-xs text-[#6e6d7a]">Designer Search</span>
            <span className="text-xs text-[#6e6d7a]">Freelance Projects</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs text-[#6e6d7a]">
              <span className="text-[#ea4c89]">♥</span> 12,536 shots dribbbled
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
