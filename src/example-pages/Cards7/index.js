import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';

import Cards7Examples42 from '../../example-components/Cards7/Cards7Examples42';
import Cards7Examples43 from '../../example-components/Cards7/Cards7Examples43';
import Cards7Examples44 from '../../example-components/Cards7/Cards7Examples44';
import Cards7Examples45 from '../../example-components/Cards7/Cards7Examples45';
import Cards7Examples46 from '../../example-components/Cards7/Cards7Examples46';
import Cards7Examples47 from '../../example-components/Cards7/Cards7Examples47';
import Cards7Examples48 from '../../example-components/Cards7/Cards7Examples48';
export default function Cards7() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Cards examples 7"
        titleDescription="Wide selection of cards with multiple styles, borders, actions and hover effects."
      />

      <ExampleWrapperSeamless sectionHeading="Cards 42">
        <Cards7Examples42 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 43">
        <Cards7Examples43 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 44">
        <Cards7Examples44 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 45">
        <Cards7Examples45 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 46">
        <Cards7Examples46 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 47">
        <Cards7Examples47 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 48">
        <Cards7Examples48 />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
