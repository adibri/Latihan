import { Form, Formik } from 'formik';
import React from 'react';
import CustomCheckbox from '../../components/CustomCheckbox';
import CustomInput from '../../components/CustomInput';
import CustomSelect from '../../components/CustomSelect';
import { formSchema } from '../../helpers/schemaForm';

function Register(props) {
  return (
    <div className="w-full px-24 text-zinc-900">
      <h1 className="w-full text-2xl mt-5 font-extrabold flex justify-center items-center tracking-wider">
        REGISTRATION
      </h1>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          document_type: '',
          agrement: false,
        }}
        validationSchema={formSchema}
      >
        {(props) => (
          <Form className="flex flex-col mx-24">
            <CustomInput
              label="Username"
              name="username"
              placeholder="Enter your username"
              type="text"
            />
            <CustomInput
              label="Email"
              name="email"
              placeholder="Enter your email"
              type="email"
            />
            <CustomInput
              label="Password"
              name="password"
              placeholder="Enter your password"
              type="password"
            />
            <CustomInput
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Enter your password"
              type="password"
            />
            <CustomSelect
              label="Document Type"
              name="document_type"
              placeholder="Select document type"
              type="select"
            >
              <option value="">Select your document</option>
              <option value="KTP">KTP</option>
              <option value="NPWP">NPWP</option>
              <option value="Surat_Pinjaman">Surat Pinjaman</option>
              <option value="Akta_Perusahaan">Akta Perusahaan</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="agreement"></CustomCheckbox>
            <div className="justify-center w-100 flex flex-row mt-4">
              <button
                type="submit"
                className="py-1 w-2/4 border rounded-2xl mb-5 bg-slate-500 hover:bg-blue-400"
              >
                Submit
              </button>
              <button
                type="reset"
                className="py-2 w-2/4  border rounded-2xl mb-5 bg-slate-500 hover:bg-orange-400"
              >
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
