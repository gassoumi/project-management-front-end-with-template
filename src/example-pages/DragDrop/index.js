import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import DragDropBasic from '../../example-components/DragDrop/DragDropBasic';
import DragDropLists from '../../example-components/DragDrop/DragDropLists';
export default function DragDrop() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Drag &amp; Drop"
        titleDescription="Enable draggable functionality on any DOM element. Move the draggable object by clicking on it with the mouse and dragging it anywhere within the viewport."
      />

      <ExampleWrapperSimple sectionHeading="Basic">
        <DragDropBasic />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Lists">
        <DragDropLists />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
