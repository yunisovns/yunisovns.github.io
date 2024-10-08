import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation, useLoginUserMutation } from '../../api/registrationApi';
import { setToken } from '../../store/authSlice';

interface IFormInput {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IFormInput>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await loginUser({...data, commandId: "23209230423539"}).unwrap();
      if (response.token) {
        dispatch(setToken(response.token));
        navigate('/profile');
      }
    } catch (err: any) {
      if (err.status === 400 && err.data?.errors[0].message) {
        setError('email', { type: 'server', message: err.data?.errors[0].message });
      } else {
        setError('email', { type: 'server', message: 'An unknown error occurred.' });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-md rounded bg-white p-4 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Вход</h2>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          {...register('email', { required: 'Email is required' })}
          type="text"
          id="email"
          className={`mt-1 block w-full border px-3 py-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          {...register('password', { required: 'Password is required' })}
          type="password"
          id="password"
          className={`mt-1 block w-full border px-3 py-2 ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
        />
        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {isLoading ? 'Вход...' : 'Войти'}
      </button>
    </form>
  );
};

export default LoginForm;
