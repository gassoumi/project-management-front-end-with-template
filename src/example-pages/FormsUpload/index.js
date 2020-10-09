import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import FormsUploadDropzone from '../../example-components/FormsUpload/FormsUploadDropzone';
export default function FormsUpload() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Upload"
        titleDescription="Handle your file uploads on the server easily and with style."
      />

      <ExampleWrapperSimple sectionHeading="Dropzone">
        <FormsUploadDropzone />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
