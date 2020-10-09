import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';

import Cards6Examples36 from '../../example-components/Cards6/Cards6Examples36';
import Cards6Examples37 from '../../example-components/Cards6/Cards6Examples37';
import Cards6Examples38 from '../../example-components/Cards6/Cards6Examples38';
import Cards6Examples39 from '../../example-components/Cards6/Cards6Examples39';
import Cards6Examples40 from '../../example-components/Cards6/Cards6Examples40';
import Cards6Examples41 from '../../example-components/Cards6/Cards6Examples41';
export default function Cards6() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Cards examples 6"
        titleDescription="Wide selection of cards with multiple styles, borders, actions and hover effects."
      />

      <ExampleWrapperSeamless sectionHeading="Cards 36">
        <Cards6Examples36 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 37">
        <Cards6Examples37 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 38">
        <Cards6Examples38 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 39">
        <Cards6Examples39 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 40">
        <Cards6Examples40 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 41">
        <Cards6Examples41 />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
