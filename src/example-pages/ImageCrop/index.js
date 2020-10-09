import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';

import ImageCropBasic from '../../example-components/ImageCrop/ImageCropBasic';
export default function ImageCrop() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Image Crop"
        titleDescription="You can easily crop and edit images with this React component."
      />
      <ExampleWrapperSeamless sectionHeading="Basic">
        <ImageCropBasic />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
