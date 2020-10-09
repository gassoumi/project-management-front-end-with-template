import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import DashboardCrmManagerSection1 from '../../example-components/DashboardCrmManager/DashboardCrmManagerSection1';
import DashboardCrmManagerSection2 from '../../example-components/DashboardCrmManager/DashboardCrmManagerSection2';
import DashboardCrmManagerSection3 from '../../example-components/DashboardCrmManager/DashboardCrmManagerSection3';
import DashboardCrmManagerSection4 from '../../example-components/DashboardCrmManager/DashboardCrmManagerSection4';
import DashboardCrmManagerSection5 from '../../example-components/DashboardCrmManager/DashboardCrmManagerSection5';
import DashboardCrmManagerSection6 from '../../example-components/DashboardCrmManager/DashboardCrmManagerSection6';
import DashboardCrmManagerSection7 from '../../example-components/DashboardCrmManager/DashboardCrmManagerSection7';
import DashboardCrmManagerSection8 from '../../example-components/DashboardCrmManager/DashboardCrmManagerSection8';
export default function DashboardCrmManager() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="CRM Manager"
        titleDescription="If you&#39;re building a CRM, you can start by using this dashboard example."
      />

      <DashboardCrmManagerSection1 />
      <DashboardCrmManagerSection2 />
      <DashboardCrmManagerSection3 />
      <DashboardCrmManagerSection4 />
      <DashboardCrmManagerSection5 />
      <DashboardCrmManagerSection6 />
      <DashboardCrmManagerSection7 />
      <DashboardCrmManagerSection8 />
    </Fragment>
  );
}
