import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './HomePage.module.css';

// Shared home page. src/pages/index.js (English) and
// i18n/fr/docusaurus-plugin-content-pages/index.js (French) only pass
// their texts; layout and data common to both languages live here.

const CONTACT = 'mailto:contact@werenode.com';
const STORES = {
  android: 'https://play.google.com/store/apps/details?id=com.werenode.app',
  ios: 'https://apps.apple.com/fr/app/werenode/id1582403510',
};

export const team = [
  { name: 'Benoît Maïsseu', img: 'img/BMAI_petit.png', linkedin: 'https://www.linkedin.com/in/benoit-maisseu' },
  { name: 'Nadiya Khokhryakova', img: 'img/MM.png', linkedin: 'https://www.linkedin.com/in/nadiya-khokhryakova' },
  { name: 'François Chiron', img: 'img/FCh.png', linkedin: 'https://www.linkedin.com/in/francoischiron' },
  { name: 'Gaëtan Cadéro', img: 'img/GC.jpeg', linkedin: 'https://www.linkedin.com/in/gcadero' },
  { name: 'Yves-Michel Leporcher', img: 'img/YM.jpeg', linkedin: 'https://www.linkedin.com/in/yves-michel-leporcher-54143320' },
  { name: 'Benoît Rognier', img: 'img/BR.jpeg', linkedin: 'https://www.linkedin.com/in/benoitrognier' },
  { name: 'Ajibola Abdul Muheen Olamilekan (Miles)', img: 'img/MA.jpeg', linkedin: 'https://www.linkedin.com/in/miles123' },
  { name: 'Evgenii Zhdarkin', img: 'img/Evgenii.png', linkedin: 'https://www.linkedin.com/in/evgenii-zhdarkin-2758b1233/' },
];

const partners = [
  { key: 'BPI France', img: 'img/bpifr.svg', url: 'https://www.bpifrance.fr/' },
  { key: 'Région Île-de-France', img: 'img/RegionIDF.png', url: 'https://www.iledefrance.fr' },
  { key: 'EIT Urban Mobility', img: 'img/EITUM_Vertical.png', url: 'https://www.eiturbanmobility.eu/innovation/areas-of-innovation/' },
  { key: 'NGI Ontochain', img: 'img/ontochain.png', url: 'https://ontochain.ngi.eu' },
  { key: 'NGI Trustchain', img: 'img/trustchain.png', url: 'https://trustchain.ngi.eu' },
  { key: 'NGI Sargasso', img: 'img/Sargasso.png', url: 'https://ngisargasso.eu' },
  { key: 'OP Grand Prix Innovation', img: 'img/OPGrandPrix.png', url: 'https://ngisargasso.eu' },
  { key: 'LG Nova', img: 'img/LGNova.png', url: 'https://www.lgnova.com' },
  { key: 'Paris&Co', img: 'img/ParisandCo.png', url: 'https://www.parisandco.com/' },
  { key: "Quartiers d'innovation urbaine", img: 'img/QuartiersInnovation.jpg', url: 'https://www.paris.fr/pages/les-quartiers-d-innovation-urbaine-font-le-paris-de-demain-5913' },
  { key: 'Systematic', img: 'img/systematic.jpg', url: 'https://systematic-paris-region.org/nouveaux-membres-2021-chapitre-3/' },
  { key: 'La French Tech Paris-Saclay', img: 'img/lafrenchtechsaclay.png', url: 'https://lafrenchtech-paris-saclay.fr' },
  { key: 'Incubateur 21st CentraleSupélec', img: 'img/21ST Logo_Logo Vert Blanc-p-500.png', url: 'https://21st.centralesupelec.com/' },
  { key: 'B-Hub', img: 'img/b-hub.png', url: 'https://b-hub.eu/blockchain-startups-france/#werenode' },
  { key: 'Planet Tech Care', img: 'img/planettechcare.png', url: 'https://www.planet-techcare.green/annuaire/' },
  { key: 'Nomadic Labs', img: 'img/nomadic-labs.png', url: 'https://www.nomadic-labs.com/' },
  { key: 'Edukera', img: 'img/edukera.png', url: 'https://edukera.com/' },
  { key: 'Archetype', img: 'img/archetype.png', url: 'https://archetype-lang.org/' },
  { key: 'Completium', img: 'img/completium.svg', url: 'https://completium.com/' },
  { key: 'Spicyswap', img: 'img/spicyswap.png', url: 'https://spicyswap.xyz/#/pool/KT1PnUZCp3u2KzWr93pn4DD7HAJnm3rWVrgn:0/KT19Fmya7B49wKYdoqXYphyQWGRUn9g5wG8R:0' },
  { key: 'Coinbrain', img: 'img/coinbrainfondsombre.png', url: 'https://coinbrain.com/coins/bnb-0xcb2B11e8B780971907A9A171754C7D767ee8Bc70' },
  { key: 'CoinCodex', img: 'img/coincodex-logo-3.png', url: 'https://coincodex.com/crypto/werecoin/' },
  { key: 'Blockspot', img: 'img/blockspot-light_blue-250x90.png', url: 'https://blockspot.io/coin/werecoin/' },
  { key: 'MintMe', img: 'img/logomintme.png', url: 'https://www.mintme.com/token/Werecoin' },
];

// Small line icons for the four network nodes (24px grid, stroke = currentColor)
const icons = {
  parking: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="3" /><path d="M10 17V8h3a2.5 2.5 0 0 1 0 5h-3" /></svg>
  ),
  plug: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3v4M15 3v4M7 7h10v4a5 5 0 0 1-10 0V7zM12 16v5" /></svg>
  ),
  sun: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="9" r="3.5" /><path d="M12 2v1.5M5 9H3.5M20.5 9H19M7 4l1 1M17 4l-1 1M4 21l3-6h10l3 6M9.5 15l-1 6M14.5 15l1 6" /></svg>
  ),
  chain: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l8 4.5v10l-8 4.5-8-4.5V7l8-4.5z" /><path d="M12 7.5l4 2.25v4.5L12 16.5l-4-2.25v-4.5L12 7.5z" /></svg>
  ),
};

const SmartLink = ({ to, className, children }) =>
  /^(https?:|mailto:)/.test(to) ? (
    <a href={to} className={className} target={to.startsWith('http') ? '_blank' : undefined} rel="noopener">
      {children}
    </a>
  ) : (
    <Link to={to} className={className}>{children}</Link>
  );

const Hero = ({ t }) => (
  <header className={styles.hero} style={{ backgroundImage: `url(${useBaseUrl('img/shutterstock_1859956345.jpeg')})` }}>
    <div className={styles.heroShade} />
    <div className={`${styles.wrap} ${styles.heroInner}`}>
      <img className={styles.wordmark} src={useBaseUrl('img/werenode_logo_text_250px.png')} alt="Werenode" />
      <h1 className={styles.heroTitle}>{t.title}</h1>
      <p className={styles.heroLead}>{t.lead}</p>
      <div className={styles.actions}>
        <SmartLink to={CONTACT} className={styles.btnPrimary}>{t.contact}</SmartLink>
        <SmartLink to="/registeryourequipment" className={styles.btnGhost}>{t.register}</SmartLink>
      </div>
      <a className={styles.award} href="https://www.f6s.com/werenode/" target="_blank" rel="noopener">
        <img src={useBaseUrl('img/f6sawarddark.png')} alt={t.awardAlt} />
      </a>
    </div>
  </header>
);

const Recognition = ({ items }) => (
  <section className={styles.recognition}>
    <ul className={styles.wrap}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  </section>
);

const Network = ({ t }) => {
  const ref = useRef(null);
  const [state, setState] = useState('');
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;
    setState(styles.armed);
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setState(`${styles.armed} ${styles.live}`);
        io.disconnect();
      }
    }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section className={`${styles.section} ${styles.network} ${state}`} ref={ref}>
      <div className={styles.wrap}>
        <h2 className={styles.h2}>{t.title}</h2>
        <p className={styles.intro}>{t.intro}</p>
        <ol className={styles.nodes}>
          {t.items.map((item, i) => (
            <li key={item.title} className={styles.node} style={{ '--i': i }}>
              <span className={styles.dot}>{icons[item.icon]}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <SmartLink to={item.to} className={styles.textLink}>{item.link}</SmartLink>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

const Phone = ({ alt }) => (
  <div className={styles.phone}>
    <img className={styles.phoneFrame} src={useBaseUrl('img/phone2.png')} alt="" />
    <div className={styles.phoneScreen}>
      <img src={useBaseUrl('img/app_screen1.jpg')} alt={alt} />
    </div>
  </div>
);

const Tools = ({ t }) => (
  <section className={styles.section} id="app">
    <div className={`${styles.wrap} ${styles.split}`}>
      <div className={styles.media}><Phone alt={t.app.alt} /></div>
      <div className={styles.copy}>
        <h2 className={styles.h2}>{t.app.title}</h2>
        <p>{t.app.text}</p>
        <div className={styles.stores}>
          <a href={STORES.android} target="_blank" rel="noopener"><img src={useBaseUrl('img/google-play-badge.png')} alt="Google Play" /></a>
          <a href={STORES.ios} target="_blank" rel="noopener"><img src={useBaseUrl('img/AppStoreButton.png')} alt="App Store" /></a>
        </div>
      </div>
    </div>
    <div className={`${styles.wrap} ${styles.split} ${styles.reverse}`}>
      <div className={styles.media}>
        <img className={styles.laptop} src={useBaseUrl('img/mac-mockup2.png')} alt={t.dapp.alt} />
      </div>
      <div className={styles.copy}>
        <h2 className={styles.h2}>{t.dapp.title}</h2>
        <p>{t.dapp.text}</p>
        <div className={styles.actions}>
          <SmartLink to="/registeryourequipment" className={styles.btnPrimary}>{t.dapp.cta}</SmartLink>
        </div>
      </div>
    </div>
  </section>
);

const Team = ({ t }) => (
  <section className={`${styles.section} ${styles.team}`}>
    <div className={styles.wrap}>
      <h2 className={styles.h2}>{t.title}</h2>
      <ul className={styles.people}>
        {team.map((m, i) => (
          <li key={m.name}>
            <img src={useBaseUrl(m.img)} alt="" loading="lazy" />
            <a href={m.linkedin} target="_blank" rel="noopener" className={styles.person}>{m.name}</a>
            <span className={styles.role}>{t.roles[i][0]}</span>
            <span className={styles.expertise}>{t.roles[i][1]}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const Partners = ({ title }) => (
  <section className={`${styles.section} ${styles.partners}`}>
    <div className={styles.wrap}>
      <h2 className={styles.h2}>{title}</h2>
      <ul className={styles.logos}>
        {partners.map((p) => (
          <li key={p.key}>
            <a href={p.url} target="_blank" rel="noopener" title={p.key}>
              <img src={useBaseUrl(p.img)} alt={p.key} loading="lazy" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const Closing = ({ t }) => (
  <section className={styles.closing} style={{ backgroundImage: `url(${useBaseUrl('img/car.png')})` }}>
    <div className={styles.closingShade} />
    <div className={`${styles.wrap} ${styles.closingInner}`}>
      <h2 className={styles.h2}>{t.title}</h2>
      <p>{t.text}</p>
      <div className={styles.actions}>
        <SmartLink to="/invest" className={styles.btnPrimary}>{t.join}</SmartLink>
        <SmartLink to={CONTACT} className={styles.btnGhost}>{t.contact}</SmartLink>
      </div>
    </div>
  </section>
);

export default function HomePage({ t }) {
  return (
    <Layout title={t.meta.title} description={t.meta.description}>
      <main className={styles.page}>
        <Hero t={t.hero} />
        <Recognition items={t.recognition} />
        <Network t={t.network} />
        <Tools t={t.tools} />
        <Team t={t.team} />
        <Partners title={t.partnersTitle} />
        <Closing t={t.closing} />
      </main>
    </Layout>
  );
}
