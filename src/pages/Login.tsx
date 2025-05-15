import LoginScreen from '@/components/logIn/LoginScreen';
import SignUpScreen from '@/components/logIn/SignUpScreen';
import WelcomeScreen from '@/components/logIn/WelcomeScreen';
import React, { useState } from 'react';
import logo from "../assets/images/logo.png"



type AuthScreen = 'welcome' | 'login' | 'signup';

const Login: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AuthScreen>('welcome');

  return (
    <div className="  min-h-screen  p-4 bg-linear-135 from-[#4A7566] to-[#011A19]  shadow-md w-full  ">
   
              <div className="pt-[64px] pl-[100px]">
                  <img src={logo} alt="logo" />
             </div>
          
<div className=" flex justify-center items-center">
  {currentScreen === 'welcome' && (
        <WelcomeScreen 
          onLoginClick={() => setCurrentScreen('login')} 
          onSignUpClick={() => setCurrentScreen('signup')} 
        />
      )}
      {currentScreen === 'login' && (
        <LoginScreen 
          onBack={() => setCurrentScreen('welcome')}
          onSignUpClick={() => setCurrentScreen('signup')} 
        />
      )}
      {currentScreen === 'signup' && (
        <SignUpScreen
          onBack={() => setCurrentScreen('welcome')}
          onLoginClick={() => setCurrentScreen('login')} 
        />
      )}
</div>
   
    
    </div>
  );
};

export default Login;