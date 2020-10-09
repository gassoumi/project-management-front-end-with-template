import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';
import { Grid } from '@material-ui/core';

import { ExampleWrapperSimple } from '../../layout-components';

import FormsWizardBasic from '../../example-components/FormsWizard/FormsWizardBasic';
import FormsWizardVertical from '../../example-components/FormsWizard/FormsWizardVertical';
export default function FormsWizard() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Wizard"
        titleDescription="Easily create beautiful form multi step wizards or presentation steps."
      />

      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSimple sectionHeading="Horizontal Stepper">
            <FormsWizardBasic />
          </ExampleWrapperSimple>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSimple sectionHeading="Vertical Stepper">
            <FormsWizardVertical />
          </ExampleWrapperSimple>
        </Grid>
      </Grid>
    </Fragment>
  );
}
