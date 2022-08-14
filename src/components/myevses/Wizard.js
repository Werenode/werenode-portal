import * as React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { Paper, Card, CardContent, CardActions } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import { getEVSEs } from './constate/evses';
import { getPanels } from './constate/panels';
import { getWizard, isValidAddress } from './constate/wizard';
import {useAccountPkh, useTezos} from './constate/dapp';
import { getSelect } from './constate/select';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { EvseTextField, EvseSelect } from './EvseInputs';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import { isOCPP, toObj } from './inputData.js';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PowerIcon from '@material-ui/icons/Power';
import SettingsInputSvideoIcon from '@material-ui/icons/SettingsInputSvideo';
import LabelIcon from '@material-ui/icons/Label';

import BoltIcon from '@material-ui/icons/Bolt';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getSettings } from './constate/settings';
import Gps from "./Gps";
import {Evse, EVSE_LINK, EVSE_MANAGER_ADDRESS} from "../../utils/evse-smart-contract";
import {TicketPDFGenerator} from "./TicketPDFGenerator";

function useWidth() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}

function isWidthDown(breakp, width) {
  switch (breakp) {
    case 'xs' : return (width === 'xs');
    case 'sm' : return (width === 'xs' || width === 'sm');
    default : return true
  }
}

const useStyles = makeStyles({
  paper: {
   /*  position : 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '1200px',
    width : '70%', */
    //transform: 'translate(0%, -20%)',
    border : '1px solid #34383e',
    //height : 600,
    bgcolor: 'background.paper',
    boxShadow : 10,
    marginLeft : '12px',
    marginRight : '12px',
  },
  header: {
    borderBottom : '1px solid #34383e',
    width : '100%'
  },
  buttons: {
    borderTop : '1px solid #34383e',
    padding : '24px',
  },
  title: {
    padding : '24px',
  },
  panel: {
    padding : '24px',
  },
  connectorformpanel: {
    paddingTop : '32px',
    paddingRight : '24px',
    paddingLeft : '24px',
  },
  connector: {
    border : '1px solid #34383e',
  },
  freeusers : {
    border : '1px solid #34383e',
    borderRadius : '4px',
    padding : '24px',
    position : 'relative'
  },
  settings : {
    paddingTop : '24px',
    paddingLeft : '24px',
  }
});

const FreeUsers = (props) => {
  const classes = useStyles();
  const pkh = useAccountPkh();
  const { setOpenAddAddress, setAddFreeUsers, setData} = getWizard();
  const theme = useTheme();
  React.useEffect(() => {
    if (!props.freeusers.includes(pkh)) {
      const newFreeUsers = props.freeusers.push(pkh);
      setData(d => { return { ...d, freeusers : newFreeUsers } });
    }
  }, []);
  const handleDelete = v => () => {
    props.rmFreeUser(v);
  }
  const handleClick = () => {
    setAddFreeUsers(props.addFreeUser);
    setOpenAddAddress(true);
  }
  let chips = props.freeusers.map(x => {
    return <Grid key={x} item><Chip variant="outlined" onDelete={handleDelete(x)} label={x} /></Grid>
  });
  chips = chips.concat([
    <Grid key={'add'} item><Button onClick={handleClick}>add address</Button></Grid>
  ]);
  return (
    <Grid container direction="row" justifyContent="flex-start" alignContent="center" className={ classes.freeusers }>
        <Typography variant='subtitle2' style={{
          position : 'absolute',
          top : '-11px',
          backgroundColor : theme.palette.background.paper,
          paddingLeft : '8px',
          paddingRight : '8px' }}>Free access address(es)</Typography>
      <Grid item container direction='row' justifyContent='flex-start' alignContent='center' spacing={2}>
      {
        chips
      }
      </Grid>
    </Grid>
  )
}

const OtherSettings = () => {
  const classes = useStyles();
  const { data, setData } = getWizard();
  const addFreeUser = (a) => { setData(d => {
    return { ...d, edition : true, freeusers : d.freeusers.filter(x => x !== a).concat([a]) }
  }) };
  const rmFreeUser = (a) => { setData(d => {
    return { ...d, edition : true, freeusers : d.freeusers.filter(x => x !== a) }
  }) };
  return (
    <Grid container direction="column" >
      <Grid item className={ classes.panel }>
        <FreeUsers freeusers={data.freeusers} addFreeUser={addFreeUser} rmFreeUser={rmFreeUser} />
      </Grid>
    </Grid>
  )
}

export const Connector = (props) => {
  const classes = useStyles();
  const getMode = m => toObj('connectormode')[m];
  const getPower = m => toObj('power')[m];
  const getType = m => toObj('connectortype')[m];
  const getPrice = m => {
    const currency = toObj('currency')[m.currency];
    return (m.price + ' ' + currency);
  };
  const handleDelete = () => props.rmConnector(props.data.index);
  const handleEdit = () => props.editConnector(props.data.index);
  return (
    <Grid item key={props.identifier} xs={12}>
     <Card key={props.identifier} className={ classes.connector }>
      <CardContent>
        <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
          { isOCPP(props.supervisiontype) ?
            <Grid item><Chip variant="outlined" icon={<LabelIcon />} label={props.data.index} /></Grid>
            : null
          }
          <Grid item><Chip variant="outlined" icon={<PowerIcon />} label={getMode(props.data.mode)} /></Grid>
          <Grid item><Chip variant="outlined" icon={<BoltIcon />} label={getPower(props.data.power)} /></Grid>
          <Grid item><Chip variant="outlined" icon={<SettingsInputSvideoIcon />} label={getType(props.data.type)} /></Grid>
          <Grid item><Chip variant="outlined" icon={<LocalOfferIcon />} label={getPrice(props.data)} /></Grid>
        </Grid>
      </CardContent>
       {props.hideButtons ? null :
           <CardActions>
             <IconButton onClick={handleEdit}>
               <EditIcon fontSize="small" />
             </IconButton>
             <IconButton onClick={handleDelete}>
               <DeleteIcon fontSize="small" />
             </IconButton>
           </CardActions>
       }
     </Card>
    </Grid>
  )
}

const Connectors = () => {
  const classes = useStyles();
  const { data, setOpen, rmConnector, editConnector, setData, setAddConnector, setIsInvalidIndex } = getWizard();
  const addConnector = () => { setData(d => {
    const c = {
      index    : parseInt(d.index),
      mode     : d.connectormode,
      power    : d.power,
      type     : d.connectortype,
      price    : d.price,
      currency : d.currency
    };
    if (d.connectoredit === -1) {
      return { ...d, edition : true, connectors : d.connectors.concat([c]) };
    } else {
      return { ...d, edition : true, connectoredit : -1, connectors : d.connectors.map(x => {
        if (x.index === d.connectoredit) {
          return c;
        } else return x
      })}
    }
  })};
  const isInvalidIndex = (v) => (data.connectors.map(x => x.index).indexOf(parseInt(v)) !== -1);
  const handleClick = () => { setOpen(true); setAddConnector(addConnector); setIsInvalidIndex(isInvalidIndex) };
  const theme = useTheme();
  return (
    <Grid container
      direction="row"
      justifyContent="flex-start"
      alignContent="center"
      className={ classes.panel }
      spacing={4}
    >
      {
        data.connectors.length > 0 ?
        data.connectors.map((x,i) =>
          <Connector
            key={"connector" + i}
            identifier={i}
            rmConnector={rmConnector}
            editConnector={editConnector}
            supervisiontype={data.supervision.type}
            data={data.connectors[i]}
            hideButtons={false}
          />
        ) :
        <Grid item style={{ height : '150px' }} container direction="row" justifyContent="center" alignContent="center">
          <Typography variant="subtitle1" style={{ color : data.showerrors? theme.palette.error.main : '#34383e' }}>No Connector. Click 'ADD CONNECTOR'.</Typography>
        </Grid>
      }
      <Grid xs={12} item container direction="row" justifyContent="flex-end" alignContent="center">
        <Grid item>
          <Button onClick={handleClick}>add connector</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

const RPCGETSupervisionSettings = (props) => {
  const { settings, setSettings } = getSettings();
  const setOn = (e) => {
    setSettings(s => s.map((x,i) => {
      if (i === props.index) {
        return { ...x, supervision : { ...x.supervision, switchon : e.target.value }}
      } else return x;
    }))
  };
  const setOff = (e) => {
    setSettings(s => s.map((x,i) => {
      if (i === props.index) {
        return { ...x, supervision : { ...x.supervision, switchoff : e.target.value }}
      } else return x;
    }))
  };
  return (
    <Grid container direction='row' justifyContent='flex-start' alignContent='center'>
      <Grid item md={12} sm={12} xs={12}>
        <EvseTextField identifier="switchon" extraid={props.index}
          getValue={settings[props.index].supervision.switchon}
          handleChange={setOn}
          errorText="Invalid Url"/>
      </Grid>
      <Grid item md={12} sm={12} xs={12}>
        <EvseTextField identifier="switchoff" extraid={props.index}
          getValue={settings[props.index].supervision.switchoff}
          handleChange={setOff}
          errorText="Invalid Url"/>
      </Grid>
    </Grid>
  )
}

const RPCGETSupervision = () => {
  const { data, setSwitchOn, setSwitchOff } = getWizard();
  return (
    <Grid container direction='row' justifyContent='flex-start' alignContent='center'>
      <Grid item md={12} sm={12} xs={12}>
        <EvseTextField identifier="switchon"
          getValue={data.supervision.switchon}
          handleChange={e => setSwitchOn(e.target.value)}
          errorText="Invalid Url"/>
      </Grid>
      <Grid item md={12} sm={12} xs={12}>
        <EvseTextField identifier="switchoff"
          getValue={data.supervision.switchoff}
          handleChange={e => setSwitchOff(e.target.value)}
          errorText="Invalid Url"/>
      </Grid>
    </Grid>
  )
}

const Supervision = () => {
  const classes = useStyles();
  const { data, setSupervision } = getWizard();
  const handleSupervision = e => {
    setSupervision(e.target.value);
  }
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignContent="center"
      className={ classes.panel } >
      <Grid item sm={12} md={6} xs={12}>
        <Grid container direction="row"
              justifyContent='flex-start'
              alignContent='center'>
          <Grid item  md={12} sm={12} xs={12}>
            <EvseSelect identifier="supervision" handleChange={handleSupervision} getValue={data.supervision.type}/>
          </Grid>
          {
            data.supervision.type === 'werenoderpcget' ? <RPCGETSupervision /> : null
          }
        </Grid>
      </Grid>
    </Grid>
  )
}

const General = () => {
  const classes = useStyles();
  const { data, setData, setNb, setId } = getWizard();
  const pkh = useAccountPkh();
  React.useEffect(() => {
    if (!data.edition) {
      setData(d => { return { ...d, owner : pkh, freeusers : d.freeusers.concat([ pkh ]) } })
    }
  }, []);
  return (
    <Grid
      container
      direction="row"
      justifyContent='flex-start'
      alignContent='center'
      className={ classes.panel }>
      <Grid item sm={12} md={6} xs={12}>
        <Grid container direction="row"
              justifyContent='flex-start'
              alignContent='center'>
          <Grid item xs={12}>
            <EvseTextField
              identifier="owner"
              isError={() => !isValidAddress(data.owner)}
              errorText="Invalid address format" />
          </Grid>
          <Grid item xs={6}>
            <EvseTextField
              identifier="id"
              handleChange={e => setId(e.target.value)}
              errorText="Empty identifier"/>
          </Grid>
          <Grid item  xs={6}>
            <EvseTextField identifier="nb" type="number" handleChange={e => setNb(e.target.value)}/>
          </Grid>
          <Grid item  xs={12}>
            <EvseSelect identifier="evseserver" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

const EVSESettings = (props) => {
  const classes = useStyles();
  const [ expanded, setExpanded ] = React.useState(false);
  const { settings, setSettings, setSetting } = getSettings();
  const { setOpen, setData, setAddConnector, setIsInvalidIndex } = getWizard();
  const { evses } = getEVSEs();

  const isIndexError = (v) => {
    return evses.data.map(x => x.id).indexOf(v) !== -1;
  }
  const handleSupervision = (e) => {
    setSettings(s => s.map((x,i) => {
      if (i === props.index) {
        if (e.target.value === 'werenoderpcget') {
          return { ...x, supervision : { type : e.target.value, switchon : "", switchoff : ""  } }
        } else return { ...x, supervision : { ...x.supervision, type : e.target.value } }
      } else {
        return x;
      }
    }));
  };
  const handleExpansion = () => {
    setExpanded(e => !e);
  };
  const rmConnector = (i) => () => {
    setSettings(s => s.map((x,idx) => {
      if (idx === props.index) {
        return { ...x, connectors : x.connectors.filter((_,j) => j !== i) }
      } else return x;
    }))
  };
  const addConnector = (d) => {
    setSettings(s => s.map((x,idx) => {
      if (idx === props.index) {
        const c = {
          index    : parseInt(d.index),
          mode     : d.connectormode,
          power    : d.power,
          type     : d.connectortype,
          price    : d.price,
          currency : d.currency
        };
        if (d.connectoredit === -1) {
          return { ...x, connectors : x.connectors.concat([c]) }
        } else {
          return { ...x, connectors : x.connectors.map(x => {
            if (x.index === d.connectoredit) {
              return c;
            } else return x
          })}
        }
      } else return x;
    }));
    setData(d => ({ ...d, connectoredit : -1 }));
  };
  const editConnector = (i) => () => {
    setAddConnector(addConnector);
    const c = settings[props.index].connectors.find(x => x.index === i);
    setData(d => ({ ...d,
      edition  : true,
      open     : true,
      connectoredit : c.index,
      index    : parseInt(c.index),
      connectormode : c.mode,
      power    : c.power,
      connectortype : c.type,
      price    : c.price,
      currency : c.currency }));
  };
  const isInvalidIndex = (v) => (settings[props.index].connectors.map(x => x.index).indexOf(parseInt(v)) !== -1);
  const handleAddConnector = () => { setOpen(true); setAddConnector(addConnector); setIsInvalidIndex(isInvalidIndex) };
  const addFreeUser = (a) => { setSettings(s => s.map((x,idx) => {
    if (idx === props.index) {
      return { ...x, freeusers : x.freeusers.filter(x => x !== a).concat([a]) }
    } else return x
  }))};
  const rmFreeUser = (a) => { setSettings(s => s.map((x,idx) => {
    if (idx === props.index) {
      return { ...x, freeusers : x.freeusers.filter(x => x !== a) }
    } else return x
  }))};
  return (
    <Grid container direction='row' justifyContent='flex-start' alignContent='center' className={ classes.settings }>
      <Grid item md={4} sm={12} xs={12}>
        <EvseTextField
          identifier="id"
          extraid={props.index}
          getValue={settings[props.index].id}
          handleChange={e => setSetting(props.index)("id")(e.target.value)}
          isError={isIndexError}
          errorText="Identifier already taken"
        />
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        {/* <EvseTextField
          identifier="gps"
          extraid={props.index}
          getValue={settings[props.index].gps}
          handleChange={e => setSetting(props.index)("gps")(e.target.value)}
          isError={v => v == ""}
          errorText="Invalid GPS value"
        />*/}
        <Gps
            identifier="gps"
            extraid={props.index}
            isError={v => v === ""}
            errorText="Invalid GPS value"
        />
      </Grid>
      <Grid item xs={12} style={{ marginBottom : '1px' }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            onClick={handleExpansion}
            aria-controls={"panel1a-content-"+props.index}
            id={"panel1a-header-"+props.index}>
            <Grid container direction='row' justifyContent='flex-start' alignContent='center' spacing={2}>
              <Typography variant='subtitle2' style={{ color : '#34383e' }}>{"Click to " + (expanded ? "collapse": "expand") + " settings"}</Typography>
            </Grid>
          </AccordionSummary>
            <AccordionDetails style={{ padding : 0 }}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignContent="center" >
                <Grid item sm={12} md={6} xs={12}>
                  <Grid container direction="row"
                        justifyContent='flex-start'
                        alignContent='center'>
                    <Grid item  md={12} sm={12} xs={12}>
                      <EvseSelect identifier="supervision" extraid={props.index}
                        handleChange={handleSupervision} getValue={settings[props.index].supervision.type}/>
                    </Grid>
                    {
                      settings[props.index].supervision.type === 'werenoderpcget' ?
                        <RPCGETSupervisionSettings index={props.index}/> : null
                    }
                  </Grid>
                </Grid>
                <Grid item xs={12} container style={{ paddingRight : "32px", marginBottom : "12px" }} spacing={2}>
                  { settings[props.index].connectors.map((x,i) =>
                    <Connector
                      key={"connector" + props.index + i}
                      identifier={i}
                      rmConnector={rmConnector(i)}
                      editConnector={editConnector(x.index)}
                      supervisiontype={settings[props.index].supervision.type}
                      data={x} />
                    ) }
                </Grid>
                <Grid item xs={12} container justifyContent="flex-end" style={{ paddingRight : "32px", marginBottom : "12px" }}>
                  <Button onClick={ handleAddConnector }>add connector</Button>
                </Grid>
                <Grid item xs={12} style={{ paddingRight : "32px", marginBottom : "32px" }}>
                   <FreeUsers freeusers={settings[props.index].freeusers} addFreeUser={addFreeUser} rmFreeUser={rmFreeUser} />
                </Grid>
              </Grid>
            </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  )
}

const EditSettings = () => {
  const { settings } = getSettings();
  return (
    <Grid container direction='row'>
      {
        settings.map((x,i) => {
          return (
            <Grid key={"evse"+i} xs={12} item style={{ borderBottom : '1px solid #34383e' }}>
              <EVSESettings index={i} />
            </Grid>
          )
        })
      }
    </Grid>)
}

const Validate = () => {
  const {evses} = getEVSEs();
  const {settings} = getSettings();
  const byteSize = () => {
    return new Blob([JSON.stringify(evses.data)]).size;
  }
  return (
    <Grid container direction="column">
      <Grid item textAlign='left' margin='20px 20px'>
        <Typography>Data size : {byteSize()} bytes</Typography>
      </Grid>
      <Grid item xs={12}>
        <TicketPDFGenerator evseName={settings[0].id} evseLink={EVSE_LINK}/>
      </Grid>
      {/*
      //Already visible on temple wallet
      <Grid item xs={12}>
        <Typography>Cost estimation : 0 XTZ</Typography>
      </Grid>*/}
    </Grid>
  )
}

const wizardPanels = [
  { title : 'General Settings', panel : <General /> },
  { title : 'Supervision', panel : <Supervision /> },
  { title : 'Connectors', panel : <Connectors /> },
  { title : 'Other Settings', panel : <OtherSettings /> },
  { title : 'Edit Settings', panel : <EditSettings /> },
  { title : 'Validate', panel : <Validate /> }
]

const getWizardPanels = (edit) => {
  if (edit) {
    return [
      { title : 'Edit Settings', panel : <EditSettings /> },
      { title : 'Validate', panel : <Validate /> }
    ]
  } else {
    return wizardPanels;
  }
}

const Buttons = (props) => {
  const classes = useStyles();
  const { setPanel } = getPanels();
  const { data } = getWizard();
  const width = useWidth();
  const handleCancel = () => {
    setPanel(0);
  }
  const handlePrevious = () => {
    props.setWizardPanel(props.wizardPanelIdx - 1);
  }
  return (
    <Grid item>
      <Grid container direction="row" justifyContent='flex-end' alignContent="end" className={ classes.buttons } >
        <Grid item xs={12} style={{ marginBottom: '18px' }}>
          <Stepper activeStep={props.wizardPanelIdx} orientation={ isWidthDown('sm', width) ? 'vertical' : 'horizontal' }>
            {getWizardPanels(data.edit).map((panel) => (
              <Step key={panel.title}>
              <StepLabel>{panel.title}</StepLabel>
              </Step>
          ))}
          </Stepper>
        </Grid>
        <Grid item style={{ marginRight : '18px' }}>
          <Button size="small" disableElevation variant="text" onClick={handleCancel}>Cancel</Button>
        </Grid>
        <Grid item style={{ marginRight : '18px' }}>
          <Button
            size="small"
            disableElevation
            disabled={props.wizardPanelIdx === 0}
            variant="text"
            onClick={handlePrevious}
          >Previous</Button>
        </Grid>
        <Grid item >
          <Button size="small" disableElevation variant="contained" onClick={props.handleClick}>{
            props.wizardPanelIdx === wizardPanels.length - 1 ? "ok" : "next"
          }</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

const Wizard = (props) => {
  const classes = useStyles();
  const [ wizardPanelIdx, setWizardPanel ] = React.useState(0);
  const { data, setShowErrors, setEdit, setData, setShowMessageBox } = getWizard();
  const { createSettings } = getSettings();
  const { setEvses, addEvse, updateEvse } = getEVSEs();
  const { settings } = getSettings();
  const { setPanel } = getPanels();
  const { setSelect, setSelected } = getSelect();
  const tezos = useTezos();
  const pkh = useAccountPkh();

  React.useEffect(() => {
    if(!data.edit) return;
    setData(d => { return { ...d, owner : pkh, id: settings[0].id} });
  }, []);
  const isInvalid = () => {
    if (wizardPanelIdx === wizardPanels.length - 6) {
      return (data.id === "" || !isValidAddress(data.owner));
    } else if (wizardPanelIdx === wizardPanels.length - 5) {
      if (data.supervision.type === 'werenoderpcget') {
        return (
          data.supervision.switchon === undefined ||
          data.supervision.switchoff === undefined
        )
      } else return false;
    } else if (wizardPanelIdx === wizardPanels.length - 4) {
      return (data.connectors.length === 0);
    } else if (wizardPanelIdx === wizardPanels.length - 2) {
      return settings.reduce((test,x) => (test || x.gps === ""), false);
    } else return false;
  }
  const handleClick = () => {
    if (wizardPanelIdx === getWizardPanels(data.edit).length - 1) {
      if(data.edit){
        console.log('updating');
        const updateEvseOnBlockChain = async () => {
          try{
            setShowMessageBox(true);
            await updateEvse(tezos, new Evse(
                settings[0].id, EVSE_MANAGER_ADDRESS,
                pkh, 0, {
                  supervision: settings[0].supervision,
                  connectors: settings[0].connectors,
                  gps: settings[0].gps,
                }));
            setEvses(e => ({...e, shouldLoadData: true}));
            setShowMessageBox(false);
          }catch (e){
            alert(`An error occurs while updating ${e.message}`);
            setShowMessageBox(false);
            setEvses(e => ({...e, shouldLoadData: true, message: ''}));
          }
        }
        updateEvseOnBlockChain();
      }
      else{
        console.log(`Adding`);
        const addEvseOnBlockChain = async () => {
          try{
            setShowMessageBox(true);
            await addEvse(tezos, new Evse(settings[0].id, EVSE_MANAGER_ADDRESS,
                pkh, 0, {
                  supervision: settings[0].supervision,
                  connectors: settings[0].connectors,
                  location: settings[0].gps,
                }));
            setEvses(e => ({...e, shouldLoadData: true}));
            setShowMessageBox(false);
          }catch (e){
            alert(`An error occurs while adding ${e.message}`);
            setShowMessageBox(false);
            setEvses(e => ({...e, shouldLoadData: true, message: ''}));
          }
        }
        addEvseOnBlockChain();
      }
      setPanel(0);
      setEdit(false);
      setSelected(null);
      setSelect(false);
      /*
      //This request doesn't work
        fetch("https://us-central1-werenode-37b0a.cloudfunctions.net/addPlug", {
          'method': 'POST',
          'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          'body': JSON.stringify({services: services, types: types, id: newevses[0].id.split(" ")[0], lat: parseFloat(newevses[0].setting.gps.split(",")[0]), long: parseFloat(newevses[0].setting.gps.split(",")[1])})
        });*/
    } else if (isInvalid()) {
      setShowErrors(true);
    } else {
      if (wizardPanelIdx === getWizardPanels(data.edit).length - 3) {
        createSettings(data);
      }
      setShowErrors(false);
      setWizardPanel(wp => wp + 1);
    }
  };
  return (
    <Grid container direction="row" justifyContent='center' alignContent='center' style={{ height : props.height }}>
      <Grid item lg={9} md={12}>
        <Paper elevation={3} className={ classes.paper }>
          <Grid container direction="column" justifyContent='flex-start' alignContent='flex-start' >
            <Grid item className={ classes.header }>
              <Typography variant="h5" component="div" className={ classes.title }>
                { getWizardPanels(data.edit)[wizardPanelIdx].title }
              </Typography>
            </Grid>
            <Grid item style={{ maxHeight : props.height - 200, overflow: 'auto' }}>
              { getWizardPanels(data.edit)[wizardPanelIdx].panel }
            </Grid>
            <Buttons
              handleClick={handleClick}
              wizardPanelIdx={wizardPanelIdx}
              setWizardPanel={setWizardPanel}/>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Wizard;
