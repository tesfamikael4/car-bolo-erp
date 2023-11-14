// components/RegisterForm.tsx

import { registerUser } from '@/redux/actions/userActions';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const RegisterForm: React.FC = ()  => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    // Dispatch the registerUser action with form data
    dispatch(registerUser(data));
  };

  return (
    <div className=' flex w-full text-center items-center justify-normal'>

      <form onSubmit={handleSubmit(onSubmit)} className='flex'>
        <label>
          Username:
          <input {...register('username')} />
        </label>
        <label>
          Email:
          <input type="email" {...register('email')} />
        </label>
        <label>
          Password:
          <input type="password" {...register('password')} />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
