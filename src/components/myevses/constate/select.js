import { useState } from 'react';
import constate from "constate";

export function useSelect() {
  const [select,setSelect] = useState(false);
  const [selected, setSelected] = useState(null);
  return {
    select,
    setSelect,
    selected,
    setSelected
   };
}

export const [SelectProvider, getSelect] = constate(useSelect);
