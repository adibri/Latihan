import { Form, Formik } from 'formik';
import React, { Fragment, useEffect, useState } from 'react';
import Email from '../../asets/icons/Email';
import CustomCheckbox from '../../components/CustomCheckbox';
import CustomInput from '../../components/CustomInput';
import CustomModal from '../../components/CustomModal';
import CustomSelect from '../../components/CustomSelect';
import { formSchema } from '../../helpers/schemaForm';

const onSubmit = async (value, actions) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve, 3000);
    return actions.resetForm();
  });
};

function Register(props) {
  return (
    <div className="w-full px-24 text-zinc-900">
      <h1 className="w-full text-2xl mt-5 font-extrabold flex justify-center items-center tracking-wider">
        REGISTRATION
      </h1>
      {/* <Email /> */}
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          document_type: '',
          address: '',
          agrement: false,
        }}
        validationSchema={formSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="flex flex-col mx-24 px-16">
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
            <div className="w-full flex flex-col items-center">
              <CustomSelect
                label="Document Type"
                name="document_type"
                placeholder="Select document type"
                type="select"
              >
                {/* <div className="relative mt-1"> */}

                {/* <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              > */}
                {/* <Listbox.Option value="">
                      Select your document
                    </Listbox.Option> */}
                <option value="">Select your document</option>
                <option value="KTP">KTP</option>
                <option value="NPWP">NPWP</option>
                <option value="Surat_Pinjaman">Surat Pinjaman</option>
                <option value="Akta_Perusahaan">Akta Perusahaan</option>
                {/* </Transition> */}
                {/* </div> */}
              </CustomSelect>
            </div>

            <div className="w-full flex flex-col mt-3 pb-4">
              <label className="w-full">Address</label>
              <div className="flex flex-row w-full justify-center items-center">
                <h3>RT</h3>
                <input
                  className="w-3/5 h-10 mx-2 border border-zinc-300 rounded-xl px-3"
                  type="text"
                  placeholder="Address"
                  name="address"
                />
                <h3>RW</h3>
                <input
                  className="w-3/5 h-10 mx-2 border border-zinc-300 rounded-xl px-3"
                  type="text"
                  placeholder="Address"
                  name="address"
                />
                <h3>Desa</h3>
                <input
                  className="w-3/5 h-10 ml-2 border border-zinc-300 rounded-xl px-3"
                  type="text"
                  placeholder="Address"
                  name="address"
                />
                <CustomModal />
              </div>
              <div className="flex flex-row w-full justify-center items-center pt-2">
                <h3>Kec</h3>
                <input
                  className="w-3/5 h-10 mx-2 border border-zinc-300 rounded-xl px-3"
                  type="text"
                  placeholder="Address"
                  name="address"
                />
                <h3>Kab</h3>
                <input
                  className="w-3/5 h-10 mx-2 border border-zinc-300 rounded-xl px-3"
                  type="text"
                  placeholder="Address"
                  name="address"
                />
                <h3>Prov</h3>
                <input
                  className="w-3/5 h-10 ml-2 border border-zinc-300 rounded-xl px-3"
                  type="text"
                  placeholder="Address"
                  name="address"
                />
              </div>
            </div>
            <CustomCheckbox type="checkbox" name="agreement" />
            <div className="justify-center w-100 flex flex-row mt-4">
              <button
                disabled={isSubmitting}
                type="submit"
                className={`py-1 w-2/4 border rounded-2xl mb-5 bg-zinc-500 hover:bg-opacity-60 text-sm font-medium text-white
                ${isSubmitting ? 'disabled:bg-slate-100' : ''}
                `}
              >
                Submit
              </button>
              <button
                type="reset"
                className="py-2 w-2/4  border rounded-2xl mb-5 bg-zinc-500 hover:bg-opacity-60 text-sm font-medium text-white"
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
