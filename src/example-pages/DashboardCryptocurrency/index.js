import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import DashboardCryptocurrencySection1 from '../../example-components/DashboardCryptocurrency/DashboardCryptocurrencySection1';
import DashboardCryptocurrencySection2 from '../../example-components/DashboardCryptocurrency/DashboardCryptocurrencySection2';
import DashboardCryptocurrencySection3 from '../../example-components/DashboardCryptocurrency/DashboardCryptocurrencySection3';
import DashboardCryptocurrencySection4 from '../../example-components/DashboardCryptocurrency/DashboardCryptocurrencySection4';
import DashboardCryptocurrencySection5 from '../../example-components/DashboardCryptocurrency/DashboardCryptocurrencySection5';
import DashboardCryptocurrencySection6 from '../../example-components/DashboardCryptocurrency/DashboardCryptocurrencySection6';
import DashboardCryptocurrencySection7 from '../../example-components/DashboardCryptocurrency/DashboardCryptocurrencySection7';
export default function DashboardCryptocurrency() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Cryptocurrency"
        titleDescription="Crypto is the hot stuff right now. Here&#39;s a dashboard for it."
      />

      <DashboardCryptocurrencySection1 />
      <DashboardCryptocurrencySection2 />
      <DashboardCryptocurrencySection3 />
      <DashboardCryptocurrencySection4 />
      <DashboardCryptocurrencySection5 />
      <DashboardCryptocurrencySection6 />
      <DashboardCryptocurrencySection7 />
    </Fragment>
  );
}
