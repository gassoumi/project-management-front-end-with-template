import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import CalendarsFullWidthBasic from '../../example-components/Calendars/CalendarsFullWidthBasic';
export default function Calendars() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Calendars"
        titleDescription="Calendars are used in a lot of apps. We thought to include some for your easy to use implementations."
      />

      <ExampleWrapperSimple sectionHeading="Full width calendar">
        <CalendarsFullWidthBasic />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
