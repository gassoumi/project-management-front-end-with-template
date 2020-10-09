import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';
import { Grid } from '@material-ui/core';

import { ExampleWrapperSimple } from '../../layout-components';

import AvatarsBasic from '../../example-components/Avatars/AvatarsBasic';
import AvatarsSizing from '../../example-components/Avatars/AvatarsSizing';
import AvatarsInitials from '../../example-components/Avatars/AvatarsInitials';
import AvatarsBadges from '../../example-components/Avatars/AvatarsBadges';
import AvatarsOverlap from '../../example-components/Avatars/AvatarsOverlap';
export default function Avatars() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Avatars"
        titleDescription="Image or letters avatars with multiple sizes, borders and possibility to group them."
      />

      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSimple sectionHeading="Basic">
            <AvatarsBasic />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Sizing">
            <AvatarsSizing />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Initials">
            <AvatarsInitials />
          </ExampleWrapperSimple>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSimple sectionHeading="Avatars with badges">
            <AvatarsBadges />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Overlap">
            <AvatarsOverlap />
          </ExampleWrapperSimple>
        </Grid>
      </Grid>
    </Fragment>
  );
}
