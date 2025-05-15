import React from 'react';

interface AuthButtonProps {
  provider: 'google' | 'facebook';
  onClick: () => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({ provider, onClick }) => {
  const providerData = {
    google: {
      name: 'Google',
      color: 'red',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4"/>
          <path d="M12.24 24.0008C15.4764 24.0008 18.2058 22.9382 20.1944 21.1039L16.3274 18.1055C15.2516 18.8375 13.8626 19.252 12.2444 19.252C9.11376 19.252 6.45934 17.1399 5.50693 14.3003H1.51648V17.3912C3.55359 21.4434 7.70278 24.0008 12.24 24.0008Z" fill="#34A853"/>
          <path d="M5.50253 14.3003C5.00011 12.8099 5.00011 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC04"/>
          <path d="M12.24 4.74966C13.9508 4.7232 15.6043 5.36697 16.8433 6.54867L20.2694 3.12262C18.1 1.0855 15.2207 -0.034466 12.24 0.000808666C7.70277 0.000808666 3.55359 2.55822 1.51648 6.61481L5.50252 9.70575C6.45052 6.86173 9.10933 4.74966 12.24 4.74966Z" fill="#EA4335"/>
        </svg>
      )
    },
    facebook: {
      name: 'Facebook',
      icon: (
       <div className="w-6 h-6 bg-[#1877F2] rounded-full flex items-center justify-center">
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.5 8H15V5H13.5C11.57 5 11 6.09 11 7.5V9H9V12H11V19H14V12H16.5L17 9H14V8C14 7.45 14.45 7 15 7H17V4.5H15C13.34 4.5 12 5.84 12 7.5V9H10V12H12V19H14.5V12H16.5L17 9H14.5V8Z"/>
  </svg>
</div>
      )
    }
  };


  const { name, icon } = providerData[provider];

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full py-2 px-4 border border-gray-300 rounded-lg flex items-center justify-center space-x-3 hover:bg-gray-50"
    >
      <span className="text-gray-600">{icon}</span>
      <span className="text-[#050505] text-sm font-medium">Continue with {name}</span>
    </button>
  );
};

export default AuthButton;
