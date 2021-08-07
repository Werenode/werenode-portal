import { useState } from 'react';
import constate from "constate";

export function useWizard() {
  const [data, setData] = useState({
    edition : false,
    owner : "",
    id : "",
    nb : 1,
    evseserver : 'werenode'
  });
  const setNb = (n) => { setData(d => { return { ...d, edition : true, nb : n } }) };
  const setOwner = (o) => { setData(d => { return { ...d, edition : true, owner : o } }) };
  const setId = (i) => { setData(d => { return { ...d, edition : true, id : i } }) };
  return {
    data,
    setData,
    setOwner,
    setId,
    setNb
  }
}

export const [WizardProvider, getWizard] = constate(useWizard);
