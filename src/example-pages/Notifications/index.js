import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import NotificationsSnackbars from '../../example-components/Notifications/NotificationsSnackbars';
import NotificationsAlertsBasic from '../../example-components/Notifications/NotificationsAlertsBasic';
import NotificationsAlertsAlternateStyle from '../../example-components/Notifications/NotificationsAlertsAlternateStyle';
export default function Notifications() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Notifications"
        titleDescription="Show beautiful, animated growl like notifications or alerts on your pages screens."
      />

      <ExampleWrapperSimple sectionHeading="Snackbars">
        <NotificationsSnackbars />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Basic alerts">
        <NotificationsAlertsBasic />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Alerts alternate style">
        <NotificationsAlertsAlternateStyle />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
