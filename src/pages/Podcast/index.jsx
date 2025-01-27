import React from 'react';
import { Helmet } from 'react-helmet';
import { CubeIcon, figIcon, HtmlIcon } from '../../assets';
import PageComponent from '../../components/PageComponent';

const Podcast = () => {
  const episodes = [
    {
      id: 1,
      title: "Design Systems: Building for Scale",
      guest: "Sarah Thompson",
      role: "Design Director at Google",
      duration: "45:30",
      date: "Oct 15, 2023",
      image: CubeIcon,
      description: "Exploring how design systems help teams work more efficiently and maintain consistency across products."
    },
    {
      id: 2,
      title: "The Future of UX Design",
      guest: "Michael Rodriguez",
      role: "UX Lead at Apple",
      duration: "38:15",
      date: "Oct 8, 2023",
      image: figIcon,
      description: "Discussing emerging trends in UX design and how to prepare for the future of digital experiences."
    },
    {
      id: 3,
      title: "Freelance Design Success",
      guest: "Emily Chen",
      role: "Independent Designer",
      duration: "42:00",
      date: "Oct 1, 2023",
      image: HtmlIcon,
      description: "Tips and strategies for building a successful freelance design career."
    }
  ];

  return (
    <>

      <Helmet>
        <title>Podcast | Dribble</title>
      </Helmet>


      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
         
          <PageComponent 
          
            title={'Overtime Podcast'}
            description={'Conversations with the world\'s best designers, artists, and creative professionals about their work, process, and future of design.'}
          />

          {/* Featured Episode */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-8 sm:mb-12">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="relative">
                <img
                  src={episodes[0].image}
                  alt="Featured Episode"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg flex items-center justify-center">
                  <button className="bg-[#EA4C89] text-white p-4 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[#EA4C89] font-medium">Latest Episode</span>
                <h2 className="text-2xl font-bold mt-2 mb-4">{episodes[0].title}</h2>
                <p className="text-gray-600 mb-4">{episodes[0].description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">{episodes[0].duration}</span>
                  <span>{episodes[0].date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Episode List */}
          <div className="space-y-4 sm:space-y-6">
            {episodes.slice(1).map(episode => (
              <div key={episode.id} className="bg-white rounded-xl p-4 sm:p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="relative flex-shrink-0">
                    <img
                      src={episode.image}
                      alt={episode.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <button className="absolute inset-0 bg-black bg-opacity-20 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg mb-2">{episode.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">with {episode.guest} - {episode.role}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-4">{episode.duration}</span>
                      <span>{episode.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subscribe Section */}
          <div className="mt-8 sm:mt-12 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Subscribe to Overtime</h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {['Spotify', 'Apple Podcasts', 'Google Podcasts', 'RSS Feed'].map(platform => (
                <button
                  key={platform}
                  className="bg-white px-6 py-3 rounded-full text-gray-700 hover:shadow-md transition-shadow"
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Podcast;
