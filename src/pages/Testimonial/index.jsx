import React from 'react';
import { Helmet } from 'react-helmet';
import PageComponent from '../../components/PageComponent';


const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: "https://placehold.co/400x400",
      quote: "Working with this team has been an absolute pleasure. Their attention to detail and creative solutions exceeded our expectations."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Tech Lead",
      image: "https://placehold.co/400x400",
      quote: "The level of professionalism and technical expertise is outstanding. They delivered our project on time and with exceptional quality."
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "Product Manager",
      image: "https://placehold.co/400x400",
      quote: "I'm impressed by their innovative approach and dedication to customer satisfaction. Highly recommended!"
    }
  ];

  return (
    <>
     <Helmet>
        <title>Testimonial | Dribble</title>
      </Helmet>


     <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
      <PageComponent
        title={'Testimonials'}
        description={'Hear what our clients have to say about working with us.'}
      />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 relative mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full object-cover"
                    fill
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Testimonial;
