import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import GuidedToursBasic from '../../example-components/GuidedTours/GuidedToursBasic';
export default function GuildedTours() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Guided Tours"
        titleDescription="These can be used with other components and elements to create stunning and unique new elements for your UIs."
      />

      <ExampleWrapperSimple sectionHeading="Basic">
        <GuidedToursBasic />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
