import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import DashboardContentSection1 from '../../example-components/DashboardContent/DashboardContentSection1';
import DashboardContentSection2 from '../../example-components/DashboardContent/DashboardContentSection2';
import DashboardContentSection3 from '../../example-components/DashboardContent/DashboardContentSection3';
import DashboardContentSection4 from '../../example-components/DashboardContent/DashboardContentSection4';
import DashboardContentSection5 from '../../example-components/DashboardContent/DashboardContentSection5';
import DashboardContentSection6 from '../../example-components/DashboardContent/DashboardContentSection6';
import DashboardContentSection7 from '../../example-components/DashboardContent/DashboardContentSection7';
export default function DashboardContent() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Content Statistics"
        titleDescription="Dashboard example with lots of statistics cards."
      />

      <DashboardContentSection1 />
      <DashboardContentSection2 />
      <DashboardContentSection3 />
      <DashboardContentSection4 />
      <DashboardContentSection5 />
      <DashboardContentSection6 />
      <DashboardContentSection7 />
    </Fragment>
  );
}
