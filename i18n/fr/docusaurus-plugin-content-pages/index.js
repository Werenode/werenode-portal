import React from 'react';
import HomePage from '@site/src/components/home/HomePage';

// Textes français de la page d'accueil. La mise en page est dans
// src/components/home/HomePage.js, les textes anglais dans src/pages/index.js.
const t = {
  meta: {
    title: "Recharge électrique et communautés d'énergie",
    description: "Werenode équipe les parkings en bornes de recharge, permet à chacun de partager sa borne ou son électricité verte, et trace chaque recharge grâce au Web3.0.",
  },
  hero: {
    title: "Recharge électrique et communautés d'énergie",
    lead: "Au service de votre responsabilité environnementale, Werenode équipe les parkings d'entreprise en bornes de recharge, permet à chacun de partager sa borne ou son électricité verte produite localement, et trace chaque recharge grâce au Web3.0.",
    contact: 'Nous contacter',
    register: 'Enregistrer ma borne',
    awardAlt: 'F6S : entreprise n°1, Web3.0, décembre 2024',
  },
  recognition: [
    'Classée n°1 des entreprises Web3.0 en France par F6S (décembre 2024)',
    'Prix B-Hub du meilleur projet blockchain européen (2021)',
    'Grand Prix Innovation OP (Plastic Omnium) 2023',
    'Lauréate de trois programmes européens NGI : Ontochain, Trustchain et Sargasso',
  ],
  network: {
    title: "Un réseau, quatre façons d'y participer",
    intro: "Chaque borne, chaque parking et chaque toit solaire relié à Werenode rejoint le même réseau ouvert. Choisissez l'entrée qui vous correspond.",
    items: [
      {
        icon: 'parking',
        title: 'Entreprises et parkings',
        text: 'Une solution de recharge sur mesure pour vos employés, visiteurs ou clients, avec toutes les données de vos bornes et de votre flotte de véhicules électriques.',
        link: 'Nous contacter',
        to: 'mailto:contact@werenode.com',
      },
      {
        icon: 'plug',
        title: 'Propriétaires de bornes',
        text: 'Ouvrez votre borne connectée aux autres conducteurs et soyez rémunéré à chaque recharge.',
        link: 'Enregistrer ma borne',
        to: '/registeryourequipment',
      },
      {
        icon: 'sun',
        title: "Communautés d'énergie",
        text: "Consommez une électricité verte produite près de chez vous grâce à l'autoconsommation collective, et réduisez votre facture.",
        link: 'Découvrir Werenode Énergie',
        to: 'https://energie.werenode.fr',
      },
      {
        icon: 'chain',
        title: 'Web3.0 et Werecoin',
        text: 'Paiements traçables, smart contracts et jeton Werecoin sur Tezos, BNB Chain et Ethereum.',
        link: 'Découvrir notre Web3.0',
        to: '/cryptos',
      },
    ],
  },
  tools: {
    app: {
      alt: 'Application Werenode affichant les options de recharge',
      title: "Rechargez avec l'application Werenode",
      text: 'Trouvez une borne, lancez la recharge et payez depuis votre téléphone, par carte ou en cryptomonnaie.',
    },
    dapp: {
      title: 'Enregistrez votre borne en quelques minutes',
      text: "Pas besoin d'attendre les grands acteurs : si votre borne est connectée et accessible, enregistrez-la avec la DApp Werenode et tirez des revenus de chaque recharge.",
      cta: 'Enregistrer ma borne',
      alt: "Tableau de bord de la DApp Werenode sur un ordinateur portable",
    },
  },
  team: {
    title: "L'équipe",
    roles: [
      ['Directeur général, cofondateur', "Expert de l'écosystème du véhicule électrique"],
      ['Présidente, cofondatrice', 'Entrepreneuse'],
      ['Directeur technique, cofondateur', 'Expert IT, IoT et paiement'],
      ['Conseiller, cofondateur', 'Expert en management des opérations'],
      ['Directeur des opérations', 'Opérations et ventes'],
      ['Directeur informatique, cofondateur', 'Expert Web3.0 et IA'],
      ['Responsable marketing', 'Communication et marketing numériques'],
      ['Chef de projet logiciel', 'Développement logiciel'],
    ],
  },
  partnersTitle: 'Partenaires et soutiens',
  closing: {
    title: "Participez au futur de l'énergie et de la mobilité vertes",
    text: "Communautés d'énergie, V2G, recharge intelligente, ISO 15118 : de nouvelles possibilités avec Werenode.",
    join: 'Rejoignez-nous',
    contact: 'Nous contacter',
  },
};

export default function Home() {
  return <HomePage t={t} />;
}
