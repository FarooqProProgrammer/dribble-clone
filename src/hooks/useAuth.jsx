import { useState, useEffect, useCallback } from 'react';
import Cookies from 'js-cookie';



// Helper functions to manage the token and user email in cookies and localStorage
const setAuthData = (token, email) => {
  // Store token and email in both localStorage and cookies
  localStorage.setItem('auth_token', token);
  localStorage.setItem('user_email', email); // Store user email in localStorage
  Cookies.set('auth_token', token, { expires: 7 }); // Token expires in 7 days
  Cookies.set('user_email', email, { expires: 7 }); // Email in cookies for 7 days
};

const getAuthData = () => {
  const token = localStorage.getItem('auth_token') || Cookies.get('auth_token');
  const email = localStorage.getItem('user_email') || Cookies.get('user_email');
  return { token, email };
};

const removeAuthData = () => {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('user_email');
  Cookies.remove('auth_token');
  Cookies.remove('user_email');
};

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState(null);

  // Check if token exists on component mount
  useEffect(() => {
    const { token, email } = getAuthData();
    if (token && email) {
      setIsAuthenticated(true);
      setEmail(email);
    }
    setLoading(false);
  }, []);

  // Login function (simulates JWT login)
  const login = useCallback((email, password) => {
    // Normally, you would call an API to get the JWT token, e.g., using fetch or axios
    const fakeToken = 'your-fake-jwt-token'; // Simulating the API response

    // Set the token and email in cookies and localStorage
    setAuthData(fakeToken, email);

    // Set the user as authenticated and store the email
    setIsAuthenticated(true);
    setEmail(email);
  }, []);

  // Signup function (simulates JWT signup)
  const signup = useCallback((email, password) => {
    // Simulate an API call to sign up the user
    const fakeToken = 'your-fake-jwt-token'; // Simulating the API response

    // Set the token and email in cookies and localStorage
    setAuthData(fakeToken, email);

    // Set the user as authenticated and store the email
    setIsAuthenticated(true);
    setEmail(email);
  }, []);

  // Logout function (removes JWT token and user email)
  const logout = useCallback(() => {
    // Remove the token and email from localStorage and cookies
    removeAuthData();
    setIsAuthenticated(false);
    setEmail(null);
  }, []);

  return {
    isAuthenticated,
    loading,
    login,
    signup,
    logout,
    email, // Expose the user's email
  };
};

export default useAuth;
