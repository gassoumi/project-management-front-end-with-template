import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import FooterSections1 from '../../example-components/FooterSections/FooterSections1';
import FooterSections2 from '../../example-components/FooterSections/FooterSections2';
import FooterSections3 from '../../example-components/FooterSections/FooterSections3';
export default function FooterSections() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Footer sections"
        titleDescription="Choose between multiple footer section styles."
      />

      <ExampleWrapperSimple sectionHeading="Footer 1">
        <FooterSections1 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Footer 2">
        <FooterSections2 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Footer 3">
        <FooterSections3 />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
