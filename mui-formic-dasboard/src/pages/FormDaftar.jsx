import {
  Autocomplete,
  Box,
  FormGroup,
  IconButton,
  InputAdornment,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import { useState } from 'react';
import InputConfirmPassword from '../components/Form/InputConfirmPassword';
import InputPassword from '../components/Form/InputPassword';
import Inputs from '../components/Form/Inputs';
import { schemaForm } from '../helper/schemaForm';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const onSubmit = async (value, actions) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve, 3000);
    return actions.resetForm();
  });
};

const steps = ['Data Diri', 'Data Perusahaan'];

const jenisKelamin = ['Laki-laki', 'Perempuan'];

const FormDaftar = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [tanggalLahir, setTanggalLahir] = useState(dayjs(''));

  const disableCoppyPaste = (e) => e.preventDefault();

  const handleTanggalLahir = (tanggalLahir) => {
    console.log(tanggalLahir);
    setTanggalLahir(tanggalLahir);
  };
  return (
    <Box>
      <Typography variant="h5" letterSpacing={2} fontWeight="bold">
        Registrasi
      </Typography>
      <Box sx={{ width: '100%', marginTop: '15px' }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          jenisKelamin: '',
          tempatLahir: '',
          tanggalLahir: '',
          cariKodePos: '',
          address: [
            {
              rt: '',
              rw: '',
              jalan: '',
              desa: '',
              kecamatan: '',
              kabupaten: '',
              provinsi: '',
            },
          ],
          agrement: false,
        }}
        validationSchema={schemaForm}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, setFieldValue, handleChange }) => (
          <Box
            sx={{
              margin: { sm: '10px 5em 0 5em', xs: '5px 10px' },
            }}
          >
            <Form>
              <Inputs
                id="input email"
                label="Email"
                name="email"
                placeholder="Enter your email"
                type="email"
              />
              <InputPassword
                label="Password"
                name="password"
                onCopy={disableCoppyPaste}
                onPaste={disableCoppyPaste}
                placeholder="Enter your password"
                onChange={handleChange}
                type={showPassword ? 'text' : 'password'}
                showPassword={showPassword}
                setshowpassword={setShowPassword}
              />
              <InputConfirmPassword
                label="Confirm Password"
                onCopy={disableCoppyPaste}
                onPaste={disableCoppyPaste}
                name="confirmPassword"
                placeholder="Confirm your password"
                // onChange={handleChange}
                type={showPassword2 ? 'text' : 'password'}
                showPassword2={showPassword2}
                setshowpassword2={setShowPassword2}
              />
              <Autocomplete
                id="pilih jenis kelamin"
                size="small"
                options={jenisKelamin}
                getOptionLabel={(option) => option}
                // defaultValue={top100Films[13]}
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    {...params}
                    variant="outlined"
                    label="Jenis Kelamin"
                    name="jenisKelamin"
                    placeholder="Pilih jenis kelamin"
                    required
                  />
                )}
              />
              <Box flex={true} flexDirection="row">
                <Inputs
                  fullWidth={false}
                  id="jenis-kelamin"
                  label="Tempat Lahir"
                  name="tempatLahir"
                  placeholder="Tempat Lahir"
                  type="text"
                ></Inputs>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Tanggal Lahir"
                    inputFormat="DD/MM/YYYY"
                    name="tanggalLahir"
                    onChange={handleTanggalLahir}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        type="text"
                        size="small"
                        name="tanggalLahir"
                      />
                    )}
                  />
                </LocalizationProvider>
              </Box>
            </Form>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default FormDaftar;
