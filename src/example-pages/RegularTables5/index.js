import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';

import RegularTables5Example8 from '../../example-components/RegularTables5/RegularTables5Example8';
export default function RegularTables5() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Tables examples 5"
        titleDescription="Tables are the backbone of almost all web applications."
      />

      <ExampleWrapperSeamless sectionHeading="">
        <RegularTables5Example8 />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
