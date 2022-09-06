import { Box, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { borderColor } from '@mui/system';
import { useField } from 'formik';
import React, { useState } from 'react';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function InputConfirmPassword({
  showPassword2,
  setshowpassword2,
  label,
  ...props
}) {
  const [field, meta] = useField(props);

  const handleClickShowPassword = () => {
    setshowpassword2((prev) => !prev);
  };
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      flex={true}
      // sx={{
      //   margin: { sm: '10px 5em 0 5em', xs: '5px 10px' },
      // }}
      flexDirection="column"
    >
      <OutlinedInput
        id="input confirm password"
        required
        type={showPassword2 ? 'text' : 'password'}
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
              {showPassword2 ? <VisibilityOff /> : <Visibility />}
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
    </Box>
  );
}

export default InputConfirmPassword;
