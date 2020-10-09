import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';
import { ExampleWrapperSimple } from '../../layout-components';

import BlogSections1 from '../../example-components/BlogSections/BlogSections1';
import BlogSections2 from '../../example-components/BlogSections/BlogSections2';
import BlogSections3 from '../../example-components/BlogSections/BlogSections3';
import BlogSections4 from '../../example-components/BlogSections/BlogSections4';
export default function BlogSections() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Blog sections"
        titleDescription="Create blog pages and lists in style with these examples."
      />

      <ExampleWrapperSimple sectionHeading="Blog sections 1">
        <BlogSections1 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Blog sections 2">
        <BlogSections2 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Blog sections 3">
        <BlogSections3 />
      </ExampleWrapperSimple>
      <ExampleWrapperSeamless sectionHeading="Blog sections 4">
        <BlogSections4 />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
