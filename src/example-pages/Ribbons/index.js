import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import RibbonsHorizontal from '../../example-components/Ribbons/RibbonsHorizontal';
import RibbonsVertical from '../../example-components/Ribbons/RibbonsVertical';
import RibbonsAngle from '../../example-components/Ribbons/RibbonsAngle';
export default function Ribbons() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Ribbons"
        titleDescription="Symbols that can be used to add an extra touch to our React cards or elements."
      />

      <ExampleWrapperSimple sectionHeading="Angled ribbons">
        <RibbonsAngle />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Horizontal ribbons">
        <RibbonsHorizontal />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Vertical ribbons">
        <RibbonsVertical />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
