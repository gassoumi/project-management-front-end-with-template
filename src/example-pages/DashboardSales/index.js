import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import DashboardSalesSection1 from '../../example-components/DashboardSales/DashboardSalesSection1';
import DashboardSalesSection2 from '../../example-components/DashboardSales/DashboardSalesSection2';
import DashboardSalesSection3 from '../../example-components/DashboardSales/DashboardSalesSection3';
import DashboardSalesSection4 from '../../example-components/DashboardSales/DashboardSalesSection4';
import DashboardSalesSection5 from '../../example-components/DashboardSales/DashboardSalesSection5';
import DashboardSalesSection6 from '../../example-components/DashboardSales/DashboardSalesSection6';
import DashboardSalesSection7 from '../../example-components/DashboardSales/DashboardSalesSection7';
import DashboardSalesSection8 from '../../example-components/DashboardSales/DashboardSalesSection8';
import DashboardSalesSection9 from '../../example-components/DashboardSales/DashboardSalesSection9';
export default function DashboardSales() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Sales Management"
        titleDescription="Example of a Dashboard page built with this UI framework."
      />

      <DashboardSalesSection1 />
      <DashboardSalesSection2 />
      <DashboardSalesSection3 />
      <DashboardSalesSection4 />
      <DashboardSalesSection5 />
      <DashboardSalesSection6 />
      <DashboardSalesSection7 />
      <DashboardSalesSection8 />
      <DashboardSalesSection9 />
    </Fragment>
  );
}
