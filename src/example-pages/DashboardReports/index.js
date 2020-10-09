import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import DashboardReportsSection1 from '../../example-components/DashboardReports/DashboardReportsSection1';
import DashboardReportsSection2 from '../../example-components/DashboardReports/DashboardReportsSection2';
import DashboardReportsSection3 from '../../example-components/DashboardReports/DashboardReportsSection3';
import DashboardReportsSection4 from '../../example-components/DashboardReports/DashboardReportsSection4';
import DashboardReportsSection5 from '../../example-components/DashboardReports/DashboardReportsSection5';
import DashboardReportsSection6 from '../../example-components/DashboardReports/DashboardReportsSection6';
import DashboardReportsSection7 from '../../example-components/DashboardReports/DashboardReportsSection7';
import DashboardReportsSection8 from '../../example-components/DashboardReports/DashboardReportsSection8';
export default function DashboardReports() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Reports"
        titleDescription="This dashboard was created as an example of the flexibility that this UI framework offers."
      />

      <DashboardReportsSection1 />
      <DashboardReportsSection2 />
      <DashboardReportsSection3 />
      <DashboardReportsSection4 />
      <DashboardReportsSection5 />
      <DashboardReportsSection6 />
      <DashboardReportsSection7 />
      <DashboardReportsSection8 />
    </Fragment>
  );
}
