import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';
import { Grid } from '@material-ui/core';

import ApplicationsWidgetsChat from '../../example-components/ApplicationsWidgets/ApplicationsWidgetsChat';
import ApplicationsWidgetsFiles from '../../example-components/ApplicationsWidgets/ApplicationsWidgetsFiles';
import ApplicationsWidgetsTimeline from '../../example-components/ApplicationsWidgets/ApplicationsWidgetsTimeline';
export default function ApplicationsWidgets() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="App Widgets"
        titleDescription="Examples of app snippets, like chat, file managers or tasks, that can be integrated in other elements, like card boxes."
      />

      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <ApplicationsWidgetsChat />
        </Grid>
        <Grid item xs={12} lg={6}>
          <ApplicationsWidgetsTimeline />
        </Grid>
        <Grid item xs={12}>
          <ApplicationsWidgetsFiles />
        </Grid>
      </Grid>
    </Fragment>
  );
}
