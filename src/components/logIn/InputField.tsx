import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

export interface InputFieldProps {
  label: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  showToggle?: boolean;
  showIcon?: boolean;
  name?:string
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  required = false,
  showToggle = false,
  showIcon = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';
  const inputType = isPassword && showToggle ? (showPassword ? 'text' : 'password') : type;

  const renderIcon = () => {
    if (!showIcon) return null;
    if (type === 'email') return <Mail className="w-5 h-5 text-gray-400" />;
    if (type === 'password') return <Lock className="w-5 h-5 text-gray-400" />;
    return null;
  };

  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
      
      <div className="relative">
        {showIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2">
            {renderIcon()}
          </span>
        )}

        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
            ${showIcon ? 'pl-10' : ''} 
            ${isPassword && showToggle ? 'pr-10' : ''}`}
        />

        {isPassword && showToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
          >
            {showPassword ?   <Eye className="w-5 h-5" />:<EyeOff className="w-5 h-5" />}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
