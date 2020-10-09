import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';
import { ExampleWrapperSimple } from '../../layout-components';

import CountupBasic from '../../example-components/Countup/CountupBasic';
import CountupNumbers from '../../example-components/Countup/CountupNumbers';
import CountupIntegrationOne from '../../example-components/Countup/CountupIntegrationOne';
import CountupIntegrationTwo from '../../example-components/Countup/CountupIntegrationTwo';
import CountupIntegrationThree from '../../example-components/Countup/CountupIntegrationThree';
export default function Countup() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Count Up"
        titleDescription="Add animations to your numbers. It&#39;ll make your next ArchitectUI app more user friendly."
      />

      <ExampleWrapperSimple sectionHeading="Basic examples">
        <CountupBasic />
      </ExampleWrapperSimple>
      <ExampleWrapperSeamless sectionHeading="Counter integration I">
        <CountupIntegrationOne />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Counter integration II">
        <CountupIntegrationTwo />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Counter integration III">
        <CountupIntegrationThree />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Numbers alternate examples">
        <CountupNumbers />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
