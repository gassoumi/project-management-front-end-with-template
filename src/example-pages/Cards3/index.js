import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';

import Cards3Examples15 from '../../example-components/Cards3/Cards3Examples15';
import Cards3Examples16 from '../../example-components/Cards3/Cards3Examples16';
import Cards3Examples17 from '../../example-components/Cards3/Cards3Examples17';
import Cards3Examples18 from '../../example-components/Cards3/Cards3Examples18';
import Cards3Examples19 from '../../example-components/Cards3/Cards3Examples19';
import Cards3Examples20 from '../../example-components/Cards3/Cards3Examples20';
import Cards3Examples21 from '../../example-components/Cards3/Cards3Examples21';
export default function Cards3() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Cards examples 3"
        titleDescription="Wide selection of cards with multiple styles, borders, actions and hover effects."
      />

      <ExampleWrapperSeamless sectionHeading="Cards 15">
        <Cards3Examples15 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 16">
        <Cards3Examples16 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 17">
        <Cards3Examples17 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 18">
        <Cards3Examples18 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 19">
        <Cards3Examples19 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 20">
        <Cards3Examples20 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 21">
        <Cards3Examples21 />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
