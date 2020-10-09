import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import PartnersSections1 from '../../example-components/PartnersSections/PartnersSections1';
import PartnersSections2 from '../../example-components/PartnersSections/PartnersSections2';
import PartnersSections3 from '../../example-components/PartnersSections/PartnersSections3';
import PartnersSections4 from '../../example-components/PartnersSections/PartnersSections4';
export default function PartnersSections() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Partners sections"
        titleDescription="Maybe you want to show some of your partners. We&#39;ve got you covered."
      />

      <ExampleWrapperSimple sectionHeading="Partners sections 1">
        <PartnersSections1 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Partners sections 2">
        <PartnersSections2 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Partners sections 3">
        <PartnersSections3 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Partners sections 4">
        <PartnersSections4 />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
