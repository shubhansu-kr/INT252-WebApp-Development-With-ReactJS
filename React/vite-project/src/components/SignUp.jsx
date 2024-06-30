import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    let errorsObj = {};

    if (!formData.name.trim()) {
      errorsObj.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errorsObj.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errorsObj.email = 'Invalid email format';
    }

    if (!formData.password.trim()) {
      errorsObj.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errorsObj.password = 'Password must be at least 6 characters long';
    }

    if (formData.confirmPassword !== formData.password) {
      errorsObj.confirmPassword = 'Passwords do not match';
    }

    setErrors(errorsObj);

    if (Object.keys(errorsObj).length === 0) {
      // Form submission logic
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
