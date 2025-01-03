import React, { useState } from 'react';

function UserForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [users, setUsers] = useState([]);
  const [headerText, setHeaderText] = useState('User Registration Form');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errors = { ...formErrors };

    switch (name) {
      case 'firstName':
        errors.firstName =
          value.length < 2 ? 'First Name must be at least 2 characters.' : '';
        break;
      case 'lastName':
        errors.lastName =
          value.length < 2 ? 'Last Name must be at least 2 characters.' : '';
        break;
      case 'email':
        errors.email =
          value.length < 8 ? 'Email must be at least 8 characters.' : '';
        break;
      case 'password':
        errors.password =
          value.length < 8 ? 'Password must be at least 8 characters.' : '';
        break;
      case 'confirmPassword':
        errors.confirmPassword =
          value !== formData.password ? 'Passwords must match.' : '';
        break;
      default:
        break;
    }

    setFormErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const allErrors = {};
    Object.keys(formData).forEach((field) =>
      validateField(field, formData[field])
    );
    setFormErrors(allErrors);

    const isValid = Object.values(allErrors).every((error) => error === '');
    if (isValid) {
     
      setUsers([...users, formData]);

      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

     
      setHeaderText('User Registered Successfully!');
    }
  };

  return (
    <div>
      <h1>{headerText}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {formData.firstName && formErrors.firstName && (
            <p className="error">{formErrors.firstName}</p>
          )}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {formData.lastName && formErrors.lastName && (
            <p className="error">{formErrors.lastName}</p>
          )}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formData.email && formErrors.email && (
            <p className="error">{formErrors.email}</p>
          )}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {formData.password && formErrors.password && (
            <p className="error">{formErrors.password}</p>
          )}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {formData.confirmPassword && formErrors.confirmPassword && (
            <p className="error">{formErrors.confirmPassword}</p>
          )}
        </div>
        <button type="submit">Register</button>
      </form>

      <h2>Registered Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.firstName} {user.lastName} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserForm;
