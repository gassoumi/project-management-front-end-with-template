import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';
import { ExampleWrapperSimple } from '../../layout-components';

import ContextMenusBasic from '../../example-components/ContextMenus/ContextMenusBasic';
import ContextMenusAlternate from '../../example-components/ContextMenus/ContextMenusAlternate';
export default function ContextMenus() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Context Menus"
        titleDescription="A context menu is a popup menu that appears upon user interaction, such as a right-click mouse operation."
      />

      <ExampleWrapperSimple sectionHeading="Basic examples">
        <ContextMenusBasic />
      </ExampleWrapperSimple>
      <ExampleWrapperSeamless sectionHeading="Alternate menu styles">
        <ContextMenusAlternate />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
