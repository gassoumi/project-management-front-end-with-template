import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import PagesProfileContent from '../../example-components/PagesProfile/PagesProfileContent';
export default function PagesProfile() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Profile"
        titleDescription="This is an example page for an user&#39;s profile created with this UI framework."
      />

      <PagesProfileContent />
    </Fragment>
  );
}
