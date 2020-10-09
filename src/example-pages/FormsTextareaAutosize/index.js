import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import FormsTextareaAutosizeBasic from '../../example-components/FormsTextareaAutosize/FormsTextareaAutosizeBasic';
import FormsTextareaAutosizeMinMaxRows from '../../example-components/FormsTextareaAutosize/FormsTextareaAutosizeMinMaxRows';
export default function FormsTextareaAutosize() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Textarea Autosize"
        titleDescription="Create textareas that grow in height based on their content."
      />
      <ExampleWrapperSimple sectionHeading="Basic">
        <FormsTextareaAutosizeBasic />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Min & Max rows">
        <FormsTextareaAutosizeMinMaxRows />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
