import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';

import Cards8Examples49 from '../../example-components/Cards8/Cards8Examples49';
import Cards8Examples50 from '../../example-components/Cards8/Cards8Examples50';
import Cards8Examples51 from '../../example-components/Cards8/Cards8Examples51';
import Cards8Examples52 from '../../example-components/Cards8/Cards8Examples52';
import Cards8Examples53 from '../../example-components/Cards8/Cards8Examples53';
import Cards8Examples54 from '../../example-components/Cards8/Cards8Examples54';
import Cards8Examples55 from '../../example-components/Cards8/Cards8Examples55';

export default function Cards8() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Cards examples 8"
        titleDescription="Wide selection of cards with multiple styles, borders, actions and hover effects."
      />

      <ExampleWrapperSeamless sectionHeading="Cards 49">
        <Cards8Examples49 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 50">
        <Cards8Examples50 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 51">
        <Cards8Examples51 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 52">
        <Cards8Examples52 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 53">
        <Cards8Examples53 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 54">
        <Cards8Examples54 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 55">
        <Cards8Examples55 />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
