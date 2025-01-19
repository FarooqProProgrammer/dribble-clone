import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiStar, FiAward, FiZap } from 'react-icons/fi';
import { Helmet } from 'react-helmet';

const GoPro = () => {
  const plans = [
    {
      name: "Pro",
      price: "12",
      icon: <FiStar className="text-2xl" />,
      features: [
        "Unlimited projects",
        "Custom domains",
        "Advanced analytics",
        "Priority support",
      ],
      color: "bg-purple-500",
      popular: false,
    },
    {
      name: "Business",
      price: "25",
      icon: <FiAward className="text-2xl" />,
      features: [
        "Everything in Pro",
        "Team collaboration",
        "API access",
        "Custom branding",
        "24/7 Support",
      ],
      color: "bg-black",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "49",
      icon: <FiZap className="text-2xl" />,
      features: [
        "Everything in Business",
        "Dedicated account manager",
        "Custom solutions",
        "SLA agreement",
        "Advanced security",
      ],
      color: "bg-blue-500",
      popular: false,
    },
  ];

  return (
    <>

    <Helmet>
      <title>Go Pro | Dribble</title>
    </Helmet>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Upgrade to Pro</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
          Take your design career to the next level with our premium features and resources.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative rounded-2xl p-6 sm:p-8 ${
              plan.popular ? 'border-2 border-black' : 'border border-gray-200'
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">
                Most Popular
              </span>
            )}
            <div className={`${plan.color} text-white w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center mb-4 sm:mb-6`}>
              {plan.icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="flex items-baseline mb-4 sm:mb-6">
              <span className="text-3xl sm:text-4xl font-bold">${plan.price}</span>
              <span className="text-gray-500 ml-2 text-sm sm:text-base">/month</span>
            </div>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <FiCheck className="text-green-500 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 sm:py-3 rounded-lg text-sm sm:text-base ${
                plan.popular
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'bg-gray-100 hover:bg-gray-200'
              } transition-colors`}
            >
              Choose {plan.name}
            </button>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 sm:mt-16 text-center bg-gray-50 rounded-2xl p-6 sm:p-8"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Need something special?</h2>
        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Contact us for custom enterprise solutions</p>
        <button className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base">
          Contact Sales
        </button>
      </motion.div>
    </div>
    </>
   
  );
};

export default GoPro;