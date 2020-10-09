import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';

import ListGroupsBasic from '../../example-components/ListGroups/ListGroupsBasic';
import ListGroupsActions from '../../example-components/ListGroups/ListGroupsActions';
import ListGroupsVariations1 from '../../example-components/ListGroups/ListGroupsVariations1';
import ListGroupsVariations2 from '../../example-components/ListGroups/ListGroupsVariations2';
import ListGroupsVariations3 from '../../example-components/ListGroups/ListGroupsVariations3';
import ListGroupsVariations4 from '../../example-components/ListGroups/ListGroupsVariations4';
import ListGroupsVariations5 from '../../example-components/ListGroups/ListGroupsVariations5';
import ListGroupsVariations6 from '../../example-components/ListGroups/ListGroupsVariations6';
import ListGroupsVariations7 from '../../example-components/ListGroups/ListGroupsVariations7';
import ListGroupsVariations8 from '../../example-components/ListGroups/ListGroupsVariations8';
export default function ListGroups() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="List Groups"
        titleDescription="These can be used with other components and elements to create stunning and unique new elements for your UIs."
      />

      <ExampleWrapperSeamless sectionHeading="Basic">
        <ListGroupsBasic />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Actions">
        <ListGroupsActions />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Examples variations I">
        <ListGroupsVariations1 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Examples variations II">
        <ListGroupsVariations2 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Examples variations III">
        <ListGroupsVariations3 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Examples variations IV">
        <ListGroupsVariations4 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Examples variations V">
        <ListGroupsVariations5 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Examples variations VI">
        <ListGroupsVariations6 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Examples variations VII">
        <ListGroupsVariations7 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Examples variations VIII">
        <ListGroupsVariations8 />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
