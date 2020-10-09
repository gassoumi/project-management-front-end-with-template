import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';

import RegularTables2Example2 from '../../example-components/RegularTables2/RegularTables2Example2';
import RegularTables2Example3 from '../../example-components/RegularTables2/RegularTables2Example3';
export default function RegularTables2() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Tables examples 2"
        titleDescription="Tables are the backbone of almost all web applications."
      />

      <ExampleWrapperSeamless sectionHeading="">
        <RegularTables2Example2 />
        <RegularTables2Example3 />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
