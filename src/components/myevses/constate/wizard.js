import { useState } from 'react';
import constate from "constate";

export const isValidAddress = v => {
  const lgt = v.length;
  const tz1 = v.startsWith('tz1');
  return (lgt == 36) && tz1;
}

const isBase58Char = (c) => {
  if ('1' <= c && c <= '9') {
    return true;
  } else if ('A' <= c && c <= 'H') {
    return true;
  } else if ('J' <= c && c <= 'N') {
    return true;
  } else if ('P' <= c && c <= 'Z') {
    return true;
  } else if ('a' <= c && c <= 'k') {
    return true;
  } else if ('m' <= c && c <= 'z') {
    return true;
  } else return false;
}

const IdLength = 6;

export function useWizard() {
  const [data, setData] = useState({
    edition : false,
    showerrors : false,
    owner : "",
    id : "",
    nb : 1,
    evseserver : 'werenode',
    supervision : { type : 'wherenodeocpp16' },
  });
  const setShowErrors = (s) => { setData(d => { return { ...d, showerrors : s } }) };
  const setNb = (n) => {
    if (n >= 1) setData(d => { return { ...d, edition : true, nb : n } });
  };
  const setOwner = (o) => { setData(d => { return { ...d, edition : true, owner : o } }) };
  const setId = (i) => {
    if (i.length <= IdLength)
      setData(d => {
        return { ...d, edition : true, id : Array.from(i).filter(isBase58Char).join("") }
      })
  };
  const setSupervision = (t) => { setData(d => { return { ...d, edition : true, supervision : {
   type : t
  }}})};
  const setLogin = (l) => { setData(d => { return { ...d, edition : true, supervision : {
    ...d.supervision, login : l
  }}})};
  const setPwd = (p) => { setData(d => { return { ...d, edition : true, supervision: {
    ...d.supervision, pwd : p
  }}})};
  const setSwitchOn = (o) => { setData(d => { return { ...d, edition : true, supervision: {
    ...d.supervision, switchon : o
  }}})};
  const setSwitchOff = (o) => { setData(d => { return { ...d, edition : true, supervision: {
    ...d.supervision, switchoff : o
  }}})};
  return {
    data,
    setData,
    setShowErrors,
    setOwner,
    setId,
    setNb,
    setSupervision,
    setLogin,
    setPwd,
    setSwitchOn,
    setSwitchOff
  }
}

export const [WizardProvider, getWizard] = constate(useWizard);
