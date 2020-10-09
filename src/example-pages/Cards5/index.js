import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';

import Cards5Examples29 from '../../example-components/Cards5/Cards5Examples29';
import Cards5Examples30 from '../../example-components/Cards5/Cards5Examples30';
import Cards5Examples31 from '../../example-components/Cards5/Cards5Examples31';
import Cards5Examples32 from '../../example-components/Cards5/Cards5Examples32';
import Cards5Examples33 from '../../example-components/Cards5/Cards5Examples33';
import Cards5Examples35 from '../../example-components/Cards5/Cards5Examples35';
export default function Cards5() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Cards examples 5"
        titleDescription="Wide selection of cards with multiple styles, borders, actions and hover effects."
      />

      <ExampleWrapperSeamless sectionHeading="Cards 29">
        <Cards5Examples29 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 30">
        <Cards5Examples30 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 31">
        <Cards5Examples31 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 32">
        <Cards5Examples32 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 33">
        <Cards5Examples33 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 35">
        <Cards5Examples35 />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
