import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    const privacySections = [
        {
            title: "Information We Collect",
            content: [
                "Personal information (name, email, contact details)",
                "Usage data and analytics",
                "Device and browser information",
                "Cookies and tracking technologies"
            ]
        },
        {
            title: "How We Use Your Information",
            content: [
                "To provide and maintain our services",
                "To notify you about changes to our services",
                "To provide customer support",
                "To gather analysis or valuable information"
            ]
        },
        {
            title: "Information Sharing",
            content: [
                "We do not sell your personal data",
                "Data shared with service providers",
                "Legal requirements and business transfers",
                "With your consent"
            ]
        },
        {
            title: "Your Privacy Rights",
            content: [
                "Access your personal data",
                "Correct your personal data",
                "Delete your personal data",
                "Object to processing of your personal data"
            ]
        }
    ];

    return (
        <>
            <Helmet>
                <title>Privacy Policy | Dribble</title>
            </Helmet>


            <div className="bg-gray-50 min-h-screen py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                        <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="mb-8">
                            <p className="text-gray-600 leading-relaxed">
                                At Dribbble, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                                disclose, and safeguard your information when you use our service.
                            </p>
                        </div>

                        {privacySections.map((section, index) => (
                            <div key={index} className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    {section.title}
                                </h2>
                                <ul className="space-y-3">
                                    {section.content.map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="text-[#EA4C89] mr-2">•</span>
                                            <span className="text-gray-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                {index !== privacySections.length - 1 && (
                                    <div className="border-b border-gray-200 my-8"></div>
                                )}
                            </div>
                        ))}

                        <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Contact Us</h3>
                            <p className="text-gray-600 mb-4">
                                If you have any questions about this Privacy Policy, please contact us:
                            </p>
                            <Link
                                to="mailto:privacy@dribbble.com"
                                className="text-[#EA4C89] hover:underline"
                            >
                                privacy@dribbble.com
                            </Link>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <button className="bg-[#EA4C89] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300">
                            I Accept
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default PrivacyPolicy;
