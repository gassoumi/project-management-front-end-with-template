import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';

import Cards12Examples75 from '../../example-components/Cards12/Cards12Examples75';
import Cards12Examples76 from '../../example-components/Cards12/Cards12Examples76';
import Cards12Examples77 from '../../example-components/Cards12/Cards12Examples77';
import Cards12Examples78 from '../../example-components/Cards12/Cards12Examples78';
import Cards12Examples79 from '../../example-components/Cards12/Cards12Examples79';
export default function Cards12() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Cards examples 12"
        titleDescription="Wide selection of cards with multiple styles, borders, actions and hover effects."
      />

      <ExampleWrapperSeamless sectionHeading="Cards 75">
        <Cards12Examples75 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 76">
        <Cards12Examples76 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 77">
        <Cards12Examples77 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 78">
        <Cards12Examples78 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 79">
        <Cards12Examples79 />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
