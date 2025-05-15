import React from 'react';

import InputField from './InputField';

interface SignUpScreenProps {
  onBack: () => void;
  onLoginClick: () => void;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({}) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign up submitted', formData);
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-2">
        Don’t have an account?
      </h1>
      <p className="text-xl sm:text-2xl text-center text-white mb-8">
        Please create your account.
      </p>

      <div className="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-md sm:max-w-lg lg:max-w-2xl shadow-lg">
        <div className="w-full mx-auto">
          <h2 className="text-lg sm:text-xl font-semibold text-center mb-6 text-[#333333] pt-12">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 mb-6">
            <InputField
              label="Name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <InputField
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <InputField
              label="Password"
              name="password"
              type="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <InputField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <div className="space-y-1">
              <label className="block text-sm font-medium text-[#484B52]">
                Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0C7775] focus:border-[#0C7775] text-[#484B52]"
                required
              >
                <option value="">Select Role</option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
                <option value="agent">Agent</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#E7F6F6] text-[#0C7775] font-medium rounded-lg mt-6 hover:bg-[#d1ecec] transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
