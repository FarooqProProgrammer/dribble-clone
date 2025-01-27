import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { FiMail, FiArrowRight } from 'react-icons/fi';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Handle newsletter subscription
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-[#0B0B0F] to-[#1A1A1F] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          

            <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                    <div className="bg-pink-500/20 p-3 rounded-full">
                        <FiMail className="w-6 h-6 text-pink-500" />
                    </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Stay in the loop
                </h2>
                <p className="text-gray-400 text-center max-w-md mx-auto mb-8">
                    Subscribe to our newsletter for the latest design trends, job opportunities, and community updates.
                </p>

                {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
                            >
                                Subscribe
                                <FiArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </form>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center text-green-400"
                    >
                        <p>🎉 Thank you for subscribing!</p>
                    </motion.div>
                )}

                <p className="text-gray-500 text-sm text-center mt-4">
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>
        </motion.div>
    )
}

export default Newsletter
