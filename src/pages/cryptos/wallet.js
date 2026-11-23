import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Read-only Tezos / Werecoin wallet for Werenode app accounts (FR and EN texts live in the component).
export default function Wallet() {
  const {i18n} = useDocusaurusContext();
  const fr = i18n.currentLocale === 'fr';
  return (
    <Layout
      title={fr ? 'Mon portefeuille Werenode' : 'My Werenode wallet'}
      description={
        fr
          ? 'Consultez votre adresse Tezos et vos soldes Tezos et Werecoin avec votre compte Werenode.'
          : 'View your Tezos address and your Tezos and Werecoin balances with your Werenode account.'
      }>
      <BrowserOnly>
        {() => {
          const WalletPage = require('../../components/wallet/WalletPage').default;
          return <WalletPage />;
        }}
      </BrowserOnly>
    </Layout>
  );
}
