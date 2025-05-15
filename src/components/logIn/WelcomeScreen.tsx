import React from 'react';
import AuthButton from './AuthButton';

interface WelcomeScreenProps {
  onLoginClick: () => void;
  onSignUpClick: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onLoginClick, onSignUpClick }) => {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-4 py-8">
      {/* Header Section */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-2">
        Welcome
      </h1>
      <p className="text-xl sm:text-2xl lg:text-3xl text-center text-white mb-8">
        to our Real Estate Management System
      </p>

      {/* Card Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-md sm:max-w-lg lg:max-w-2xl shadow-lg">
        <div className="flex flex-col items-center h-full">
          <h2 className="text-lg sm:text-xl font-semibold text-center text-[#283F3A] mt-8 mb-6">
            Let's Get You Started With Abwab
          </h2>

          {/* Social Buttons */}
          <div className="w-full space-y-4 mb-6">
            <AuthButton 
              provider="google" 
              onClick={() => console.log('Continue with Google')} 
            />
            <AuthButton 
              provider="facebook" 
              onClick={() => console.log('Continue with Facebook')} 
            />
          </div>

          {/* Sign-in Button */}
          <button
            onClick={onLoginClick}
            className="w-full py-3 px-4 bg-[#E7F6F6] text-[#0C7775] font-medium rounded-md text-base mb-4 hover:bg-[#d1ecec] transition"
          >
            Sign in Using Password
          </button>

          {/* Sign-up Link */}
          <div className="text-right">
            <button
              onClick={onSignUpClick}
              className="text-[#11A8A5] text-base font-medium hover:underline"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
