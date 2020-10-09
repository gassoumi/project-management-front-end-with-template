import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import FormsDatepickerBasic from '../../example-components/FormsDatepicker/FormsDatepickerBasic';
export default function FormsDatepicker() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Datepicker"
        titleDescription="Build beautiful datepickers perfectly integrated in the general style of the application."
      />

      <ExampleWrapperSimple sectionHeading="Basic">
        <FormsDatepickerBasic />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
