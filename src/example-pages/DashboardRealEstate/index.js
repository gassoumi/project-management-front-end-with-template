import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import DashboardRealEstateSection1 from '../../example-components/DashboardRealEstate/DashboardRealEstateSection1';
import DashboardRealEstateSection2 from '../../example-components/DashboardRealEstate/DashboardRealEstateSection2';
import DashboardRealEstateSection3 from '../../example-components/DashboardRealEstate/DashboardRealEstateSection3';
import DashboardRealEstateSection4 from '../../example-components/DashboardRealEstate/DashboardRealEstateSection4';
import DashboardRealEstateSection5 from '../../example-components/DashboardRealEstate/DashboardRealEstateSection5';
import DashboardRealEstateSection6 from '../../example-components/DashboardRealEstate/DashboardRealEstateSection6';
import DashboardRealEstateSection7 from '../../example-components/DashboardRealEstate/DashboardRealEstateSection7';
import DashboardRealEstateSection8 from '../../example-components/DashboardRealEstate/DashboardRealEstateSection8';
export default function DashboardRealEstate() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Real Estate"
        titleDescription="This dashboard example was created using only the available elements and components, no additional styles were written!"
      />

      <DashboardRealEstateSection1 />
      <DashboardRealEstateSection2 />
      <DashboardRealEstateSection3 />
      <DashboardRealEstateSection4 />
      <DashboardRealEstateSection5 />
      <DashboardRealEstateSection6 />
      <DashboardRealEstateSection7 />
      <DashboardRealEstateSection8 />
    </Fragment>
  );
}
