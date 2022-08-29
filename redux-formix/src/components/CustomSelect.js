import { useField } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import CustomHandleUpload from './CustomHandleUpload';

function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);
  const [uploadDocuments, setUploadDocuments] = useState(false);

  const ktp = useRef(null);
  const npwp = useRef(null);
  const aktaPerusahaan = useRef(null);
  const suratPinjaman = useRef(null);
  return (
    <>
      <div className="flex flex-col w-full my-3">
        {/* <Listbox>
        <Listbox.Button>
          <ArrowList />
        </Listbox.Button> */}
        <label className="">{label}</label>
        <select
          // onSelect={!uploadDocuments}
          // uploadDocuments={uploadDocuments}
          {...props}
          {...field}
          // onSelect={handleUploadDocument}
          className={`${meta.touched && meta.error ? 'border-red-400' : ''}
          px-3 py-2 rounded-xl border`}
        ></select>
        {meta.touched && meta.error && (
          <p className="text-sm flex-col ml-3 text-red-600">{meta.error}</p>
        )}
        <CustomHandleUpload
          meta={meta}
          field={field}
          uploadDocuments={() => setUploadDocuments(!uploadDocuments)}
          ktpRef={ktp}
          npwpRef={npwp}
          aktaPerusahaanRef={aktaPerusahaan}
          suratPinjamanRef={suratPinjaman}
        />
      </div>
    </>
  );
}

export default CustomSelect;
