import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';

import CtaBoxes1 from '../../example-components/CtaBoxes/CtaBoxes1';
import CtaBoxes2 from '../../example-components/CtaBoxes/CtaBoxes2';
import CtaBoxes3 from '../../example-components/CtaBoxes/CtaBoxes3';
import CtaBoxes4 from '../../example-components/CtaBoxes/CtaBoxes4';
export default function CtaBoxes() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Call to action boxes"
        titleDescription="Bring that sale home, with these components you&#39;re one step closer."
      />

      <ExampleWrapperSeamless sectionHeading="Call to action 1">
        <CtaBoxes1 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Call to action 2">
        <CtaBoxes2 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Call to action 3">
        <CtaBoxes3 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Call to action 4">
        <CtaBoxes4 />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
