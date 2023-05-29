'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <Image src="/chatgpt-logo.png" width={150} height={150} alt="logo" />
      <button
        className="text-white font-bold text-3xl animate-pulse"
        onClick={(e) => {
          e.preventDefault();
          signIn('google');
        }}
      >
        Sign in to use ChatGpt
      </button>
    </div>
  );
}

export default Login;
