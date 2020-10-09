import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';

import Cards10Examples62 from '../../example-components/Cards10/Cards10Examples62';
import Cards10Examples63 from '../../example-components/Cards10/Cards10Examples63';
import Cards10Examples64 from '../../example-components/Cards10/Cards10Examples64';
import Cards10Examples65 from '../../example-components/Cards10/Cards10Examples65';
import Cards10Examples66 from '../../example-components/Cards10/Cards10Examples66';
import Cards10Examples67 from '../../example-components/Cards10/Cards10Examples67';
import Cards10Examples68 from '../../example-components/Cards10/Cards10Examples68';
export default function Cards10() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Cards examples 10"
        titleDescription="Wide selection of cards with multiple styles, borders, actions and hover effects."
      />

      <ExampleWrapperSeamless sectionHeading="Cards 62">
        <Cards10Examples62 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 63">
        <Cards10Examples63 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 64">
        <Cards10Examples64 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 65">
        <Cards10Examples65 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 66">
        <Cards10Examples66 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 67">
        <Cards10Examples67 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 68">
        <Cards10Examples68 />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
