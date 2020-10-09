import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import DashboardAnalyticsSection1 from '../../example-components/DashboardAnalytics/DashboardAnalyticsSection1';
import DashboardAnalyticsSection2 from '../../example-components/DashboardAnalytics/DashboardAnalyticsSection2';
import DashboardAnalyticsSection3 from '../../example-components/DashboardAnalytics/DashboardAnalyticsSection3';
import DashboardAnalyticsSection4 from '../../example-components/DashboardAnalytics/DashboardAnalyticsSection4';
import DashboardAnalyticsSection5 from '../../example-components/DashboardAnalytics/DashboardAnalyticsSection5';
import DashboardAnalyticsSection6 from '../../example-components/DashboardAnalytics/DashboardAnalyticsSection6';
import DashboardAnalyticsSection7 from '../../example-components/DashboardAnalytics/DashboardAnalyticsSection7';
import DashboardAnalyticsSection8 from '../../example-components/DashboardAnalytics/DashboardAnalyticsSection8';
export default function DashboardAnalytics() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Analytics"
        titleDescription="This is an example dashboard created using build-in elements and components."
      />

      <DashboardAnalyticsSection1 />
      <DashboardAnalyticsSection2 />
      <DashboardAnalyticsSection3 />
      <DashboardAnalyticsSection4 />
      <DashboardAnalyticsSection5 />
      <DashboardAnalyticsSection6 />
      <DashboardAnalyticsSection7 />
      <DashboardAnalyticsSection8 />
    </Fragment>
  );
}
