import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';
import { Grid } from '@material-ui/core';
import { ExampleWrapperSeamless } from '../../layout-components';

import AccordionsBasic from '../../example-components/Accordions/AccordionsBasic';
import AccordionsCollapse from '../../example-components/Accordions/AccordionsCollapse';
import AccordionsIntegrationOne from '../../example-components/Accordions/AccordionsIntegrationOne';
import AccordionsIntegrationTwo from '../../example-components/Accordions/AccordionsIntegrationTwo';

export default function Accordions() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Accordions"
        titleDescription="Accordions represent collapsable component with extended functionality."
      />
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSeamless sectionHeading="Basic">
            <AccordionsBasic />
          </ExampleWrapperSeamless>
          <ExampleWrapperSeamless sectionHeading="Integrations examples I">
            <AccordionsIntegrationOne />
          </ExampleWrapperSeamless>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSeamless sectionHeading="Collapse">
            <AccordionsCollapse />
          </ExampleWrapperSeamless>
          <ExampleWrapperSeamless sectionHeading="Integrations examples II">
            <AccordionsIntegrationTwo />
          </ExampleWrapperSeamless>
        </Grid>
      </Grid>
    </Fragment>
  );
}
