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

const isFloatChar = (c) => {
  if ('0' <= c && c <= '9') {
    return true;
  } else if (c == '.') {
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
    connectors : [
      { index : 1, mode : 'ac1', power : 'p2', type : 'ctype0', price : '2', currency : 'euro' },
    ],
    /* connector settings */
    open : false,
    connectormode : 'ac1',
    power : 'p2',
    connectortype : 'ctype0',
    price : '0',
    index : 1,
    currency : 'euro',
    connectoredit : -1
    /* ----------------- */
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
  const setOpen = (b) => { setData(d => { return { ...d, edition : true, open : b }})};
  const setPrice = (p) => { setData(d => {
      return { ...d, edition : true, price : Array.from(p).filter(isFloatChar).join("") }
    })
  };
  const setIndex = (i) => {
    if (i >= 1) setData(d => { return { ...d, edition : true, index : i } });
  };
  const addConnector = () => { setData(d => {
    const c = {
      index    : parseInt(d.index),
      mode     : d.connectormode,
      power    : d.power,
      type     : d.connectortype,
      price    : d.price,
      currency : d.currency
    };
    if (d.connectoredit == -1) {
      return { ...d, edition : true, connectors : d.connectors.concat([c]) };
    } else {
      return { ...d, edition : true, connectoredit : -1, connectors : d.connectors.filter(x => x.index !== d.connectoredit).concat([c]) }
    }
  })};
  const rmConnector = (i) => { setData(d => {
    return { ...d, edition : true, connectors : d.connectors.filter(x => x.index !== i) } })
  };
  const editConnector = (i) => { setData(d => {
    const c = d.connectors.find(x => x.index == i);
    return { ...d, edition : true,
      open     : true,
      connectoredit : c.index,
      index    : parseInt(c.index),
      connectormode : c.mode,
      power    : c.power,
      connectortype : c.type,
      price    : c.price,
      currency : c.currency }
  })};
  const setConnectorEdit = (b) => { setData(d => { return { ...d, edition : true, connectoredit : b }})};
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
    setSwitchOff,
    setOpen,
    setPrice,
    setIndex,
    addConnector,
    rmConnector,
    editConnector,
    setConnectorEdit,
  }
}

export const [WizardProvider, getWizard] = constate(useWizard);
