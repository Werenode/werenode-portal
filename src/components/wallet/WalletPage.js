import React, {useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './Wallet.module.css';

// Read-only view of a user's Tezos wallet (address, XTZ and WRC balances).
// The account is the one used in the Werenode mobile app; balances are read from the
// public Tezos blockchain through the TzKT API, so nothing here can move funds.

const WRC_CONTRACT = 'KT19Fmya7B49wKYdoqXYphyQWGRUn9g5wG8R';
const TZKT = 'https://api.tzkt.io/v1';

const TEXTS = {
  en: {
    title: 'My Werenode wallet',
    intro:
      'View the Tezos address linked to your Werenode account and its Tezos (XTZ) and Werecoin (WRC) balances. This page is read-only: it cannot send, exchange or spend tokens.',
    signInTitle: 'Sign in with your Werenode app account',
    email: 'Email',
    password: 'Password',
    signIn: 'Sign in',
    google: 'Continue with Google',
    forgot: 'Forgot your password?',
    resetSent: 'If an account exists for this address, a reset email has been sent.',
    resetNeedsEmail: 'Enter your email address above, then select "Forgot your password?" again.',
    signedInAs: 'Signed in as',
    signOut: 'Sign out',
    address: 'Tezos address',
    copy: 'Copy',
    copied: 'Copied',
    explorer: 'View on TzKT',
    tez: 'Tezos',
    wrc: 'Werecoin',
    approx: 'about',
    refresh: 'Refresh',
    updated: 'Updated at',
    loading: 'Loading…',
    noAddress: 'No Tezos address is linked to this account.',
    balanceError: 'Balances could not be loaded from the Tezos blockchain. Try again in a moment.',
    note:
      'Your tokens are recorded on the Tezos blockchain. You can also see them with any compatible Tezos wallet.',
    terms: 'Terms of use, article 18',
    termsAnchor: 'article-18--blockchain-technologies-and-digital-assets',
    errors: {
      'auth/invalid-credential': 'Incorrect email or password.',
      'auth/wrong-password': 'Incorrect email or password.',
      'auth/user-not-found': 'Incorrect email or password.',
      'auth/invalid-email': 'This email address is not valid.',
      'auth/too-many-requests': 'Too many attempts. Wait a few minutes, then try again.',
      'auth/popup-closed-by-user': 'The Google window was closed before signing in.',
      'auth/popup-blocked': 'Your browser blocked the Google window. Allow pop-ups for werenode.com, then try again.',
      'auth/user-disabled': 'This account has been deactivated.',
      'auth/network-request-failed': 'Network error. Check your connection, then try again.',
      default: 'Sign-in failed. Try again.',
    },
  },
  fr: {
    title: 'Mon portefeuille Werenode',
    intro:
      "Consultez l'adresse Tezos associée à votre compte Werenode et ses soldes en Tezos (XTZ) et en Werecoin (WRC). Cette page est en lecture seule : elle ne permet ni d'envoyer, ni d'échanger, ni de dépenser des jetons.",
    signInTitle: "Connectez-vous avec votre compte de l'appli Werenode",
    email: 'Adresse e-mail',
    password: 'Mot de passe',
    signIn: 'Se connecter',
    google: 'Continuer avec Google',
    forgot: 'Mot de passe oublié ?',
    resetSent: 'Si un compte existe pour cette adresse, un e-mail de réinitialisation a été envoyé.',
    resetNeedsEmail: "Saisissez votre adresse e-mail ci-dessus, puis cliquez de nouveau sur « Mot de passe oublié ? ».",
    signedInAs: 'Connecté en tant que',
    signOut: 'Se déconnecter',
    address: 'Adresse Tezos',
    copy: 'Copier',
    copied: 'Copiée',
    explorer: 'Voir sur TzKT',
    tez: 'Tezos',
    wrc: 'Werecoin',
    approx: 'environ',
    refresh: 'Actualiser',
    updated: 'Mis à jour à',
    loading: 'Chargement…',
    noAddress: "Aucune adresse Tezos n'est associée à ce compte.",
    balanceError: "Les soldes n'ont pas pu être lus sur la blockchain Tezos. Réessayez dans un instant.",
    note:
      "Vos jetons sont inscrits sur la blockchain Tezos. Vous pouvez aussi les consulter avec n'importe quel portefeuille Tezos compatible.",
    terms: "Conditions générales d'utilisation, article 18",
    termsAnchor: 'article-18--technologies-blockchain-et-actifs-numériques',
    errors: {
      'auth/invalid-credential': 'Adresse e-mail ou mot de passe incorrect.',
      'auth/wrong-password': 'Adresse e-mail ou mot de passe incorrect.',
      'auth/user-not-found': 'Adresse e-mail ou mot de passe incorrect.',
      'auth/invalid-email': "Cette adresse e-mail n'est pas valide.",
      'auth/too-many-requests': 'Trop de tentatives. Patientez quelques minutes, puis réessayez.',
      'auth/popup-closed-by-user': 'La fenêtre Google a été fermée avant la connexion.',
      'auth/popup-blocked':
        'Votre navigateur a bloqué la fenêtre Google. Autorisez les fenêtres pop-up pour werenode.com, puis réessayez.',
      'auth/user-disabled': 'Ce compte a été désactivé.',
      'auth/network-request-failed': 'Erreur réseau. Vérifiez votre connexion, puis réessayez.',
      default: 'La connexion a échoué. Réessayez.',
    },
  },
};

// Format an integer amount given in the smallest unit (mutez, or 10^-18 WRC) without losing precision.
function formatUnits(raw, decimals, locale, maxFraction) {
  const value = BigInt(raw || '0');
  const base = BigInt(10) ** BigInt(decimals);
  const whole = value / base;
  const fraction = (value % base).toString().padStart(decimals, '0').slice(0, maxFraction).replace(/0+$/, '');
  const wholeText = new Intl.NumberFormat(locale).format(whole);
  if (!fraction) return wholeText;
  const sep = new Intl.NumberFormat(locale).format(1.5).charAt(1);
  return `${wholeText}${sep}${fraction}`;
}

async function fetchBalances(address) {
  const [xtz, wrc, quote] = await Promise.all([
    fetch(`${TZKT}/accounts/${address}/balance`).then((r) => {
      if (!r.ok) throw new Error(`tzkt ${r.status}`);
      return r.text();
    }),
    fetch(
      `${TZKT}/tokens/balances?account=${address}&token.contract=${WRC_CONTRACT}&token.tokenId=0&select=balance`,
    ).then((r) => {
      if (!r.ok) throw new Error(`tzkt ${r.status}`);
      return r.json();
    }),
    fetch(`${TZKT}/quotes/last`)
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null),
  ]);
  return {
    xtz: String(xtz).trim() || '0',
    wrc: (Array.isArray(wrc) && wrc[0]) || '0',
    eurPerXtz: quote && typeof quote.eur === 'number' ? quote.eur : null,
    at: new Date(),
  };
}

export default function WalletPage() {
  const {i18n} = useDocusaurusContext();
  const locale = i18n.currentLocale === 'fr' ? 'fr' : 'en';
  const t = TEXTS[locale];
  const numLocale = locale === 'fr' ? 'fr-FR' : 'en-GB';

  const [fb, setFb] = useState(null);
  const [user, setUser] = useState(undefined); // undefined = still checking the session
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [info, setInfo] = useState('');
  const [busy, setBusy] = useState(false);

  const [address, setAddress] = useState(null); // null = loading, '' = none
  const [balances, setBalances] = useState(null);
  const [balanceError, setBalanceError] = useState(false);
  const [loadingBalances, setLoadingBalances] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let unsubscribe = () => {};
    let cancelled = false;
    import('./firebase').then((mod) => {
      if (cancelled) return;
      setFb(mod);
      unsubscribe = mod.watchUser((u) => setUser(u || null));
    });
    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, []);

  const loadBalances = async (addr) => {
    setLoadingBalances(true);
    setBalanceError(false);
    try {
      setBalances(await fetchBalances(addr));
    } catch (e) {
      setBalanceError(true);
    } finally {
      setLoadingBalances(false);
    }
  };

  useEffect(() => {
    if (!fb || !user) {
      setAddress(null);
      setBalances(null);
      return;
    }
    let cancelled = false;
    fb.getTezosAddress(user.uid)
      .then((addr) => {
        if (cancelled) return;
        setAddress(addr);
        if (addr) loadBalances(addr);
      })
      .catch(() => !cancelled && setAddress(''));
    return () => {
      cancelled = true;
    };
  }, [fb, user]);

  const describe = (e) => t.errors[e && e.code] || t.errors.default;

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!fb) return;
    setBusy(true);
    setAuthError('');
    setInfo('');
    try {
      await fb.signInEmail(email.trim(), password);
      setPassword('');
    } catch (e) {
      setAuthError(describe(e));
    } finally {
      setBusy(false);
    }
  };

  const onGoogle = async () => {
    if (!fb) return;
    setAuthError('');
    setInfo('');
    try {
      await fb.signInGoogle();
    } catch (e) {
      setAuthError(describe(e));
    }
  };

  const onForgot = async () => {
    if (!fb) return;
    setAuthError('');
    if (!email.trim()) {
      setInfo(t.resetNeedsEmail);
      return;
    }
    try {
      await fb.resetPassword(email.trim());
    } catch (e) {
      // Same answer whether or not the account exists.
    }
    setInfo(t.resetSent);
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // Clipboard not available: the address stays selectable on screen.
    }
  };

  const xtzEur =
    balances && balances.eurPerXtz !== null
      ? new Intl.NumberFormat(numLocale, {style: 'currency', currency: 'EUR'}).format(
          (Number(BigInt(balances.xtz)) / 1e6) * balances.eurPerXtz,
        )
      : null;

  return (
    <main className={styles.page}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.intro}>{t.intro}</p>

        {(user === undefined || !fb) && <p className={styles.muted}>{t.loading}</p>}

        {fb && user === null && (
          <section className={styles.card} aria-labelledby="wallet-signin">
            <h2 id="wallet-signin" className={styles.cardTitle}>
              {t.signInTitle}
            </h2>
            <form onSubmit={onSubmit} className={styles.form}>
              <label className={styles.label}>
                {t.email}
                <input
                  className={styles.input}
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className={styles.label}>
                {t.password}
                <input
                  className={styles.input}
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              {authError && (
                <p className={styles.error} role="alert">
                  {authError}
                </p>
              )}
              {info && (
                <p className={styles.info} role="status">
                  {info}
                </p>
              )}
              <button type="submit" className={styles.primary} disabled={busy}>
                {t.signIn}
              </button>
              <button type="button" className={styles.link} onClick={onForgot}>
                {t.forgot}
              </button>
            </form>
            <div className={styles.divider} aria-hidden="true" />
            <button type="button" className={styles.secondary} onClick={onGoogle}>
              {t.google}
            </button>
          </section>
        )}

        {fb && user && (
          <section className={styles.card} aria-live="polite">
            <div className={styles.account}>
              <span className={styles.muted}>
                {t.signedInAs} <strong>{user.email || user.displayName}</strong>
              </span>
              <button type="button" className={styles.link} onClick={() => fb.logOut()}>
                {t.signOut}
              </button>
            </div>

            {address === null && <p className={styles.muted}>{t.loading}</p>}
            {address === '' && <p>{t.noAddress}</p>}

            {address && (
              <>
                <div className={styles.addressBlock}>
                  <span className={styles.label}>{t.address}</span>
                  <code className={styles.address}>{address}</code>
                  <div className={styles.addressActions}>
                    <button type="button" className={styles.secondarySmall} onClick={onCopy}>
                      {copied ? t.copied : t.copy}
                    </button>
                    <a
                      className={styles.secondarySmall}
                      href={`https://tzkt.io/${address}`}
                      target="_blank"
                      rel="noopener noreferrer">
                      {t.explorer}
                    </a>
                  </div>
                </div>

                <div className={styles.balances}>
                  <div className={styles.balance}>
                    <span className={styles.balanceLabel}>{t.wrc}</span>
                    <span className={styles.balanceValue}>
                      {balances ? formatUnits(balances.wrc, 18, numLocale, 2) : '—'} <small>WRC</small>
                    </span>
                  </div>
                  <div className={styles.balance}>
                    <span className={styles.balanceLabel}>{t.tez}</span>
                    <span className={styles.balanceValue}>
                      {balances ? formatUnits(balances.xtz, 6, numLocale, 6) : '—'} <small>XTZ</small>
                    </span>
                    {xtzEur && (
                      <span className={styles.muted}>
                        {t.approx} {xtzEur}
                      </span>
                    )}
                  </div>
                </div>

                {balanceError && (
                  <p className={styles.error} role="alert">
                    {t.balanceError}
                  </p>
                )}

                <div className={styles.refreshRow}>
                  <button
                    type="button"
                    className={styles.secondarySmall}
                    onClick={() => loadBalances(address)}
                    disabled={loadingBalances}>
                    {loadingBalances ? t.loading : t.refresh}
                  </button>
                  {balances && (
                    <span className={styles.muted}>
                      {t.updated}{' '}
                      {balances.at.toLocaleTimeString(numLocale, {hour: '2-digit', minute: '2-digit'})}
                    </span>
                  )}
                </div>
              </>
            )}
          </section>
        )}

        <p className={styles.note}>
          {t.note} <Link to={`/terms-of-use#${t.termsAnchor}`}>{t.terms}</Link>
        </p>
      </div>
    </main>
  );
}
