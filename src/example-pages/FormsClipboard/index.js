import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import FormsClipboardInput from '../../example-components/FormsClipboard/FormsClipboardInput';
import FormsClipboardTextarea from '../../example-components/FormsClipboard/FormsClipboardTextarea';
export default function FormsClipboard() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Clipboard"
        titleDescription="You can copy&#x2F;paste text with this great form widget."
      />

      <ExampleWrapperSimple sectionHeading="Input">
        <FormsClipboardInput />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Textarea">
        <FormsClipboardTextarea />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
