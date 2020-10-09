import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';

import SparklinesChartsBasic from '../../example-components/SparklinesCharts/SparklinesChartsBasic';
import SparklinesChartsApex from '../../example-components/SparklinesCharts/SparklinesChartsApex';
import SparklinesChartsGradients from '../../example-components/SparklinesCharts/SparklinesChartsGradients';
export default function SparklinesCharts() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Sparklines Charts"
        titleDescription="These components add tiny charts in various elements and components."
      />

      <ExampleWrapperSeamless sectionHeading="Sparklines examples 1">
        <SparklinesChartsApex />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Sparklines examples 2">
        <SparklinesChartsBasic />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Sparklines examples 3">
        <SparklinesChartsGradients />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
