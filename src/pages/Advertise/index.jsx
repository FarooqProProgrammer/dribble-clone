import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const Advertise = () => {
    const [billingPeriod, setBillingPeriod] = useState('monthly');

    const pricingPlans = [
        {
            name: "Basic",
            monthly: 299,
            yearly: 3299,
            features: [
                "1 Featured Job Posting",
                "30 Days Visibility",
                "Basic Analytics",
                "Email Support"
            ],
            recommended: false
        },
        {
            name: "Professional",
            monthly: 499,
            yearly: 5399,
            features: [
                "3 Featured Job Postings",
                "60 Days Visibility",
                "Advanced Analytics",
                "Priority Support",
                "Company Profile Highlight"
            ],
            recommended: true
        },
        {
            name: "Enterprise",
            monthly: 899,
            yearly: 9599,
            features: [
                "10 Featured Job Postings",
                "90 Days Visibility",
                "Premium Analytics",
                "24/7 Support",
                "Custom Company Page",
                "Talent Pipeline Access"
            ],
            recommended: false
        }
    ];

    const benefits = [
        {
            title: "Global Reach",
            description: "Connect with millions of talented designers worldwide",
            icon: "🌍"
        },
        {
            title: "Quality Talent",
            description: "Access to top-tier creative professionals",
            icon: "⭐"
        },
        {
            title: "Brand Exposure",
            description: "Showcase your brand to our engaged community",
            icon: "📢"
        },
        {
            title: "Fast Results",
            description: "Quick access to qualified candidates",
            icon: "⚡"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Advertise | Post Jobs & Reach Designers | Dribbble</title>
                <meta name="description" content="Advertise your job postings and reach millions of talented designers worldwide. Choose from flexible plans to find the perfect creative professionals for your team." />
            </Helmet>
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="bg-[#EA4C89] text-white py-20 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Advertise on the World's Leading Design Platform
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
                            Reach millions of creative professionals and hire the perfect talent for your team.
                        </p>
                        <div className="inline-flex bg-white rounded-lg p-1">
                            <button
                                onClick={() => setBillingPeriod('monthly')}
                                className={`px-6 py-2 rounded-md transition-colors ${billingPeriod === 'monthly'
                                        ? 'bg-[#EA4C89] text-white'
                                        : 'text-gray-600'
                                    }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setBillingPeriod('yearly')}
                                className={`px-6 py-2 rounded-md transition-colors ${billingPeriod === 'yearly'
                                        ? 'bg-[#EA4C89] text-white'
                                        : 'text-gray-600'
                                    }`}
                            >
                                Yearly (Save 10%)
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pricing Plans */}
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-3 gap-8">
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-xl p-8 ${plan.recommended
                                        ? 'ring-2 ring-[#EA4C89] relative'
                                        : 'shadow-sm'
                                    }`}
                            >
                                {plan.recommended && (
                                    <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#EA4C89] text-white px-4 py-1 rounded-full text-sm">
                                        Recommended
                                    </span>
                                )}
                                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold">${billingPeriod === 'monthly' ? plan.monthly : plan.yearly}</span>
                                    <span className="text-gray-600">/{billingPeriod === 'monthly' ? 'mo' : 'yr'}</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-600">
                                            <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 rounded-lg ${plan.recommended
                                        ? 'bg-[#EA4C89] text-white hover:bg-opacity-90'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    } transition-colors duration-200`}>
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="bg-white py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Why Advertise with Us</h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-4xl mb-4">{benefit.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gray-900 text-white py-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                        <p className="text-lg mb-8 opacity-90">
                            Join thousands of companies who trust us to connect with top design talent.
                        </p>
                        <button className="bg-[#EA4C89] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300">
                            Contact Sales Team
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Advertise;
