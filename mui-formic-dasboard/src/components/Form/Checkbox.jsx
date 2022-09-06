import { useField } from 'formik';
import React from 'react';

function Checkbox({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <div>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="I accep this information is valid and agree for the following reasons"
          {...props}
          {...field}
          sx={`${meta.touched && meta.error ? { borderColor: 'red' } : ''}
         padding: '5px 10px'`}
        />
      </div>
      {meta.touched && meta.error && (
        <p
          style={{
            color: 'red',
            textSize: '10px',
          }}
        >
          {meta.error}
        </p>
      )}
    </>
  );
}

export default Checkbox;
