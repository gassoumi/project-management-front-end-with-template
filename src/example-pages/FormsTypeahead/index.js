import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';
import { Grid } from '@material-ui/core';

import { ExampleWrapperSimple } from '../../layout-components';

import FormsTypeaheadBasic from '../../example-components/FormsTypeahead/FormsTypeaheadBasic';
import FormsTypeaheadSizing from '../../example-components/FormsTypeahead/FormsTypeaheadSizing';
import FormsTypeaheadInputGroups from '../../example-components/FormsTypeahead/FormsTypeaheadInputGroups';
import FormsTypeaheadMultiple from '../../example-components/FormsTypeahead/FormsTypeaheadMultiple';
export default function FormsTypeahead() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Typeahead"
        titleDescription="Create beautiful suggestion inputs for React form elements."
      />

      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSimple sectionHeading="Basic">
            <FormsTypeaheadBasic />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Sizing">
            <FormsTypeaheadSizing />
          </ExampleWrapperSimple>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSimple sectionHeading="Multiple">
            <FormsTypeaheadMultiple />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Input groups">
            <FormsTypeaheadInputGroups />
          </ExampleWrapperSimple>
        </Grid>
      </Grid>
    </Fragment>
  );
}
