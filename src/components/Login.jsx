import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);



    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
      };

  return (
    <div>
  
        <Header/>
        <div className='absolute'>
            <img className="flex-1" src='https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='defalultbackground'/>
        </div>
        
        <div>
        

        <form className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75'>
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
            <input type='text' placeholder='Email Address' className="p-4 my-4 w-full bg-gray-700 opacity-80"/>
            <input type='password' placeholder='Password' className="p-4 my-4 w-full bg-gray-700 opacity-80"/>
            <button className="p-2 my-6 bg-red-600 w-full rounded-lg">{isSignInForm ?"Sign In":"Sign Up"} </button>
            <p className='py-4 hover:cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
        </form>

        </div>


    </div>
  )
}

export default Login