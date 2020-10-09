import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import FormsWysiwygEditorDraftJs from '../../example-components/FormsWysiwygEditor/FormsWysiwygEditorDraftJs';
export default function FormsWysiwygEditor() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="WYSIWYG Editors"
        titleDescription="Create beautiful suggestion inputs for React form elements."
      />

      <ExampleWrapperSimple sectionHeading="React Draft.js Editor">
        <FormsWysiwygEditorDraftJs />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
