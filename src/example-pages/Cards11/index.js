import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';

import Cards11Examples69 from '../../example-components/Cards11/Cards11Examples69';
import Cards11Examples70 from '../../example-components/Cards11/Cards11Examples70';
import Cards11Examples71 from '../../example-components/Cards11/Cards11Examples71';
import Cards11Examples72 from '../../example-components/Cards11/Cards11Examples72';
import Cards11Examples73 from '../../example-components/Cards11/Cards11Examples73';
import Cards11Examples74 from '../../example-components/Cards11/Cards11Examples74';
export default function Cards11() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Cards examples 11"
        titleDescription="Wide selection of cards with multiple styles, borders, actions and hover effects."
      />

      <ExampleWrapperSeamless sectionHeading="Cards 69">
        <Cards11Examples69 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 70">
        <Cards11Examples70 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 71">
        <Cards11Examples71 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 72">
        <Cards11Examples72 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 73">
        <Cards11Examples73 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 74">
        <Cards11Examples74 />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
