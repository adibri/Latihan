import { useField } from 'formik';
import React from 'react';

function CustomInput({ label, ...props }) {
  const [field, meta] = useField(props);

  console.log('field', field);
  console.log('meta', meta);

  return (
    <div className="flex flex-col my-3">
      <label className="">{label}</label>
      <input
        {...props}
        {...field}
        className={`${meta.touched && meta.error ? 'border-red-400' : ''}
         px-3 py-2 rounded-xl border `}
      />
      {meta.touched && meta.error && (
        <p className="text-sm flex-col ml-3 text-red-600">{meta.error}</p>
      )}
    </div>
  );
}

export default CustomInput;
