import React, { useState } from 'react';
import { Field, useFormikContext } from 'formik';

const FormField = ({ id, name, placeholder, autoComplete, type, innerRef, label }) => {
  const [isTouched, setIsTouched] = useState(false);
  const { errors, touched, handleBlur } = useFormikContext();

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
        innerRef={innerRef}
      />
      {errors[name] && touched[name] && !isTouched ? (
        <div className="text-danger">{errors[name]}</div>
      ) : null}
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

FormField.propsDefault = {
  innerRef: null,
}

export default FormField;
