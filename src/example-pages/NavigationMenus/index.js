import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import NavigationMenusVerticalBasic from '../../example-components/NavigationMenus/NavigationMenusVerticalBasic';
import NavigationMenusVerticalAlternate from '../../example-components/NavigationMenus/NavigationMenusVerticalAlternate';
import NavigationMenusVerticalHeaders from '../../example-components/NavigationMenus/NavigationMenusVerticalHeaders';
import NavigationMenusGrid from '../../example-components/NavigationMenus/NavigationMenusGrid';
import NavigationMenusGridAlternate from '../../example-components/NavigationMenus/NavigationMenusGridAlternate';
import NavigationMenusGridCondensed from '../../example-components/NavigationMenus/NavigationMenusGridCondensed';
export default function NavigationMenus() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Navigation menus"
        titleDescription="Navigation menus are one of the basic building blocks for any web or mobile app."
      />

      <ExampleWrapperSimple sectionHeading="Grid menus">
        <NavigationMenusGridAlternate />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Grid navigation menus alternate">
        <NavigationMenusGrid />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Grid menus bullets">
        <NavigationMenusGridCondensed />
      </ExampleWrapperSimple>

      <ExampleWrapperSimple sectionHeading="Vertical menus">
        <NavigationMenusVerticalBasic />
      </ExampleWrapperSimple>

      <ExampleWrapperSimple sectionHeading="Vertical menus alternate">
        <NavigationMenusVerticalAlternate />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Vertical menus with headers">
        <NavigationMenusVerticalHeaders />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
