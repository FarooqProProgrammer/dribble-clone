import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {
  const { login, isAuthenticated, loading } = useAuth();
  
  // Use react-hook-form for form handling and validation
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    console.log(data); // Log the form data (email and password)
    try {
      // Call login function with the email and password from the form
      await login(data.email, data.password);
      // Handle post-login actions (like redirection or showing success)
    } catch (error) {
      console.error("Login failed:", error);
      // Optionally, you can show an error message to the user
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading state while checking auth status
  }

  return (
    <>
      <Helmet>
        <title>Sign In | Dribble</title>
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

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <div className="space-y-4">
              {/* Email Input */}
              <div className="relative">
                <FiMail className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                      message: "Please enter a valid email address"
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
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 border-gray-300 rounded"
                  {...register("rememberMe")}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <Link to="#" className="text-sm font-medium text-black hover:text-gray-800">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors"
            >
              Sign in
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default SignIn;
