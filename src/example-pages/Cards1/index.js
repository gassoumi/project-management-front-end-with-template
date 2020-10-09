import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';

import Cards1Examples1 from '../../example-components/Cards1/Cards1Examples1';
import Cards1Examples2 from '../../example-components/Cards1/Cards1Examples2';
import Cards1Examples3 from '../../example-components/Cards1/Cards1Examples3';
import Cards1Examples4 from '../../example-components/Cards1/Cards1Examples4';
import Cards1Examples5 from '../../example-components/Cards1/Cards1Examples5';
import Cards1Examples6 from '../../example-components/Cards1/Cards1Examples6';
import Cards1Examples7 from '../../example-components/Cards1/Cards1Examples7';
export default function Cards1() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Cards examples 1"
        titleDescription="Wide selection of cards with multiple styles, borders, actions and hover effects."
      />

      <ExampleWrapperSeamless sectionHeading="Cards 1">
        <Cards1Examples1 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 2">
        <Cards1Examples2 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 3">
        <Cards1Examples3 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 4">
        <Cards1Examples4 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 5">
        <Cards1Examples5 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 6">
        <Cards1Examples6 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 7">
        <Cards1Examples7 />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
