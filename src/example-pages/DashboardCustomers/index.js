import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import DashboardCustomersSection1 from '../../example-components/DashboardCustomers/DashboardCustomersSection1';
import DashboardCustomersSection2 from '../../example-components/DashboardCustomers/DashboardCustomersSection2';
import DashboardCustomersSection3 from '../../example-components/DashboardCustomers/DashboardCustomersSection3';
import DashboardCustomersSection4 from '../../example-components/DashboardCustomers/DashboardCustomersSection4';
import DashboardCustomersSection5 from '../../example-components/DashboardCustomers/DashboardCustomersSection5';
import DashboardCustomersSection6 from '../../example-components/DashboardCustomers/DashboardCustomersSection6';
import DashboardCustomersSection7 from '../../example-components/DashboardCustomers/DashboardCustomersSection7';
export default function DashboardCustomers() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Customers"
        titleDescription="Your application works with customers, then this is the dashboard for you."
      />

      <DashboardCustomersSection1 />
      <DashboardCustomersSection2 />
      <DashboardCustomersSection3 />
      <DashboardCustomersSection4 />
      <DashboardCustomersSection5 />
      <DashboardCustomersSection6 />
      <DashboardCustomersSection7 />
    </Fragment>
  );
}
