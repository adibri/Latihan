import { Box, TextField } from '@mui/material';
import { borderColor } from '@mui/system';
import { useField } from 'formik';
import React from 'react';

function Inputs({ label, childern, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <TextField
        required
        fullWidth
        size="small"
        label={label}
        {...props}
        {...field}
        className={`${meta.touched && meta.error ? { borderColor: 'red' } : ''}
      `}
      />
      {meta.touched && meta.error && (
        <p
          style={{
            color: 'red',
            fontSize: '13px',
            fontWeight: 'light',
            display: 'flex',
            marginTop: '3px',
            marginLeft: '13px',
          }}
        >
          {meta.error}
        </p>
      )}
      {childern}
    </div>
  );
}

export default Inputs;
