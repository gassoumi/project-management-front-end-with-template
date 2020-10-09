import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import DashboardProjectsSection1 from '../../example-components/DashboardProjects/DashboardProjectsSection1';
import DashboardProjectsSection2 from '../../example-components/DashboardProjects/DashboardProjectsSection2';
import DashboardProjectsSection3 from '../../example-components/DashboardProjects/DashboardProjectsSection3';
import DashboardProjectsSection4 from '../../example-components/DashboardProjects/DashboardProjectsSection4';
import DashboardProjectsSection5 from '../../example-components/DashboardProjects/DashboardProjectsSection5';
import DashboardProjectsSection6 from '../../example-components/DashboardProjects/DashboardProjectsSection6';
import DashboardProjectsSection7 from '../../example-components/DashboardProjects/DashboardProjectsSection7';
import DashboardProjectsSection8 from '../../example-components/DashboardProjects/DashboardProjectsSection8';

export default function DashboardProjects() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Projects"
        titleDescription="Example dashboard built for a projects related niche application."
      />

      <DashboardProjectsSection1 />
      <DashboardProjectsSection2 />
      <DashboardProjectsSection3 />
      <DashboardProjectsSection4 />
      <DashboardProjectsSection5 />
      <DashboardProjectsSection6 />
      <DashboardProjectsSection7 />
      <DashboardProjectsSection8 />
    </Fragment>
  );
}
