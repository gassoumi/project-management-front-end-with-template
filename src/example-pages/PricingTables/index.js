import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import PricingTables1 from '../../example-components/PricingTables/PricingTables1';
import PricingTables2 from '../../example-components/PricingTables/PricingTables2';
import PricingTables3 from '../../example-components/PricingTables/PricingTables3';
import PricingTables4 from '../../example-components/PricingTables/PricingTables4';
export default function PricingTables() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Pricing Tables"
        titleDescription="Multiple examples of pricing tables to suit all needs."
      />

      <ExampleWrapperSimple sectionHeading="Pricing tables 1">
        <PricingTables1 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Pricing tables 2">
        <PricingTables2 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Pricing tables 3">
        <PricingTables3 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Pricing tables 4">
        <PricingTables4 />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
