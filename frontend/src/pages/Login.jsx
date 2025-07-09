import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [mode, setMode] = useState('Sign Up'); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
          
  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url =
      mode === 'Login'
        ? 'http://localhost:4000/api/user/login'
        : 'http://localhost:4000/api/user/register';

    const payload =
      mode === 'Login'
        ? { email, password }
        : { name, email, password };

    try {
      const { data } = await axios.post(url, payload, { withCredentials: true });


      localStorage.setItem('isLoggedIn', 'true'); 
      alert(`Success: ${data.message || 'Logged in / Registered'}`);
      navigate('/');
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Something wrong';
      alert(`Error: ${errorMsg}`);
    }
  };
    //Login Fix
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl font-semibold">{mode}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {mode === 'Sign Up' && (
        <input
          className="border px-3 py-1 rounded border-gray-600 w-full"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      )}

      <input
        className="border px-3 py-1 rounded border-gray-600 w-full"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        className="border px-3 py-1 rounded border-gray-600 w-full"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <div className="text-sm flex w-full justify-between -mt-2">
        <p className="cursor-pointer">Forgot your password?</p>
        <p
          onClick={() => setMode((prev) => (prev === 'Login' ? 'Sign Up' : 'Login'))}
          className="cursor-pointer text-blue-600 underline"
        >
          {mode === 'Login' ? 'Create Account' : 'Login Here'}
        </p>
      </div>

      <button
        type="submit"
        className="bg-black text-white px-8 py-2 mt-4 rounded text-sm w-full"
      >
        {mode === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;
