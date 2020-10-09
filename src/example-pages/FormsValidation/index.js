import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import FormsValidationBasic from '../../example-components/FormsValidation/FormsValidationBasic';
export default function FormsValidation() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Validation"
        titleDescription="Inline validation is very easy to implement using our UI framework."
      />

      <ExampleWrapperSimple sectionHeading="Basic">
        <FormsValidationBasic />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
