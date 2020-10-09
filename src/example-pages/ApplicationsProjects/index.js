import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import ApplicationsProjectsContent from '../../example-components/ApplicationsProjects/ApplicationsProjectsContent';
export default function ApplicationsProjects() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Projects"
        titleDescription="Building a projects related application? Start from this layout."
      />

      <ApplicationsProjectsContent />
    </Fragment>
  );
}
