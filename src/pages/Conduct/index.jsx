import React from 'react';
import { Helmet } from 'react-helmet';
import PageComponent from '../../components/PageComponent';

const Conduct = () => {
  const guidelines = [
    {
      title: "Respectful Interaction",
      content: "Treat all members of our community with respect, kindness, and empathy. We have zero tolerance for harassment, discrimination, or hostile behavior.",
      icon: "👥"
    },
    {
      title: "Professional Content",
      content: "Share work that's appropriate for a professional design community. Avoid explicit, offensive, or inappropriate content.",
      icon: "🎨"
    },
    {
      title: "Authentic Engagement",
      content: "Engage authentically with the community. Don't spam, manipulate engagement, or participate in deceptive practices.",
      icon: "💬"
    },
    {
      title: "Intellectual Property",
      content: "Respect intellectual property rights. Only share work you have the right to share, and properly credit others' work.",
      icon: "⚖️"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Code of Conduct | Dribbble</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <PageComponent 
            title={'Code of Conduct'}
            description={'Our community guidelines ensure Dribbble remains a respectful, supportive space for designers to share, learn, and grow together. We are committed to maintaining a positive and inclusive environment for all members.'}
          />

          {/* Guidelines Grid */}
          <div className="grid gap-8 md:grid-cols-2 mb-12">
            {guidelines.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Reporting Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Reporting Violations</h2>
            <p className="text-gray-600 mb-6">
              If you witness behavior that violates our code of conduct, please report it immediately.
              We take all reports seriously and will investigate promptly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#EA4C89] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300">
                Report an Issue
              </button>
              <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                Contact Support
              </button>
            </div>
          </div>

          {/* Enforcement Section */}
          <div className="bg-gray-100 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Enforcement</h2>
            <p className="text-gray-600 mb-4">
              Violations of this code of conduct may result in:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Content removal</li>
              <li>Temporary suspension</li>
              <li>Permanent account termination</li>
              <li>Legal action when necessary</li>
            </ul>
          </div>

          {/* Update Notice */}
          <div className="text-center mt-12 text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </>

  );
};

export default Conduct;