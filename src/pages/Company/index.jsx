import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { User1, User2, User3 } from '../../assets';
import PageComponent from '../../components/PageComponent';

const Company = () => {
    const stats = [
        { number: "15M+", label: "Creative Professionals" },
        { number: "4M+", label: "Shots Shared" },
        { number: "100K+", label: "Design Teams" },
        { number: "196", label: "Countries Represented" }
    ];

    const values = [
        {
            title: "Community First",
            description: "We believe in putting our community of designers at the heart of everything we do.",
            icon: "🤝"
        },
        {
            title: "Innovation",
            description: "We're constantly pushing boundaries to create better experiences for designers.",
            icon: "💡"
        },
        {
            title: "Quality",
            description: "We maintain high standards and celebrate exceptional design work.",
            icon: "✨"
        }
    ];

    const team = [
        {
            name: "Sarah Johnson",
            role: "CEO",
            image: User3,
            linkedin: "#"
        },
        {
            name: "Michael Chen",
            role: "Head of Design",
            image: User1,
            linkedin: "#"
        },
        {
            name: "Emma Williams",
            role: "CTO",
            image: User2,
            linkedin: "#"
        }
    ];

    return (
        <>

            <Helmet>
                <title>Company | Dribbble</title>
            </Helmet>


            <div className="min-h-screen bg-gray-50">
               
                <div className="sm:pt-10 pt-5">
                <PageComponent 
                    title={'Empowering the World\'s Design Community'}
                    description={'Dribbble is where the world\'s top designers share, grow, and get hired.'}
                    
                />

                </div>

                {/* Stats Section */}
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mission Section */}
                <div className="bg-white py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                To build the world's best platform for designers to share their work, grow, and get hired.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                            {values.map((value, index) => (
                                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                                    <div className="text-4xl mb-4">{value.icon}</div>
                                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
                            <p className="text-gray-600">Meet the people behind Dribbble</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {team.map((member, index) => (
                                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                                        <p className="text-gray-600 mb-4">{member.role}</p>
                                        <Link
                                            to={member.linkedin}
                                            className="text-[#EA4C89] hover:text-[#F082AC] inline-flex items-center"
                                        >
                                            <span>Connect on LinkedIn</span>
                                            <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gray-900 text-white py-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
                        <p className="text-lg mb-8 opacity-90">
                            We're always looking for talented individuals to join our mission.
                        </p>
                        <button className="bg-[#EA4C89] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300">
                            View Open Positions
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Company;
