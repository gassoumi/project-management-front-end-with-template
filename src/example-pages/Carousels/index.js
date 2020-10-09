import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';
import { Grid } from '@material-ui/core';
import { ExampleWrapperSeamless } from '../../layout-components';
import { ExampleWrapperSimple } from '../../layout-components';

import CarouselsSlideshows from '../../example-components/Carousels/CarouselsSlideshows';
import CarouselsFullWidth from '../../example-components/Carousels/CarouselsFullWidth';
import CarouselsIntegrationOne from '../../example-components/Carousels/CarouselsIntegrationOne';
import CarouselsIntegrationTwo from '../../example-components/Carousels/CarouselsIntegrationTwo';
import CarouselsIntegrationThree from '../../example-components/Carousels/CarouselsIntegrationThree';
import CarouselsIntegrationFour from '../../example-components/Carousels/CarouselsIntegrationFour';
export default function Carousels() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Carousels"
        titleDescription="Create easy, simple to use and beautiful slideshows &amp; carousels with these components."
      />

      <ExampleWrapperSeamless sectionHeading="Slideshows">
        <CarouselsSlideshows />
      </ExampleWrapperSeamless>
      <ExampleWrapperSimple sectionHeading="Full width carousel">
        <CarouselsFullWidth />
      </ExampleWrapperSimple>

      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSeamless sectionHeading="Integration example I">
            <CarouselsIntegrationOne />
          </ExampleWrapperSeamless>
          <ExampleWrapperSeamless sectionHeading="Integration example II">
            <CarouselsIntegrationTwo />
          </ExampleWrapperSeamless>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSeamless sectionHeading="Integration example III">
            <CarouselsIntegrationThree />
          </ExampleWrapperSeamless>
          <ExampleWrapperSimple sectionHeading="Integration example IV">
            <CarouselsIntegrationFour />
          </ExampleWrapperSimple>
        </Grid>
      </Grid>
    </Fragment>
  );
}
