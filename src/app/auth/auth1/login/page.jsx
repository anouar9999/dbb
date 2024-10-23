"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../../../globals.css'
import { EyeIcon, EyeOffIcon } from 'lucide-react';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [serverError, setServerError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('The Email field required'),
    password: Yup.string().required('The password field required'),
  });

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Username must be at least 3 characters long')
      .max(50, 'Username must be less than 50 characters')
      .matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores')
      .required('Username is required'),
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[^a-zA-Z0-9]/, 'Password must contain at least one special character')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password'),
    avatar: Yup.string()
      .url('Please enter a valid URL for your avatar')
      .nullable(),
    bio: Yup.string()
      .max(500, 'Bio must be 500 characters or less')
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    setIsLoading(true);
    setServerError('');

    try {
      const url = isLogin ? `${process.env.NEXT_PUBLIC_BACKEND_URL}user_login.php` : `${process.env.NEXT_PUBLIC_BACKEND_URL}user_register.php`;
      const body = isLogin ? 
        { email: values.email, password: values.password } : 
        { ...values, created_at: new Date().toISOString() };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      console.log('Server response:', data);

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      if (data.success) {
        console.log(data.message);
        if (isLogin) {
          localStorage.setItem('userSessionToken', data.session_token);
          localStorage.setItem('userId', data.user_id);
          localStorage.setItem('username', data.username);
          localStorage.setItem('userType', data.user_type);
          router.push("/");
        } else {
          setIsLogin(true);
          setServerError("Registration successful. Please log in.");
        }
      } else {
        setServerError(data.message || (isLogin ? 'Login failed' : 'Registration failed'));
      }
    } catch (error) {
      console.error('Error:', error);
      setServerError(error.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
      setSubmitting(false);
    }
  };

  const initialValues = isLogin ? 
    { email: '', password: '' } : 
    { username: '', email: '', password: '', confirmPassword: '', avatar: '', bio: '',is_verified:1 };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side - Background Image */}
     <motion.div 
        className={`relative w-full ${isLogin ? 'md:w-1/3':'md:w-1/5' } h-1/4 md:h-full overflow-hidden`}
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <Image
          src="https://img.freepik.com/free-photo/cool-scene-with-futuristic-dragon-creature_23-2151201656.jpg"
          alt="Epic background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent to-gray-900"></div>
      </motion.div>

      {/* Right side - Auth Form */}
      <motion.div 
        className={`w-full ${isLogin ? 'md:w-2/3':'md:w-4/5' } bg-gray-900 flex flex-col items-center justify-center p-4 md:p-8`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className={`w-full ${isLogin ? 'max-w-md' : 'max-w-3xl'}`}>
          {/* Brand Logo */}
          <motion.div
            className="absolute top-4 left-4 z-10"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 200, damping: 10 }}
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Logo_inwi.svg/2560px-Logo_inwi.svg.png"
              alt="Brand Logo"
              width={150}
              height={40}
              className="cut-corners"
            />
          </motion.div>

          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-custom text-white text-start"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
          >
            {isLogin ? 'Get Started' : 'Create Account'}
          </motion.h1>
          <motion.p 
            className="text-gray-500 text-sm font-semibold mb-4 text-start mb-12 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {isLogin ? 'Welcome back! Enter your credentials to sign in' : 'Fill in the details below to create your account'}
          </motion.p>
          {serverError && (
            <motion.p 
              className="text-red-500 text-sm mb-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {serverError}
            </motion.p>
          )}

          <Formik
            initialValues={initialValues}
            validationSchema={isLogin ? loginSchema : registerSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="space-y-4 md:space-y-6">
                {!isLogin && (
                  <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4">
                      <label htmlFor="username" className="text-white mb-2 block">Username</label>
                      <Field
                        name="username"
                        type="text"
                        placeholder="Choose a username"
                        className={`w-full px-3 py-2 md:py-3 bg-gray-800 text-white rounded focus:ring-1 focus:ring-orange-500 angular-cut transition duration-300 ${errors.username && touched.username ? 'border-red-500' : ''}`}
                      />
                      <ErrorMessage name="username" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                    <div className="w-full md:w-1/2 px-2 mb-4">
                      <label htmlFor="email" className="text-white mb-2 block">Email</label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className={`w-full px-3 py-2 md:py-3 bg-gray-800 text-white rounded focus:ring-1 focus:ring-orange-500 angular-cut transition duration-300 ${errors.email && touched.email ? 'border-red-500' : ''}`}
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>
                )}
                {isLogin && (
                  <div className="w-full px-2 mb-4">
                    <label htmlFor="email" className="text-white mb-2 block">Email</label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className={`w-full px-3 py-2 md:py-3 bg-gray-800 text-white rounded focus:ring-1 focus:ring-orange-500 angular-cut transition duration-300 ${errors.email && touched.email ? 'border-red-500' : ''}`}
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm    mt-1" />
                  </div>
                )}
                <div className={`flex flex-wrap -mx-2 ${isLogin ? '' : 'mb-4'}`}>
                  <div className={`w-full ${!isLogin ? ' md:w-1/2' : ''}  px-2 mb-4`}>
                    <label htmlFor="password" className="text-white mb-2 block">Password</label>
                    <div className="relative">
                      <Field
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className={`w-full px-3 py-2 md:py-3 bg-gray-800 text-white rounded focus:ring-1 focus:ring-orange-500 angular-cut transition duration-300 ${errors.password && touched.password ? 'border-red-500' : ''}`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                      >
                        {showPassword ? (
                          <EyeOffIcon className="h-5 w-5 text-gray-400" />
                        ) : (
                          <EyeIcon className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  {!isLogin && (
                    <div className="w-full md:w-1/2 px-2 mb-4">
                      <label htmlFor="confirmPassword" className="text-white mb-2 block">Confirm Password</label>
                      <Field
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        className={`w-full px-3 py-2 md:py-3 bg-gray-800 text-white rounded focus:ring-1 focus:ring-orange-500 angular-cut transition duration-300 ${errors.confirmPassword && touched.confirmPassword ? 'border-red-500' : ''}`}
                      />
                      <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                  )}
                </div>
                {!isLogin && (
                  <div className="flex flex-wrap -mx-2 mb-4">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                      <label htmlFor="avatar" className="text-white mb-2 block">Avatar URL (Optional)</label>
                      <Field
                        name="avatar"
                        type="url"
                        placeholder="Enter avatar URL"
                        className={`w-full px-3 py-2 md:py-3 bg-gray-800 text-white rounded focus:ring-1 focus:ring-orange-500 angular-cut transition duration-300 ${errors.avatar && touched.avatar ? 'border-red-500' : ''}`}
                      />
                      <ErrorMessage name="avatar" component="div" className="text-red-500 text-sm   mt-1" />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                      <label htmlFor="bio" className="text-white mb-2 block">Bio (Optional)</label>
                      <Field
                        as="textarea"
                        name="bio"
                        placeholder="Tell us about yourself"
                        className="w-full px-3 py-2 md:py-3 bg-gray-800 text-white rounded focus:ring-1 focus:ring-orange-500 angular-cut transition duration-300"
                        rows="3"
                      />
                      <ErrorMessage name="bio" component="div" className="text-red-500 text-sm   mt-1" />
                    </div>
                  </div>
                )}
             <motion.button 
                  type="submit" 
                  className="w-full bg-orange-500 text-white mt-4 md:mt-6 py-2 md:py-3 rounded hover:bg-orange-600 transition duration-200 angular-cut relative overflow-hidden font-bold"
                  disabled={isLoading || isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">
                    {(isLoading || isSubmitting) ? 'Processing...' : (isLogin ? 'Sign in' : 'Create Account')}
                  </span>
                </motion.button>
              </Form>
            )}
          </Formik>
          <motion.p 
            className="text-gray-300 text-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              onClick={() => {
                setIsLogin(!isLogin);
                setServerError('');
              }} 
              className="text-orange-400 hover:underline font-semibold"
            >
              {isLogin ? 'Register' : 'Login'}
            </button>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}