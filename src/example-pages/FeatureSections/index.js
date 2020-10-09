import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import FeatureSections1 from '../../example-components/FeatureSections/FeatureSections1';
import FeatureSections2 from '../../example-components/FeatureSections/FeatureSections2';
import FeatureSections3 from '../../example-components/FeatureSections/FeatureSections3';
import FeatureSections4 from '../../example-components/FeatureSections/FeatureSections4';
import FeatureSections5 from '../../example-components/FeatureSections/FeatureSections5';
import FeatureSections6 from '../../example-components/FeatureSections/FeatureSections6';
export default function FeatureSections() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Feature sections"
        titleDescription="Create feature boxes to present your options in style."
      />

      <ExampleWrapperSimple sectionHeading="Feature section 1">
        <FeatureSections1 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Feature section 2">
        <FeatureSections2 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Feature section 3">
        <FeatureSections3 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Feature section 4">
        <FeatureSections4 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Feature section 5">
        <FeatureSections5 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Feature section 6">
        <FeatureSections6 />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
