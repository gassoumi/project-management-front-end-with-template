import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import FormsTimepickerMaterial from '../../example-components/FormsTimepicker/FormsTimepickerMaterial';
export default function FormsTimepicker() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Timepicker"
        titleDescription="The timepicker component is a plugin that helps users easily input time entries."
      />

      <ExampleWrapperSimple sectionHeading="Material">
        <FormsTimepickerMaterial />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
