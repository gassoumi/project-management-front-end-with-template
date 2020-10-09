import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';
import { Grid } from '@material-ui/core';
import { ExampleWrapperSeamless } from '../../layout-components';
import { ExampleWrapperSimple } from '../../layout-components';

import ScrollableBasic from '../../example-components/Scrollable/ScrollableBasic';
import ScrollableInfiniteScroll from '../../example-components/Scrollable/ScrollableInfiniteScroll';
import ScrollableIntegrationOne from '../../example-components/Scrollable/ScrollableIntegrationOne';
import ScrollableIntegrationTwo from '../../example-components/Scrollable/ScrollableIntegrationTwo';
import ScrollableIntegrationThree from '../../example-components/Scrollable/ScrollableIntegrationThree';
import ScrollableIntegrationFour from '../../example-components/Scrollable/ScrollableIntegrationFour';
import ScrollableIntegrationFive from '../../example-components/Scrollable/ScrollableIntegrationFive';
export default function Scrollable() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Scrollable"
        titleDescription="Add scrolling areas to any elements with custom scrollbars or default browser ones."
      />

      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSeamless sectionHeading="Scrollable menus with headers">
            <ScrollableIntegrationThree />
          </ExampleWrapperSeamless>
          <ExampleWrapperSeamless sectionHeading="Scrollable chat boxes">
            <ScrollableIntegrationTwo />
          </ExampleWrapperSeamless>
          <ExampleWrapperSimple sectionHeading="Infinite Scroll">
            <ScrollableInfiniteScroll />
          </ExampleWrapperSimple>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSeamless sectionHeading="Scrollable timelines">
            <ScrollableIntegrationOne />
          </ExampleWrapperSeamless>
          <ExampleWrapperSeamless sectionHeading="Scrollable navigations">
            <ScrollableIntegrationFour />
          </ExampleWrapperSeamless>
          <ExampleWrapperSeamless sectionHeading="Scrollable progress lists">
            <ScrollableIntegrationFive />
          </ExampleWrapperSeamless>
        </Grid>
      </Grid>

      <ExampleWrapperSeamless sectionHeading="Custom scrollbars & Sizing">
        <ScrollableBasic />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
