import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';
import { Grid } from '@material-ui/core';

import { ExampleWrapperSimple } from '../../layout-components';

import RatingsBasic from '../../example-components/Ratings/RatingsBasic';
import RatingsCustomIconsOne from '../../example-components/Ratings/RatingsCustomIconsOne';
export default function Ratings() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Ratings"
        titleDescription="Display beautiful ratings with custom icons, stars and colors."
      />

      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSimple sectionHeading="Basic">
            <RatingsBasic />
          </ExampleWrapperSimple>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSimple sectionHeading="Custom icons example I">
            <RatingsCustomIconsOne />
          </ExampleWrapperSimple>
        </Grid>
      </Grid>
    </Fragment>
  );
}
