import React, { useState } from 'react';

const ReusableForm = ({ initialValues, onSubmit, options }) => {
  const [values, setValues] = useState(initialValues || {});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setValues({ ...values, [name]: checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Render form inputs dynamically based on initialValues */}
      {Object.keys(initialValues).map((fieldName) => (
        <div key={fieldName}>
          {options && options[fieldName] && options[fieldName].type === 'checkbox' ? (
            <div>
              <label>{options[fieldName].label}</label>
              {options[fieldName].options.map((option) => (
                <div key={option.value}>
                  <input
                    type="checkbox"
                    id={option.value}
                    name={fieldName}
                    value={option.value}
                    checked={values[fieldName] && values[fieldName].includes(option.value)}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={option.value}>{option.label}</label>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <label htmlFor={fieldName}>{fieldName}</label>
              <input
                type="text"
                id={fieldName}
                name={fieldName}
                value={values[fieldName] || ''}
                onChange={handleChange}
              />
            </div>
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReusableForm;
