import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import DashboardHelpdeskSection1 from '../../example-components/DashboardHelpdesk/DashboardHelpdeskSection1';
import DashboardHelpdeskSection2 from '../../example-components/DashboardHelpdesk/DashboardHelpdeskSection2';
import DashboardHelpdeskSection3 from '../../example-components/DashboardHelpdesk/DashboardHelpdeskSection3';
import DashboardHelpdeskSection4 from '../../example-components/DashboardHelpdesk/DashboardHelpdeskSection4';
import DashboardHelpdeskSection5 from '../../example-components/DashboardHelpdesk/DashboardHelpdeskSection5';
export default function DashboardHelpdesk() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Helpdesk"
        titleDescription="Dashboard page that could be used for a helpdesk niche application."
      />

      <DashboardHelpdeskSection1 />
      <DashboardHelpdeskSection2 />
      <DashboardHelpdeskSection3 />
      <DashboardHelpdeskSection4 />
      <DashboardHelpdeskSection5 />
    </Fragment>
  );
}
