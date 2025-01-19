import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FiSearch, FiMapPin, FiDollarSign, FiClock, FiFilter } from 'react-icons/fi';

const FindWork = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const jobs = [
    {
      id: 1,
      title: 'Senior UI/UX Designer',
      company: 'Google',
      location: 'Remote',
      salary: '$80k - $120k',
      type: 'Full-time',
      logo: 'https://placehold.co/600x400',
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Microsoft',
      location: 'Seattle, WA',
      salary: '$90k - $130k',
      type: 'Full-time',
      logo: 'https://placehold.co/600x400',
      posted: '1 day ago'
    },
    {
      id: 3,
      title: 'Product Designer',
      company: 'Apple',
      location: 'San Francisco, CA',
      salary: '$100k - $150k',
      type: 'Contract',
      logo: 'https://placehold.co/600x400',
      posted: '3 days ago'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Find Design Jobs & Career Opportunities | Dribbble</title>
        <meta name="description" content="Browse the best design jobs at top companies. Find full-time, remote, contract, and freelance opportunities for designers." />
      </Helmet>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Find Your Next Opportunity</h1>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for jobs..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <button className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
                  Search Jobs
                </button>
                <button className="px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-pink-50 hover:text-pink-500 hover:border-pink-200 transition-colors flex items-center gap-2">
                  <FiFilter className="text-pink-500" />
                  <span>Filters</span>
                </button>
              </div>
            </div>
          </header>

          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-start gap-4">
                  <img src={job.logo} alt={job.company} className="w-16 h-16 rounded-lg object-cover" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                        <p className="text-gray-600">{job.company}</p>
                      </div>
                      <span className="text-sm text-gray-500">{job.posted}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1"><FiMapPin />{job.location}</span>
                      <span className="flex items-center gap-1"><FiDollarSign />{job.salary}</span>
                      <span className="flex items-center gap-1"><FiClock />{job.type}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FindWork;
