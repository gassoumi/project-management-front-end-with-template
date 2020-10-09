import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import FormsInputMaskBasic from '../../example-components/FormsInputMask/FormsInputMaskBasic';

export default function FormsInputMask() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Input Mask"
        titleDescription="Add all kind of input masks for inputs for a better user experience."
      />
      <ExampleWrapperSimple sectionHeading="Basic">
        <FormsInputMaskBasic />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
