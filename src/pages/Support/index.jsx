import React from 'react'
import { Helmet } from 'react-helmet'
import { FiSearch, FiMail, FiMessageCircle, FiBook } from 'react-icons/fi'

const Support = () => {
  const supportCategories = [
    { icon: <FiBook />, title: 'Getting Started', description: 'New to Dribbble? Start here' },
    { icon: <FiMail />, title: 'Account Help', description: 'Manage your account settings' },
    { icon: <FiMessageCircle />, title: 'Community Guidelines', description: 'Learn about our policies' },
  ]

  const faqs = [
    { question: 'How do I create an account?', answer: 'Click the Sign Up button and follow the registration process.' },
    { question: 'How do I upload my work?', answer: 'Go to your dashboard and click the Upload button.' },
    { question: 'What file types are supported?', answer: 'We support PNG, JPG, GIF, and MP4 files.' },
    { question: 'How do I change my password?', answer: 'Visit your account settings to update your password.' },
  ]

  return (
    <>

      <Helmet>
        <title>Support | Dribble</title>
      </Helmet>



      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-pink-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8">How can we help you?</h1>
            <div className="max-w-2xl mx-auto relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full pl-12 pr-4 py-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>
        </div>

        {/* Support Categories */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {supportCategories.map((category, index) => (
              <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-pink-500 text-2xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
          <p className="text-gray-600 mb-8">Our support team is ready to assist you</p>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Contact Support
          </button>
        </div>
      </div>

    </>
  )
}

export default Support
