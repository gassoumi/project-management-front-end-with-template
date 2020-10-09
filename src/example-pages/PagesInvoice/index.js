import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import PagesInvoiceContent from '../../example-components/PagesInvoice/PagesInvoiceContent';
export default function PagesInvoice() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Invoice"
        titleDescription="This pages contains an example invoice design."
      />

      <PagesInvoiceContent />
    </Fragment>
  );
}
