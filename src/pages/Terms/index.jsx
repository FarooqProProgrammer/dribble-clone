import React from 'react';
import { Helmet } from 'react-helmet';
import PageComponent from '../../components/PageComponent';

const Terms = () => {
  const sections = [
    {
      title: "1. Terms of Service",
      content: "By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement."
    },
    {
      title: "2. User Agreement",
      content: "You must be at least 18 years old to use this service. You are responsible for maintaining the confidentiality of your account."
    },
    {
      title: "3. Privacy Policy",
      content: "We respect your privacy and are committed to protecting your personal data. Please review our Privacy Policy to understand our practices."
    },
    {
      title: "4. Intellectual Property",
      content: "All content on this platform, including text, graphics, logos, and software, is the property of our company and protected by intellectual property laws."
    }
  ];

  return (
    <>
     <Helmet>
        <title>Terms And Condition | Dribble</title>
      </Helmet>
      <div className="bg-gray-50 min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Services</h1>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div> */}
          <PageComponent 
            title={'Terms and Services'}
            description={'By using our services, you agree to these terms. Please read them carefully. If you have any questions, please contact our support team.'}
          
          />

          <div className="bg-white rounded-xl shadow-lg p-8">
            {sections.map((section, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {section.content}
                </p>
                {index !== sections.length - 1 && (
                  <div className="border-b border-gray-200 my-8"></div>
                )}
              </div>
            ))}

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">
                By using our services, you agree to these terms. Please read them carefully.
                If you have any questions, please contact our support team.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-[#EA4C89] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Accept Terms
            </button>
          </div>
        </div>
      </div>
    </>

  );
};

export default Terms;
