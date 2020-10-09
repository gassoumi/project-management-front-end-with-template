import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';
import { ExampleWrapperSimple } from '../../layout-components';

import TimelinesBasic from '../../example-components/Timelines/TimelinesBasic';
import TimelinesBasicAlternate from '../../example-components/Timelines/TimelinesBasicAlternate';
import TimelinesIcons from '../../example-components/Timelines/TimelinesIcons';
import TimelinesColors from '../../example-components/Timelines/TimelinesColors';
import TimelinesHorizontal from '../../example-components/Timelines/TimelinesHorizontal';
import TimelinesHorizontalCenter from '../../example-components/Timelines/TimelinesHorizontalCenter';
import TimelinesVertical from '../../example-components/Timelines/TimelinesVertical';
export default function Timelines() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Timelines"
        titleDescription="Timelines are used to show lists of notifications, tasks or actions in a beautiful way."
      />

      <ExampleWrapperSimple sectionHeading="Basic">
        <TimelinesBasic />
      </ExampleWrapperSimple>
      <ExampleWrapperSeamless sectionHeading="Alternate">
        <TimelinesBasicAlternate />
      </ExampleWrapperSeamless>
      <ExampleWrapperSimple sectionHeading="Colors">
        <TimelinesColors />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Icons">
        <TimelinesIcons />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Vertical">
        <TimelinesVertical />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Horizontal">
        <TimelinesHorizontal />
      </ExampleWrapperSimple>
      <div className="divider my-4" />
      <ExampleWrapperSimple sectionHeading="Horizontally centered">
        <TimelinesHorizontalCenter />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
