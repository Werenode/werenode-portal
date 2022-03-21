import {useCallback, useState} from 'react';
import constate from "constate";
import {bytes2Char, char2Bytes} from "@taquito/utils";
import {CONTRACT_ADDRESS, EVSE_MANAGER_ADDRESS} from "../../../utils/evse-smart-contract";
import {inputdata} from "../inputData";

export function useEVSEs() {
  const [evses,setEvses] = useState({
    data : [],
    shouldLoadData: true,
    message : '',
    opCostEstimation: 0,
  });

  const checkEvse = (evse) => {
    const checkEvseData = (data) =>{
      return !!(data.supervision && data.connectors
          && (data.connectors.length !== 0));
    }
    return !!(evse.pid && evse.powner && evse.pmng && checkEvseData(evse.pdata));
  }
  const retrieveEvsesFromStorage = useCallback(async (tezos, ownerAddress) => {
    try{
      const contract = await tezos.wallet.at(CONTRACT_ADDRESS);
      const storage = await contract.storage();
      const evsesIdTab = await (storage.evsemanager.get(EVSE_MANAGER_ADDRESS));
      const evsesResult = await Promise.all(
          evsesIdTab.evses.map(async evseId => await storage['evse'].get(evseId))
      );
      setEvses(e => ({...e, data: evsesResult
            .map((ev,idx) => ({id: evsesIdTab.evses[idx], data: ev}))
            .filter(newEv => newEv.data.evse_owner === ownerAddress)
            .map(newEv => {
              let data;
              try{
                data = JSON.parse(bytes2Char(newEv.data.evse_data));
              }catch (e){
                data = {};
              }
              return {
                id: newEv.id,
                setting: {
                  id: newEv.id,
                  evseserver: inputdata.evseserver.label,
                  supervision: data.supervision || {type: 'wherenodeocpp16'},
                  connectors: data.connectors || [],
                  freeusers: data.freeusers || [],
                  gps: data.location || '',
                },
              }})
      }));
    }catch (e){
      alert(`An error occurs while loading data`);
      console.log(`${e.message}`);
    }
  });

  const addEvse = useCallback(async (tezos, evse) => {
    setEvses(e => ({...e, message: `Encrypting data`}));
    evse.pdata = char2Bytes(JSON.stringify(evse.pdata));
    const contract = await tezos.wallet.at(CONTRACT_ADDRESS);
    setEvses(e => ({...e, message: `May take several time to add ${evse.pid}`}));
    const op = await contract.methods.add_evse([evse]).send();
    setEvses(e => ({...e, message: `Waiting for confirmation`}));
    await op.confirmation();
    setEvses(e => ({...e, message: `Evse ${evse.pid} added successfully`}));
  });

  const updateEvse = useCallback(async (tezos, evse) => {
    if(!checkEvse(evse)){
      console.log('Empty field');
      return;
    }
    setEvses(e => ({...e, message: `Encrypting data`}));
    evse.pdata = char2Bytes(JSON.stringify(evse.pdata));
    const contract = await tezos.wallet.at(CONTRACT_ADDRESS);
    setEvses(e => ({...e, message: `May take several time to update ${evse.pid}`}));
    const op = await contract.methods.update_evse([evse]).send();
    setEvses(e => ({...e, message: `Waiting for confirmation`}));
    await op.confirmation();
    setEvses(e => ({...e, message: `Evse ${evse.pid} updated successfully`}));
  });

  const removeEvse = useCallback(async (tezos, pid) => {
    const contract = await tezos.wallet.at(CONTRACT_ADDRESS);
    setEvses(e => ({...e, message: `May take several time to remove ${pid}`}));
    const op = await contract.methods.remove_evse([pid]).send();
    setEvses(e => ({...e, message: `Waiting for confirmation`}));
    await op.confirmation();
    setEvses(e => ({...e, message: `Evse ${pid} removed successfully`}));
  })

  return {
    evses,
    setEvses,
    retrieveEvsesFromStorage,
    addEvse,
    updateEvse,
    removeEvse,
   };
}

export const [EVSEProvider, getEVSEs] = constate(useEVSEs);
/*      { id : "EVSE 1", revenue : "3", online : true },
      { id : "EVSE 2", revenue : "7", online : true },
      { id : "EVSE 3", revenue : "5", online : true },
      { id : "EVSE 4", revenue : "5.43", online : true },
      { id : "EVSE 5", revenue : "89", online : true },
      { id : "EVSE 6", revenue : "12", online : true },
      { id : "EVSE 7", revenue : "2", online : true },
      { id : "EVSE 8", revenue : "0", online : true }, */
