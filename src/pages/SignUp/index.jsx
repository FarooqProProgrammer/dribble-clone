import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signup } = useAuth();
  const navigate = useNavigate(); // Use navigate to redirect the user after successful signup

  const onSubmit = async (data) => {
    try {
      // Call the signup function from useAuth
      await signup(data.email, data.password);

      // After successful signup, redirect the user to the signin page (or another page as per your flow)
      navigate('/signin');
    } catch (error) {
      // Handle any errors (e.g., server errors, validation errors)
      console.error("Signup failed:", error);
      // You can show a message to the user here (e.g., "Email already in use.")
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign up | Dribble</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-sm"
        >
          <div>
            <h2 className="text-center text-3xl font-bold">Create an account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/signin" className="font-medium text-black hover:text-gray-800">
                Sign in
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              {/* Full Name Input */}
              <div className="relative">
                <FiUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  {...register('fullName', { required: 'Full name is required' })}
                />
                {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
              </div>

              {/* Email Input */}
              <div className="relative">
                <FiMail className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                      message: 'Please enter a valid email address',
                    }
                  })}
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>

              {/* Password Input */}
              <div className="relative">
                <FiLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  {...register('password', { required: 'Password is required' })}
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 border-gray-300 rounded"
                {...register('terms', { required: 'You must agree to the terms and privacy policy' })}
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                I agree to the{' '}
                <Link to="/terms" className="font-medium text-black hover:text-gray-800">
                  Terms
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="font-medium text-black hover:text-gray-800">
                  Privacy Policy
                </Link>
              </label>
              {errors.terms && <span className="text-red-500 text-sm">{errors.terms.message}</span>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors"
            >
              Create account
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default SignUp;
