import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import FormsDualListboxBasic from '../../example-components/FormsDualListbox/FormsDualListboxBasic';
export default function FormsDualListbox() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Dual Listbox"
        titleDescription="This component provides two lists controls side-by-side that allows items in one list to be selected and moved."
      />
      <ExampleWrapperSimple sectionHeading="Basic">
        <FormsDualListboxBasic />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
