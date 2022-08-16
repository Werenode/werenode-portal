import { useState } from 'react';
import constate from "constate";

export function useSettings() {
  const [settings,setSettings] = useState([]);
  const createSettings = (d) => { setSettings(
    Array.from(Array(parseInt(d.nb)), (x,i) => ({
      id : d.id, //(d.id + ' ' +  (i + 1)),
      owner : d.owner,
      evseserver : d.evseserver,
      supervision : d.supervision,
      connectors : d.connectors,
      freeusers : d.freeusers,
      gps : "",
    }))) };
  const setSetting = (idx) => (field) => (v) => {
    setSettings(s => {
      return s.map((x,i) => {
        if(i == idx) {
          x[field] = v;
          return x
        } else return x
      });
    })
  }
  return {
    settings,
    setSettings,
    createSettings,
    setSetting
  };
}

export const [SettingsProvider, getSettings] = constate(useSettings);
