import * as yup from 'yup';

// eslint-disable-next-line
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&].{7,}$/;
const hurufBesar = /(?=.*[A-Z])$/;
const angka = /(?=.*\\d)$/;
const unique = /(?=.*[@$!%*?&])$/;
// const notAllowSymbolRegex = /(?=.*[#^`~,.<>;':"/[\]|\\{}()=_+-])/;

export const schemaForm = yup.object({
  username: yup.string().required('Username is required'),
  email: yup
    .string()
    .email('Please enter your email address')
    .min(4)
    .required('Email is required')
    .matches(emailRegex, { message: 'Please enter your email address' }),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(passwordRegex, {
      message: `Password must be have Capital letters, numbers and @$!%*?&`,
    }),
  confirmPassword: yup
    .string()
    .required('Password not correct')
    .oneOf(
      [yup.ref('password', { message: 'Enter your password' })],
      'Please input a password previously entered'
    ),
  address: yup.array().required('Address is required'),
  agreement: yup
    .boolean()
    .required('accepted is required')
    .oneOf([true], 'Please accept the agreement'),
});
