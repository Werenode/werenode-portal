// Firebase client for the wallet page, loaded only in the browser (see WalletPage.js).
// Same Firebase project as the mobile app (werenode-37b0a), so users sign in with the same account.
// These web keys are public by design; access to data is controlled by Firestore security rules.
import {initializeApp, getApps} from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {getFirestore, doc, getDoc, collection, query, where, limit, getDocs} from 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBQztORLspmYSjDaFUtwSTYd5iES62KkZc',
  authDomain: 'werenode-37b0a.firebaseapp.com',
  projectId: 'werenode-37b0a',
  storageBucket: 'werenode-37b0a.appspot.com',
  messagingSenderId: '953650892313',
  appId: '1:953650892313:web:46864c6f3da9f824ae6488',
};

const app = getApps().length ? getApps()[0] : initializeApp(config);
const auth = getAuth(app);
const db = getFirestore(app);

export function watchUser(callback) {
  return onAuthStateChanged(auth, callback);
}

export function signInEmail(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signInGoogle() {
  return signInWithPopup(auth, new GoogleAuthProvider());
}

export function resetPassword(email) {
  return sendPasswordResetEmail(auth, email);
}

export function logOut() {
  return signOut(auth);
}

// Tezos address (tz1…) of the signed-in user. Older accounts keep it on users/{uid};
// newer ones in users_ext (type "tezos"). Only the public address is returned.
export async function getTezosAddress(uid) {
  const user = await getDoc(doc(db, 'users', uid));
  const fromProfile = user.exists() ? user.data().tz_public_key_hash : '';
  if (fromProfile) return fromProfile;

  const snap = await getDocs(
    query(collection(db, 'users_ext'), where('user', '==', uid), where('type', '==', 'tezos'), limit(1)),
  );
  return snap.empty ? '' : snap.docs[0].data().value || '';
}
