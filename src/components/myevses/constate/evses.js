import { useState } from 'react';
import constate from "constate";

export function useEVSEs() {
  const [evses,setEvses] = useState({
    data : [
 /*      { id : "EVSE 1", revenue : "3", online : true },
      { id : "EVSE 2", revenue : "7", online : true },
      { id : "EVSE 3", revenue : "5", online : true },
      { id : "EVSE 4", revenue : "5.43", online : true },
      { id : "EVSE 5", revenue : "89", online : true },
      { id : "EVSE 6", revenue : "12", online : true },
      { id : "EVSE 7", revenue : "2", online : true },
      { id : "EVSE 8", revenue : "0", online : true }, */
    ]
  });
  return {
    evses,
    setEvses,
   };
}

export const [EVSEProvider, getEVSEs] = constate(useEVSEs);
