'use client'

import React, { FormEvent, useState } from 'react';
import Image from 'next/image';

export default function userLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  }
  
  return (
    <main id="viewport" className="min-h-screen flex p-6">
      <div id="left-col" className="flex-1">
        <h2 id="title" className="mb-20 mr-5 text-3xl text-white">
          Conference Paper Review System
        </h2>
        <div id="signin-title&modal" className="m-10">
          <h2 id="signin-title" className="mb-20 text-3xl text-white">
            Sign in
          </h2>
          <div id="signin-modal" className="p-5 rounded-xl max-w-md bg-modal-color">
            <form id="signin-form" className="mt-8 space-y-14" onSubmit={handleSubmit}>   
              <div id="email-field" className="flex items-center border-b border-gray-400 py-1 -space-y-px">
                <input 
                  id="email-field" 
                  name="email" 
                  type="email" 
                  required 
                  className="appearance-none bg-transparent border-none w-full py-1 leading-tight focus:outline-none" 
                  placeholder="Enter your email address" 
                  aria-label="email"
                /> 
              </div>  
              <div id="pw-field" className="flex items-center border-b border-gray-400 py-1 -space-y-px">
                <input 
                  id="pw-field" 
                  name="password" 
                  type="password" 
                  required 
                  className="appearance-none bg-transparent border-none w-full py-1 leading-tight focus:outline-none" 
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button 
                  id="login-button"
                  type="submit" 
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-3xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="right-col" className="flex-1">
        <div id="logo-modal" className="p-5 h-full w-full flex flex-1 flex-col justify-between space-y-8 bg-modal-color rounded-xl">
          <div id="logo-image"> 
            <Image
              className="relative"
              src="/logo.svg"
              alt="Conference Paper Review System Logo"
              width={250}
              height={250}
              priority
            />  
          </div>
          <div id="banner" className="py-12">
            <h2 className="pb-3 text-5xl">Conference Paper Review System</h2>
            <p className="text-m">Sign in with your credentials to get started.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
