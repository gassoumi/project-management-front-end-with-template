import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import DynamicTables2Example1 from '../../example-components/DynamicTables2/DynamicTables2Example1';
import DynamicTables2Example2 from '../../example-components/DynamicTables2/DynamicTables2Example2';
export default function DynamicTables2() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="React Material-UI"
        titleDescription="Dynamic tables with advanced functionality like sort, search or filter."
      />

      <ExampleWrapperSimple sectionHeading="Sortable table">
        <DynamicTables2Example1 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Custom pagination actions">
        <DynamicTables2Example2 />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
