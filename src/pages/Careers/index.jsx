import React from 'react'
import { Helmet } from 'react-helmet';
import PageComponent from '../../components/PageComponent';

const Careers = () => {
  const jobs = [
    { title: 'Senior Product Designer', location: 'Remote', type: 'Full-time' },
    { title: 'Frontend Developer', location: 'New York', type: 'Full-time' },
    { title: 'Marketing Manager', location: 'Remote', type: 'Full-time' },
    { title: 'UX Researcher', location: 'San Francisco', type: 'Full-time' },
  ];

  const benefits = [
    { title: 'Flexible Work', description: 'Work from anywhere, anytime' },
    { title: 'Health Insurance', description: 'Comprehensive medical coverage' },
    { title: 'Learning Budget', description: 'Annual budget for courses and conferences' },
    { title: 'Paid Time Off', description: 'Generous vacation and personal days' },
  ];

  return (
    <>


      <Helmet>
        <title>Careers | Dribbble</title>
      </Helmet>


      <div className="min-h-screen">
        {/* Hero Section */}
        <div className=" py-20">
        <PageComponent 
          title={'Join Our Team'}
          description={'We are always looking for talented individuals to join our team.'}
        />

        </div>

        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
          <div className="grid gap-4">
            {jobs.map((job, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <div className="flex gap-4 text-gray-600">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Why work with us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Careers
