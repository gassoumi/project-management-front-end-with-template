import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import FormsSliderMaterial from '../../example-components/FormsSlider/FormsSliderMaterial';
export default function FormsSlider() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Slider"
        titleDescription="Create sliders and range sliders with these React form widgets."
      />
      <ExampleWrapperSimple sectionHeading="Material">
        <FormsSliderMaterial />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
