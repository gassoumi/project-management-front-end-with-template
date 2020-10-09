import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import IconBoxes1 from '../../example-components/IconBoxes/IconBoxes1';
import IconBoxes2 from '../../example-components/IconBoxes/IconBoxes2';
import IconBoxes3 from '../../example-components/IconBoxes/IconBoxes3';
import IconBoxes4 from '../../example-components/IconBoxes/IconBoxes4';
import IconBoxes5 from '../../example-components/IconBoxes/IconBoxes5';
import IconBoxes6 from '../../example-components/IconBoxes/IconBoxes6';
import IconBoxes7 from '../../example-components/IconBoxes/IconBoxes7';
export default function IconBoxes() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Icon Boxes"
        titleDescription="These boxes can be used to pin point features &amp; highlights."
      />

      <ExampleWrapperSimple sectionHeading="Icon boxes 1">
        <IconBoxes1 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Icon boxes 2">
        <IconBoxes2 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Icon boxes 3">
        <IconBoxes3 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Icon boxes 4">
        <IconBoxes4 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Icon boxes 5">
        <IconBoxes5 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Icon boxes 6">
        <IconBoxes6 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Icon boxes 7">
        <IconBoxes7 />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
