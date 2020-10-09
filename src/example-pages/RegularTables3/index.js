import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';

import RegularTables3Example4 from '../../example-components/RegularTables3/RegularTables3Example4';
import RegularTables3Example5 from '../../example-components/RegularTables3/RegularTables3Example5';
export default function RegularTables3() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Tables examples 3"
        titleDescription="Tables are the backbone of almost all web applications."
      />

      <ExampleWrapperSeamless sectionHeading="">
        <RegularTables3Example4 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="">
        <RegularTables3Example5 />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
