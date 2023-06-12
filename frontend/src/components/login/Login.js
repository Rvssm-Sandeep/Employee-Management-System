import React, { useEffect, useState, useContext } from 'react';
import { loginContext } from '../../context/loginContext';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './Login.css'; 

function Login() {
  let navigate = useNavigate();
  let { register, handleSubmit, formState: { errors } } = useForm();

  let [currentUser, error, userLoginStatus, loginUser, logoutUser, role] = useContext(loginContext);

  let handleUserLogin = (userObj) => {
    loginUser(userObj);
  };

  useEffect(() => {
    if (userLoginStatus === true && role === 'admin') {
      navigate('/add-user');
    } else if (userLoginStatus === true) {
      navigate('/emp-dashboard');
    }
  }, [userLoginStatus]);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container ">
      <div className="background-image"></div>
      <div className="login-content">
        {error?.length !== 0 && <p className="text-danger display-1">{error}</p>}
        <form onSubmit={handleSubmit(handleUserLogin)}>
          <h2 className="login-title">Login</h2>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              className={`form-control ${errors.username ? 'is-invalid' : ''}`}
              {...register('username', {
                required: true,
                minLength: 4,
                maxLength: 22
              })}
            />
            {errors.username?.type === 'required' && (
              <p className="text-danger">*Enter your username</p>
            )}
            {errors.username?.type === 'minLength' && (
              <p className="text-danger">
                *Minimum 4 characters are required
              </p>
            )}
            {errors.username?.type === 'maxLength' && (
              <p className="text-danger">
                *Maximum 22 characters are required
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                {...register('password', { required: true, minLength: 4 })}
              />
              <div className="password-eye" onClick={togglePasswordVisibility}>
                <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} />
              </div>
            </div>
            {errors.password?.type === 'required' && (
              <p className="text-danger">*Enter your password</p>
            )}
            {errors.password?.type === 'minLength' && (
              <p className="text-danger">
                *Minimum 4 characters are required
              </p>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;