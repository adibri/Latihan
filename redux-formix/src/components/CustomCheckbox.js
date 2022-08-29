import { useField } from 'formik';
import React from 'react';

function CustomCheckbox({ label, ...props }) {
  const [field, meta] = useField(props);


  return (
    <>
      <div className="flex flex-row my-3">
        <input
          {...props}
          {...field}
          className={`${meta.touched && meta.error ? 'border-red-400' : ''}
         px-3 py-2 rounded-xl border `}
        />
        <span className="ml-3">
          I accep this information is valid and agree for the following reasons
        </span>
      </div>
      {meta.touched && meta.error && (
        <p className="text-sm ml-3 text-red-600">{meta.error}</p>
      )}
    </>
  );
}

export default CustomCheckbox;
