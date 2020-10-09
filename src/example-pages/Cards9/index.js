import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';

import Cards9Examples56 from '../../example-components/Cards9/Cards9Examples56';
import Cards9Examples57 from '../../example-components/Cards9/Cards9Examples57';
import Cards9Examples58 from '../../example-components/Cards9/Cards9Examples58';
import Cards9Examples59 from '../../example-components/Cards9/Cards9Examples59';
import Cards9Examples60 from '../../example-components/Cards9/Cards9Examples60';
import Cards9Examples61 from '../../example-components/Cards9/Cards9Examples61';
export default function Cards9() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Cards examples 9"
        titleDescription="Wide selection of cards with multiple styles, borders, actions and hover effects."
      />

      <ExampleWrapperSeamless sectionHeading="Cards 56">
        <Cards9Examples56 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 57">
        <Cards9Examples57 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 58">
        <Cards9Examples58 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 59">
        <Cards9Examples59 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 60">
        <Cards9Examples60 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 61">
        <Cards9Examples61 />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
