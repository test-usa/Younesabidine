import React from 'react';

import AuthButton from './AuthButton';
import InputField from './InputField';
import Divider from './Divider';

interface LoginScreenProps {
  onBack?: () => void;
  onSignUpClick: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onSignUpClick }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted', { email, password });
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-4 py-8">
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-2">
        Hello!
      </h1>
      <p className="text-xl sm:text-2xl text-center text-white mb-8">
        Please log in to your account.
      </p>

      {/* Card */}
      <div className="bg-white rounded-3xl w-full max-w-md sm:max-w-lg lg:max-w-2xl p-6 sm:p-8 shadow-lg">
        <div className="w-full">
          <h2 className="text-lg sm:text-xl font-semibold text-center mb-6 text-[#283F3A]">
            Sign In
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <InputField
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              showIcon={true}
            />

            <InputField
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              showIcon={true}
              showToggle={true}
            />

            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#E7F6F6] text-[#0C7775] font-medium rounded-lg transition duration-200 hover:bg-[#d1ecec]"
            >
              Log in
            </button>
          </form>

          <Divider text="or" />

          {/* Auth Buttons */}
          <div className="space-y-4 mb-6">
            <AuthButton
              provider="google"
              onClick={() => console.log('Continue with Google')}
            />
            <AuthButton
              provider="facebook"
              onClick={() => console.log('Continue with Facebook')}
            />
          </div>

          {/* Sign Up Prompt */}
          <div className="text-center text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <button
              onClick={onSignUpClick}
              className="text-[#11A8A5] font-medium hover:underline"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
