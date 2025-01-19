import React from 'react'
import { Helmet } from 'react-helmet'
import { FiDownload, FiUsers, FiEye, FiHeart, FiGlobe } from 'react-icons/fi'

const MediaKit = () => {
  const stats = [
    { icon: <FiUsers />, number: "15M+", label: "Community Members" },
    { icon: <FiEye />, number: "4B+", label: "Annual Page Views" },
    { icon: <FiHeart />, number: "100M+", label: "Appreciations" },
    { icon: <FiGlobe />, number: "195+", label: "Countries" },
  ]

  const brandAssets = [
    {
      title: "Logo Package",
      description: "Download our logo in various formats",
      fileType: "ZIP",
      fileSize: "12.5 MB",
    },
    {
      title: "Brand Guidelines",
      description: "Complete guide to using our brand",
      fileType: "PDF",
      fileSize: "8.2 MB",
    },
    {
      title: "Media Assets",
      description: "Screenshots and promotional images",
      fileType: "ZIP",
      fileSize: "45 MB",
    },
  ]

  return (
    <>
      <Helmet>
        <title>Media Kit | Dribble</title>
      </Helmet>




      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">Media Kit</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
              Everything you need to know about our brand. Access logos, brand guidelines, and media assets.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-pink-500 text-3xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Assets Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Brand Assets</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {brandAssets.map((asset, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{asset.title}</h3>
                  <p className="text-gray-600 mb-4">{asset.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      {asset.fileType} • {asset.fileSize}
                    </div>
                    <button className="flex items-center gap-2 text-pink-500 hover:text-pink-600">
                      <FiDownload />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Need something else?</h2>
          <p className="text-gray-600 mb-8">Contact our press team for additional resources and inquiries</p>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Contact Press Team
          </button>
        </div>
      </div>
    </>

  )
}

export default MediaKit
