import React from 'react';
import styles from './Register.module.css';

function Register() {
  const onSubmitRegister = React.useCallback(
    () => (window.location.href = '/register'),
    []
  );
  return (
    <div className='homes flex flex-col justify-center items-center p-20'>
      <div>
        <h1 className="text-3xl text-zinc-200 font-bold underline pb-5">
          Sign In
        </h1>
      </div>
      <form method="post" action="register" onSubmit={onSubmitRegister} className='border-solid border-2 rounded-md border-zinc-200'>
        <div className='w-80 md:w-full'>
          <div className='flex flex-col px-5 py-2'>
            <label className='text-zinc-200 pb-3 text-left md:text-center' htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="md:w-96 py-2 rounded-lg"
              placeholder="Email Address"
              required
            />
          </div>
          <div className='flex flex-col px-5 py-2'>
            <label className='text-zinc-200 pb-3 text-left md:text-center' htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="md:w-96 py-2 rounded-lg"
              placeholder="Password"
              required
            />
          </div>
          <div className='flex flex-col px-5 py-2'>
            <label  className='text-zinc-200 pb-3 text-left md:text-center' htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              className="md:w-96 py-2 rounded-lg"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className='flex flex-col md:flex-row justify-between px-5 py-2'>
             <button className='rounded-lg bg-zinc-200 px-0 py-2 m-2 md:px-5 md:py-1 md:m-5'> Sign In</button>
             <a href='' className='rounded-lg bg-lime-400 px-0 py-2 m-2 md:px-5 md:py-1 md:m-5'> Sign Up</a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
