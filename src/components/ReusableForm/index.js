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
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-4">
      {/* Render form inputs dynamically based on initialValues */}
      {Object.keys(initialValues).map((fieldName) => (
        <div key={fieldName} className="mb-4">
          {options && options[fieldName] && options[fieldName].type === 'checkbox' ? (
            <div>
              <label className="block">{options[fieldName].label}</label>
              {options[fieldName].options.map((option) => (
                <div key={option.value} className="flex items-center">
                  <input
                    type="checkbox"
                    id={option.value}
                    name={fieldName}
                    value={option.value}
                    checked={values[fieldName] && values[fieldName].includes(option.value)}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <label htmlFor={option.value}>{option.label}</label>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <label htmlFor={fieldName} className="block">{fieldName}</label>
              <input
                type="text"
                id={fieldName}
                name={fieldName}
                value={values[fieldName] || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          )}
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
    </form>
  );
};

export default ReusableForm;
