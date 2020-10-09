import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import ModalsBasic from '../../example-components/Modals/ModalsBasic';
import ModalsBorderless from '../../example-components/Modals/ModalsBorderless';
import ModalsColors from '../../example-components/Modals/ModalsColors';
import ModalsConfirmation from '../../example-components/Modals/ModalsConfirmation';
export default function Modals() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Modal dialogs"
        titleDescription="Wide selection of modal dialogs styles and animations available."
      />

      <ExampleWrapperSimple sectionHeading="Basic">
        <ModalsBasic />
      </ExampleWrapperSimple>

      <ExampleWrapperSimple sectionHeading="Borderless">
        <ModalsBorderless />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Confirm modals">
        <ModalsConfirmation />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Colors">
        <ModalsColors />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
