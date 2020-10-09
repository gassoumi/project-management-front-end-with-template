import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';

import Cards2Examples8 from '../../example-components/Cards2/Cards2Examples8';
import Cards2Examples9 from '../../example-components/Cards2/Cards2Examples9';
import Cards2Examples10 from '../../example-components/Cards2/Cards2Examples10';
import Cards2Examples11 from '../../example-components/Cards2/Cards2Examples11';
import Cards2Examples12 from '../../example-components/Cards2/Cards2Examples12';
import Cards2Examples13 from '../../example-components/Cards2/Cards2Examples13';
import Cards2Examples14 from '../../example-components/Cards2/Cards2Examples14';
export default function Cards2() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Cards examples 2"
        titleDescription="Wide selection of cards with multiple styles, borders, actions and hover effects."
      />

      <ExampleWrapperSeamless sectionHeading="Cards 8">
        <Cards2Examples8 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 9">
        <Cards2Examples9 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 10">
        <Cards2Examples10 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 11">
        <Cards2Examples11 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 12">
        <Cards2Examples12 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 13">
        <Cards2Examples13 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 14">
        <Cards2Examples14 />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
