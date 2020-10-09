import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import FormsInputSelectMaterial from '../../example-components/FormsInputSelect/FormsInputSelectMaterial';
export default function FormsInputSelect() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Input Select"
        titleDescription="Create fancy multi select dropdown menus for a better user experience."
      />
      <ExampleWrapperSimple sectionHeading="Material-UI Select">
        <FormsInputSelectMaterial />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
