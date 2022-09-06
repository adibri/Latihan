import {
  Box,
  TextField,
  IconButton,
  InputAdornment,
  OutlinedInput,
  InputLabel,
} from '@mui/material';
import { borderColor } from '@mui/system';
import { useField } from 'formik';
import React, { useState } from 'react';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function InputPassword({
  showPassword,
  setshowpassword,
  showPassword2,
  setshowpassword2,
  label,
  ...props
}) {
  const [field, meta] = useField(props);

  const handleClickShowPassword = () => {
    setshowpassword((prev) => !prev);
  };
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  const handleClickShowPassword2 = () => {
    setshowpassword2((prev) => !prev);
  };
  const handleMouseDownPassword2 = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <OutlinedInput
        id="input password"
        required
        type={showPassword ? 'text' : 'password'}
        size="small"
        color={meta.touched && meta.error ? 'error' : ''}
        // value={password}
        {...props}
        {...field}
        fullWidth
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        // label={label}
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
    </div>
  );
}

export default InputPassword;
