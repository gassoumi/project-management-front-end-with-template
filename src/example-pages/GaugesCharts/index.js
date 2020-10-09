import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';
import { ExampleWrapperSimple } from '../../layout-components';

import GaugesChartsDashboardGauges from '../../example-components/GaugesCharts/GaugesChartsDashboardGauges';
import GaugesChartsBasic from '../../example-components/GaugesCharts/GaugesChartsBasic';
import GaugesChartsSparklines from '../../example-components/GaugesCharts/GaugesChartsSparklines';
import GaugesChartsIntegrationOne from '../../example-components/GaugesCharts/GaugesChartsIntegrationOne';
import GaugesChartsIntegrationTwo from '../../example-components/GaugesCharts/GaugesChartsIntegrationTwo';
export default function GaugesCharts() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Gauges Charts"
        titleDescription="Create wonderful animated gauges that can be used in combination with other UI elements."
      />

      <ExampleWrapperSimple sectionHeading="Dashboard gauges">
        <GaugesChartsDashboardGauges />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Basic">
        <GaugesChartsBasic />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Sparklines">
        <GaugesChartsSparklines />
      </ExampleWrapperSimple>
      <ExampleWrapperSeamless sectionHeading="Gauges examples I">
        <GaugesChartsIntegrationOne />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Gauges examples II">
        <GaugesChartsIntegrationTwo />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
