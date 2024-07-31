import React, { useState } from 'react';
import { Field } from 'formik';

const FormField = ({ id, name, placeholder, autoComplete, type, errors, touched, handleBlur, label }) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleFocusField = () => {
    setIsTouched(true);
  };

  const handleBlurField = (e) => {
    handleBlur(e);
    setIsTouched(false);
  };

  return (
    <div className="form-floating mb-3">
      <Field
        id={id}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        type={type}
        required
        className="form-control"
        onBlur={handleBlurField}
        onFocus={handleFocusField}
      />
      {errors[name] && touched[name] && !isTouched ? (
        <div className="text-danger">{errors[name]}</div>
      ) : null}
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default FormField;
