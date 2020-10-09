import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';
import { Grid } from '@material-ui/core';

import { ExampleWrapperSimple } from '../../layout-components';

import TreeViewBasic from '../../example-components/TreeView/TreeViewBasic';
import TreeViewCustom1 from '../../example-components/TreeView/TreeViewCustom1';
import TreeViewCustom2 from '../../example-components/TreeView/TreeViewCustom2';
export default function TreeView() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Tree View"
        titleDescription="Create stunning tree like views with this awesome React plugin."
      />

      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <ExampleWrapperSimple sectionHeading="Basic">
            <TreeViewBasic />
          </ExampleWrapperSimple>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ExampleWrapperSimple sectionHeading="Custom 1">
            <TreeViewCustom1 />
          </ExampleWrapperSimple>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ExampleWrapperSimple sectionHeading="Custom 2">
            <TreeViewCustom2 />
          </ExampleWrapperSimple>
        </Grid>
      </Grid>
    </Fragment>
  );
}
