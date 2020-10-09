import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import FormsToggleSwitchMaterial from '../../example-components/FormsToggleSwitch/FormsToggleSwitchMaterial';
export default function FormsToggleSwitch() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Toggle Switch"
        titleDescription="Instead of regular checkboxes, use these toggle widgets for a better UX"
      />

      <ExampleWrapperSimple sectionHeading="Material">
        <FormsToggleSwitchMaterial />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
