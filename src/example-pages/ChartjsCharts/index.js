import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';
import { Grid } from '@material-ui/core';

import { ExampleWrapperSimple } from '../../layout-components';

import ChartjsChartsLine from '../../example-components/ChartJsCharts/ChartjsChartsLine';
import ChartjsChartsBar from '../../example-components/ChartJsCharts/ChartjsChartsBar';
import ChartjsChartsDoughnut from '../../example-components/ChartJsCharts/ChartjsChartsDoughnut';
import ChartjsChartsRadar from '../../example-components/ChartJsCharts/ChartjsChartsRadar';
import ChartjsChartsPolar from '../../example-components/ChartJsCharts/ChartjsChartsPolar';
import ChartjsChartsDynamic from '../../example-components/ChartJsCharts/ChartjsChartsDynamic';

export default function ChartjsCharts() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="ChartJS"
        titleDescription="Huge selection of charts created with the ChartJS Plugin."
      />

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ExampleWrapperSimple sectionHeading="Bar">
            <ChartjsChartsBar />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Polar">
            <ChartjsChartsPolar />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Radar">
            <ChartjsChartsRadar />
          </ExampleWrapperSimple>
        </Grid>
        <Grid item xs={12} md={6}>
          <ExampleWrapperSimple sectionHeading="Doughnut">
            <ChartjsChartsDoughnut />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Dynamic">
            <ChartjsChartsDynamic />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Line">
            <ChartjsChartsLine />
          </ExampleWrapperSimple>
        </Grid>
      </Grid>
    </Fragment>
  );
}
