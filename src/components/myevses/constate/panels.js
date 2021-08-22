import * as React from 'react';
import { useState } from 'react';
import constate from "constate";

import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FileDownloadIcon from '@material-ui/icons/FileDownload';
import HelpIcon from '@material-ui/icons/Help';
import EvStationIcon from '@material-ui/icons/EvStation';

export const panels = [
  { id : 0, title : 'Dashboard', icon : <DashboardIcon style={{ color : 'white' }} /> },
  { id : 1, title : 'EVSEs',     icon : <EvStationIcon style={{ color : 'white' }} /> },
  { id : 2, title : 'Account',   icon : <AccountCircleIcon style={{ color : 'white' }}/> },
  { id : 3, title : 'Export',    icon : <FileDownloadIcon style={{ color : 'white' }}/>},
  { id : 4, title : 'Help',      icon : <HelpIcon style={{ color : 'white' }}/>}
]

export const EVSEsTitle = 'EVSEs';
export const EVSEsIdx   = 1;

export const getEVSEPanelIdx = (id) => {
  return 10 * panels.length + id;
}

export const getEVSEIdfromPanelIdx = (id) => {
  return id - 10 * panels.length;
}

export function usePanels() {
  const [panel, internalSetPanel] = useState(0);
  const [openevses, setOpenEvses] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const setPanel = (id) => {
    internalSetPanel(id);
    if (id >= getEVSEPanelIdx(0) && open && !openevses) {
      setOpenEvses(true);
    }
  };
  return {
    panel,
    setPanel,
    openevses,
    setOpenEvses,
    open,
    setOpen
  };
}

export const [PanelsProvider, getPanels] = constate(usePanels);
