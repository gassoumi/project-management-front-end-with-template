import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';

import Cards4Examples22 from '../../example-components/Cards4/Cards4Examples22';
import Cards4Examples23 from '../../example-components/Cards4/Cards4Examples23';
import Cards4Examples24 from '../../example-components/Cards4/Cards4Examples24';
import Cards4Examples25 from '../../example-components/Cards4/Cards4Examples25';
import Cards4Examples26 from '../../example-components/Cards4/Cards4Examples26';
import Cards4Examples27 from '../../example-components/Cards4/Cards4Examples27';
import Cards4Examples28 from '../../example-components/Cards4/Cards4Examples28';
export default function Cards4() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Cards examples 4"
        titleDescription="Wide selection of cards with multiple styles, borders, actions and hover effects."
      />

      <ExampleWrapperSeamless sectionHeading="Cards 22">
        <Cards4Examples22 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 23">
        <Cards4Examples23 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 24">
        <Cards4Examples24 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 25">
        <Cards4Examples25 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 26">
        <Cards4Examples26 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 27">
        <Cards4Examples27 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 28">
        <Cards4Examples28 />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
