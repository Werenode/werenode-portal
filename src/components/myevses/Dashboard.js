import * as React from 'react';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/styles';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Container from '@material-ui/core/Container';

import { Typography } from '@material-ui/core';

import { getEVSEs } from './constate/evses';
import { getPanels, getEVSEPanelIdx } from './constate/panels';

import { getSelect } from './constate/select';

import { useTheme } from '@material-ui/core/styles';
import useBaseUrl from '@docusaurus/useBaseUrl';

import { toObj } from './inputData.js';

import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import BoltIcon from '@material-ui/icons/Bolt';
import PowerIcon from '@material-ui/icons/Power';
import { getSettings } from './constate/settings';
import { getWizard } from './constate/wizard';
import {useAccountPkh, useTezos} from "./constate/dapp";
import {useEffect} from "react";
import MessageBox from "./MessageBox";
import {getGoogleLoadScript} from "./constate/googleLoadScript";

const useStyles = makeStyles({
  tools: {
    width: '100%',
    height: '64px',
    borderTopStyle: 'solid',
    borderColor : '#34383e',
    borderWidth : '1px',
    paddingRight : '24px'
  },
  evse: {
    width : '200px',
    height : '300px',
    borderColor : '#34383e',
    //borderColor : 'white',
    borderWidth : '1px',
    borderStyle : 'solid',
  },
  selected : {
    width : '200px',
    height : '300px',
    borderColor : 'rgba(0, 177, 165, 1)',
    borderWidth : '2px',
    borderStyle : 'solid',
  },
  icons : {
    borderTop : '1px solid #34383e',
    borderBottom : '1px solid #34383e',
    paddingLeft : '8px'
  },
  icon : {
    marginTop : '6px',
    marginRight : '4px',
    marginLeft : '4px',
  },
  connector : {
    borderBottom : '1px solid #34383e',
    padding : '8px',
  }
});

const getEvseIdx = (evses, id) => {
  return evses.map(x => x.id).indexOf(id);
}

const Connector = (props) => {
  const classes = useStyles();
  return (
  <Grid container direction="row" justifyContent="flex-start" alignContent="center" className={ classes.connector }>
    <Grid item> <PowerIcon fontSize="small" /></Grid>
    <Grid item> <Typography variant="subtitle2">{props.data.index + ":"}</Typography></Grid>
    <Grid item xs={12} style={{ paddingLeft : "12px" }}>
      <Typography variant="subtitle2">{toObj('power')[props.data.power]}</Typography>
    </Grid>
    <Grid item xs={12} style={{ paddingLeft : "12px" }}>
      <Typography variant="subtitle2">{toObj('connectormode')[props.data.mode]}</Typography>
    </Grid>
  </Grid>
  )
}

const EVSE = (props) => {
  const { setPanel } = getPanels();
  const { select, selected, setSelected } = getSelect();
  const { evses } = getEVSEs();
  const classes = useStyles();
  const data = props.data;
  const evseidx = getEVSEPanelIdx(getEvseIdx(evses.data, data.id));
  const theme = useTheme();

  const handleClick = () => {
    if (select) {
      if (selected === props.data.id) {
        setSelected(null);
      }else {
        setSelected(props.data.id);
      }
    } else {
      setPanel(evseidx);
    }
  };
  const isSelected = () => {
    return select && selected === data.id;
  };

  return (
    <Card className={ isSelected() ? classes.selected : classes.evse} onClick={ handleClick }>
      <Grid container direction="column" justifyContent="flex-start" alignContent="center" style={{ height : "300px" }}>
        <Grid item style={{ padding : '12px' }}>
          <Grid container direction="row" justifyContent="flex-start" alignContent="center">
            <Grid item xs={12}>
              <Typography>{data.id}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2">{toObj('supervision')[data.setting.supervision.type]}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item >
          <Grid container direction="row" justifyContent="flex-start" alignContent="center" className={ classes.icons }>
            <Grid item><SettingsEthernetIcon fontSize="small" style={{ color : theme.palette.action.hover }} className={ classes.icon }/></Grid>
            <Grid item><BoltIcon fontSize="small" style={{ color : theme.palette.action.disabled }} className={ classes.icon }/></Grid>
          </Grid>
        </Grid>
        {
          data.setting.connectors.map((x,i) => <Grid key={"connector-"+data.id+"-"+i} item><Connector  data={x} /></Grid>)
        }
      </Grid>
    </Card>
  )
}

const EVSEsPanel = (props) => {
  const { evses, setEvses, retrieveEvsesFromStorage } = getEVSEs();
  const theme = useTheme();
  const tezos = useTezos();
  const pkh = useAccountPkh();
  const {data, setShowMessageBox} = getWizard();
  useEffect(() => {
    if(!evses.shouldLoadData) return;
    const loadData = async () => {
      setShowMessageBox(true);
      await retrieveEvsesFromStorage(tezos, pkh);
      setEvses(e => ({...e, shouldLoadData: false, message: ''}));
      setShowMessageBox(false);
    };
    loadData();
  }, [evses.shouldLoadData]);

  return data.showMessageBox ? <MessageBox  message={evses.message} /> : (
    <Container maxWidth="lg" style={{ marginTop : '40px', height : props.height }}>
    { evses.data.length === 0 ? (<Grid container direction="column" justifyContent="center" alignItems="center" style={{ height : '70%' }}>
      <Grid item>
        <img src={useBaseUrl('img/werenode_logo_no_name_250px_black.png')} alt='werenode logo' style={{ width : '150px', marginBottom: '20px' }}/>
      </Grid>
      <Grid item>
        <Typography variant='subtitle1' style={{ color : theme.palette.grey.A700 }}>Click 'ADD' below to add an EVSE.</Typography>
      </Grid>
    </Grid>) :
    (<Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={4} style={{ paddingBottom : '40px' }}>
      { evses.data.map(evse => {
        return (
          <Grid item key={evse.id}>
            <EVSE data={evse} />
          </Grid>)
      }) }
    </Grid>) }
    </Container>
  )
}

const actions = ['Add', 'Edit', 'Remove', 'Sort'];

const ActionButtons = (props) => {
  const anchorRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [sortalpha, setSortAlpha] = React.useState(false);
  const { selected, setSelect, setSelected } = getSelect();
  const { setSettings} = getSettings();
  const { setPanel } = getPanels();
  const { setEdit, setShowMessageBox, data } = getWizard();
  const { evses, setEvses, removeEvse } = getEVSEs();
  const tezos = useTezos();

  const handleClick = () => {

    switch(props.selectedIndex) {
      case 3: // Sort
        setEvses(evses => {
          let sorted;
          if (!sortalpha) {
            sorted = evses.data.sort((x,y) => x.id < y.id ? 1 : -1);
          } else {
            sorted = evses.data.sort((x,y) => x.id > y.id ? 1 : -1);
          }
          return { ...evses, data : sorted };
        });
        setSortAlpha(sa => !sa);
        break;
      case 2: // Remove
        if (selected) {
          console.log('removing');
          const removeEvseBlockChain = async () => {
            try{
              setShowMessageBox(true);
              await removeEvse(tezos, selected);
              setEvses(e => ({...e, shouldLoadData: true}));
              setShowMessageBox(false);
            }catch (e){
              alert(`An error occurs while removing ${e.message}`);
              setShowMessageBox(false);
              setEvses(e => ({...e, shouldLoadData: true, message: ''}));
            }
          }
          removeEvseBlockChain();
        }
        props.setSelectedIndex(0);
        setSelected(null);
        setSelect(false);
        break;
      case 1: // Edit
        if (selected) {
          setEdit(true);
          // create settings
          const s = evses.data.filter(x => selected === x.id).map(x => x.setting);
          setSettings(s);
          setPanel(-1);
        }
        break
      case 0: // Add
        setPanel(-1);
        break;
    }
  };
  const handleMenuItemClick = (event, index) => {
    props.setSelectedIndex(index);
    setOpen(false);
    if (index === 1 || index === 2) {
      setSelect(true);
    } else {
      setSelected(null);
      setSelect(false);
    }
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  return (
    <Grid item>
      {data.showMessageBox ? null :
      <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
        <Button onClick={handleClick} >{actions[props.selectedIndex]}</Button>
        <Button
            size="small"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="select EVSE action"
            aria-haspopup="menu"
            onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      }
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper style={{ backgroundColor : '#242526' }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {actions.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={false}
                      selected={index === props.selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Grid>
  )
}

/*
//Not possible to add, remove or update many evses at once on tezos blockchain
const SelectAll = () => {
  const { setSelected } = getSelect();
  const { evses } = getEVSEs();
  const handleClick = () => {
    setSelected(evses.data.map(x => x.id));
  }
  return (
    <Grid item style={{ marginRight : '32px' }}>
      <Button variant="text" onClick={handleClick}>select all</Button>
    </Grid>
  )
}*/

const Tools = () => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <div className={ classes.tools }>
      <Grid container direction="row" justifyContent="flex-end" alignItems="center" style={{ height:'100%' }}>
        <ActionButtons selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </div>
  )
}

const DashBoard = (props) => {
  const h = props.height - 64;

  const { isGoogleApiLoaded, loadGoogleScript} = getGoogleLoadScript();
  useEffect(() => {
    if(!isGoogleApiLoaded){
      loadGoogleScript();
    }
  }, []);

  return (
    <Grid container
      direction="column-reverse"
      justifyContent="space-between"
      alignItems="center"
      style={{ height : props.height }}>
      <Grid item style={{ width : '100%' }}>
        <Tools />
      </Grid>
      <Grid item style={{ width: '100%', maxHeight : h, overflow : 'auto' }}>
        <EVSEsPanel height={ h }/>
      </Grid>
    </Grid>
  )
}

export default DashBoard;
