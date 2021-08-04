import { useState } from 'react';
import constate from "constate";

export function useEVSEs() {
  const [evses,setEvses] = useState({
    data : [
      { id : "EVSE 1", online : true },
      { id : "EVSE 2", online : true },
      { id : "EVSE 3", online : true },
      { id : "EVSE 4", online : true },
      { id : "EVSE 5", online : true },
      { id : "EVSE 6", online : true },
      { id : "EVSE 7", online : true },
      { id : "EVSE 8", online : true },
    ]
  });
  return {
    evses,
    setEvses,
   };
}

export const [EVSEProvider, getEVSEs] = constate(useEVSEs);
