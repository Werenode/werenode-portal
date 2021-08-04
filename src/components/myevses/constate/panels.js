import { useState } from 'react';
import constate from "constate";

export function usePanels() {
  const [panel,setPanel] = useState(0);
  return {
    panel,
    setPanel,
   };
}

export const [PanelsProvider, getPanels] = constate(usePanels);
