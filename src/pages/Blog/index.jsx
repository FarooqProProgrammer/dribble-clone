import React from 'react';
import './Blog.css';
import { Helmet } from 'react-helmet';

const blogPosts = [
  {
    id: 1,
    title: "Design Systems: A Practical Guide",
    description: "Learn how to create and maintain effective design systems for your projects",
    image: "https://cdn.dribbble.com/uploads/59479/original/244d461cc460ca86f4e7d1737a7d49ec.png?1731618096",
    author: {
      name: "Sarah Johnson",
      avatar: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      date: "May 15, 2023"
    }
  },
  {
    id: 2,
    title: "UI/UX Trends in 2023",
    description: "Explore the latest trends shaping the future of digital design",
    image: "https://cdn.dribbble.com/uploads/59248/original/539b03683fc4aec9ab223991f129df07.png?1730299140",
    author: {
      name: "Mike Chen",
      avatar: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      date: "May 12, 2023"
    }
  },
  // Add more blog posts as needed
];

const Blog = () => {
  return (
    <>

      <Helmet>
        <title>Blog | Dribbble</title>
      </Helmet>

      <div className="blog-container">
        <div className="blog-header">
          <h1>Design Blog</h1>
          <p>Insights and inspiration from the design community</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map(post => (
            <div key={post.id} className="blog-card">
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-card-content">
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <div className="user-details flex items-center space-x-3 mt-4 pt-4 border-t border-gray-200">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col justify-center">
                    <h4 className="text-sm font-medium text-gray-900">{post.author.name}</h4>
                    <span className="text-xs text-gray-500">{post.author.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default Blog;
