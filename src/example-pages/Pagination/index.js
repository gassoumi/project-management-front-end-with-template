import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import PaginationBasic from '../../example-components/Pagination/PaginationBasic';
import PaginationAlternate from '../../example-components/Pagination/PaginationAlternate';
export default function Pagination() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Pagination"
        titleDescription="Basic and dynamic pagination for use in your next awesome application."
      />
      <ExampleWrapperSimple sectionHeading="Basic">
        <PaginationBasic />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Material Pagination">
        <PaginationAlternate />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
