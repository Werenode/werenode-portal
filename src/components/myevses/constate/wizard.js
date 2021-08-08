import { useState } from 'react';
import constate from "constate";

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

export function useWizard() {
  const [data, setData] = useState({
    edition : false,
    owner : "",
    id : "",
    nb : 1,
    evseserver : 'werenode'
  });
  const setNb = (n) => {
    if (n >= 1) setData(d => { return { ...d, edition : true, nb : n } });
  };
  const setOwner = (o) => { setData(d => { return { ...d, edition : true, owner : o } }) };
  const setId = (i) => {
    if (i.length <= 5)
      setData(d => {
        return { ...d, edition : true, id : Array.from(i).filter(isBase58Char).join("") }
      })
  };
  return {
    data,
    setData,
    setOwner,
    setId,
    setNb
  }
}

export const [WizardProvider, getWizard] = constate(useWizard);
