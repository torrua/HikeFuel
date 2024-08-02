import React, { useState } from 'react';
import { Field, useFormikContext } from 'formik';

const FormField = ({ id, name, type, label, required, className, innerRef }) => {
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
        placeholder=''
        autoComplete={name}
        type={type}
        required={required}
        className={className}
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

FormField.defaultProps = {
  required: true,
  className: "form-control",
  innerRef: null,
}

export default FormField;

// The form-floating class requires an empty placeholder for the label to display correctly.
