import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './AddUser.css';
import { useNavigate } from 'react-router-dom';

const AddEmployeePage = () => {
  const [error, setError] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (newUser) => {
    newUser = { ...newUser, role: "employee" };

    axios.post("http://localhost:5000/user-api/add-user", newUser)
      .then(response => {
        if (response.status === 201) {
          navigate("/users");
        } else {
          setError(response.data.message);
        }
      })
      .catch(error => {
        if (error.response) {
          setError(error.response.data.message);
        } else if (error.request) {
          setError(error.message);
        } else {
          setError(error.message);
        }
      });
  };

  return (
    <div className="cad">
      <div className="card-body">
        <h3 className="display-7 text-center">Add New Employee</h3>
        {error && <p className="text-danger display-1 text-center">{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column align-items-center">
          <div className="form-box">
            <div className="form-group">
              <label htmlFor="username" className="form-label">User Name</label>
              <input
                type="text"
                id="username"
                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                {...register("username", { required: true, minLength: 4, maxLength: 10 })}
              />
              {errors.username?.type === "required" && <p className="text-danger">*Enter your user name</p>}
              {errors.username?.type === "minLength" && <p className="text-danger">*Minimum 4-letter word is required</p>}
              {errors.username?.type === "maxLength" && <p className="text-danger">*Maximum 10-letter word is required</p>}
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                {...register("password", { required: true, minLength: 4 })}
              />
              {errors.password?.type === "required" && <p className="text-danger">*Enter your password</p>}
              {errors.password?.type === "minLength" && <p className="text-danger">*Minimum 4-letter password is required</p>}
            </div>

            <div className="form-group">
              <label htmlFor="jod" className="form-label">Joining Date</label>
              <input
                type="date"
                id="jod"
                className={`form-control ${errors.jod ? 'is-invalid' : ''}`}
                {...register("jod", { required: true })}
              />
              {errors.jod?.type === "required" && <p className="text-danger">*Joining date is required</p>}
            </div>

            <div className="form-group">
              <label htmlFor="department" className="form-label">Department</label>
              <input
                type="text"
                id="department"
                className={`form-control ${errors.department ? 'is-invalid' : ''}`}
                {...register("department", { required: true })}
              />
              {errors.department?.type === "required" && <p className="text-danger">*Enter your department</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && <p className="text-danger">*Enter a valid email</p>}
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="number"
                id="phone"
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                {...register("phone", { required: true, maxLength: 11 })}
              />
              {errors.phone?.type === "required" && <p className="text-danger">*Enter your phone number</p>}
              {errors.phone?.type === "maxLength" && <p className="text-danger">*Maximum number length should be 11</p>}
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-sm mt-4">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeePage;