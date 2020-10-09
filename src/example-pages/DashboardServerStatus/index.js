import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import DashboardServerStatusSection1 from '../../example-components/DashboardServerStatus/DashboardServerStatusSection1';
import DashboardServerStatusSection2 from '../../example-components/DashboardServerStatus/DashboardServerStatusSection2';
import DashboardServerStatusSection3 from '../../example-components/DashboardServerStatus/DashboardServerStatusSection3';
import DashboardServerStatusSection4 from '../../example-components/DashboardServerStatus/DashboardServerStatusSection4';
import DashboardServerStatusSection5 from '../../example-components/DashboardServerStatus/DashboardServerStatusSection5';
import DashboardServerStatusSection6 from '../../example-components/DashboardServerStatus/DashboardServerStatusSection6';
import DashboardServerStatusSection7 from '../../example-components/DashboardServerStatus/DashboardServerStatusSection7';
import DashboardServerStatusSection8 from '../../example-components/DashboardServerStatus/DashboardServerStatusSection8';
import DashboardServerStatusSection9 from '../../example-components/DashboardServerStatus/DashboardServerStatusSection9';
export default function DashboardServerStatus() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Server Status"
        titleDescription="Yet another dashboard built using only the included elements and components."
      />

      <DashboardServerStatusSection1 />
      <DashboardServerStatusSection2 />
      <DashboardServerStatusSection3 />
      <DashboardServerStatusSection4 />
      <DashboardServerStatusSection5 />
      <DashboardServerStatusSection6 />
      <DashboardServerStatusSection7 />
      <DashboardServerStatusSection8 />
      <DashboardServerStatusSection9 />
    </Fragment>
  );
}
