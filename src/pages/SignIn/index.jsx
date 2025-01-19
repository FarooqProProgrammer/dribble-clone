import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiGithub } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const SignIn = () => {
  return (
    <>


      <Helmet>
        <title>Sigin In | Dribble</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-sm"
        >
          <div>
            <h2 className="text-center text-3xl font-bold">Welcome back</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="font-medium text-black hover:text-gray-800">
                Sign up
              </Link>
            </p>
          </div>

          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <FiMail className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div className="relative">
                <FiLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <Link to="#" className="text-sm font-medium text-black hover:text-gray-800">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors"
            >
              Sign in
            </button>
          </form>

          <div className="relative mt-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-center gap-3 py-2.5 border rounded-lg hover:bg-gray-50 transition-colors">
              <FcGoogle className="text-xl" />
              <span>Continue with Google</span>
            </button>
            <button className="w-full flex items-center justify-center gap-3 py-2.5 border rounded-lg hover:bg-gray-50 transition-colors">
              <FiGithub className="text-xl" />
              <span>Continue with GitHub</span>
            </button>
          </div>
        </motion.div>
      </div>
    </>

  );
};

export default SignIn;
