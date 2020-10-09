import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import FormsColorpickerBasic from '../../example-components/FormsColorpicker/FormsColorpickerBasic';
import FormsColorpickerPermanent from '../../example-components/FormsColorpicker/FormsColorpickerPermanent';
export default function FormsColorpicker() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Colorpicker"
        titleDescription="Color Pickers following the design from Photoshop, Sketch, Chrome, Twitter and more."
      />

      <ExampleWrapperSimple sectionHeading="Basic">
        <FormsColorpickerBasic />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Permanent">
        <FormsColorpickerPermanent />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
