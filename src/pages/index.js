import React from 'react';
import HomePage from '../components/home/HomePage';

// English texts of the home page. The layout lives in src/components/home/HomePage.js;
// the French texts are in i18n/fr/docusaurus-plugin-content-pages/index.js.
const t = {
  meta: {
    title: 'EV charging and energy communities',
    description: 'Werenode equips car parks with EV charging, lets anyone share their charger or green electricity, and traces every session with Web3.0.',
  },
  hero: {
    title: 'EV charging and energy communities',
    lead: 'Werenode equips company car parks with charging stations, lets anyone share their charger or locally produced green electricity, and traces every charging session with Web3.0.',
    contact: 'Contact us',
    register: 'Register my charger',
    awardAlt: 'F6S: #1 Top Company, Web3.0, December 2024',
  },
  recognition: [
    'Ranked #1 Web3.0 company in France by F6S (December 2024)',
    'B-Hub award for the best European blockchain project (2021)',
    'OP (Plastic Omnium) Grand Prix for Innovation (2023)',
    'Selected by three EU NGI programmes: Ontochain, Trustchain and Sargasso',
  ],
  network: {
    title: 'One network, four ways to take part',
    intro: 'Every charger, car park and solar roof connected to Werenode joins the same open network. Choose the way in that fits you.',
    items: [
      {
        icon: 'parking',
        title: 'Companies and car parks',
        text: 'A bespoke charging solution for your employees, visitors or customers, with all the data on your chargers and your EV fleet.',
        link: 'Contact us',
        to: 'mailto:contact@werenode.com',
      },
      {
        icon: 'plug',
        title: 'Charger owners',
        text: 'Open your connected charger to other EV drivers and get paid for every charging session.',
        link: 'Register my charger',
        to: '/registeryourequipment',
      },
      {
        icon: 'sun',
        title: 'Energy communities',
        text: 'Use green electricity produced near you through collective self-consumption, and lower your bill.',
        link: 'Discover Werenode Énergie',
        to: 'https://energie.werenode.fr',
      },
      {
        icon: 'chain',
        title: 'Web3.0 and Werecoin',
        text: 'Traceable payments, smart contracts and the Werecoin token on Tezos, BNB Chain and Ethereum.',
        link: 'Discover our Web3.0',
        to: '/cryptos',
      },
    ],
  },
  tools: {
    app: {
      alt: 'Werenode app showing charging options',
      title: 'Charge with the Werenode app',
      text: 'Find a charger, start charging and pay from your phone, by card or in cryptocurrency.',
    },
    dapp: {
      title: 'Register your charger in a few minutes',
      text: 'No need to wait for the big players: if your charger is connected and accessible, register it with the Werenode DApp and earn revenue from every session.',
      cta: 'Register my charger',
      alt: 'Werenode DApp dashboard on a laptop',
    },
  },
  team: {
    title: 'The team',
    roles: [
      ['CEO, co-founder', 'EV ecosystem expert'],
      ['President, co-founder', 'Entrepreneur'],
      ['CTO, co-founder', 'IT, IoT and payment expert'],
      ['Advisor, co-founder', 'Operations management expert'],
      ['COO', 'Operations and sales'],
      ['CITO, co-founder', 'AI and Web3.0 expert'],
      ['Community manager', 'Digital marketing and sales'],
      ['Lead developer', 'Full-stack and smart contract development'],
    ],
  },
  partnersTitle: 'Partners and supporters',
  closing: {
    title: 'Be part of the future of green energy and mobility',
    text: 'Energy communities, V2G, smart charging, ISO 15118: new possibilities with Werenode.',
    join: 'Join us',
    contact: 'Contact us',
  },
};

export default function Home() {
  return <HomePage t={t} />;
}
