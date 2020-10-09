import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import TestimonialsSections1 from '../../example-components/TestimonialsSections/TestimonialsSections1';
import TestimonialsSections2 from '../../example-components/TestimonialsSections/TestimonialsSections2';
import TestimonialsSections3 from '../../example-components/TestimonialsSections/TestimonialsSections3';
import TestimonialsSections4 from '../../example-components/TestimonialsSections/TestimonialsSections4';
export default function TestimnonialsSections() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Testimonials sections"
        titleDescription="Create sections with testimonials and ratings starting from these examples."
      />

      <ExampleWrapperSimple sectionHeading="Testimonials 1">
        <TestimonialsSections1 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Testimonials 2">
        <TestimonialsSections2 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Testimonials 3">
        <TestimonialsSections3 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Testimonials 4">
        <TestimonialsSections4 />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
