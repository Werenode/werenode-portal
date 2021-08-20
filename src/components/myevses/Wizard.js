import * as React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { Paper, Box, Card, CardContent, CardActions } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import { getEVSEs } from './constate/evses';
import { getPanels } from './constate/panels';
import { getWizard, isValidAddress } from './constate/wizard';
import { useAccountPkh } from './constate/dapp';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { WithHelp, EvseTextField, EvseSelect } from './EvseInputs';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import { inputdata, isOCPP } from './inputData.js';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PowerIcon from '@material-ui/icons/Power';
import SettingsInputSvideoIcon from '@material-ui/icons/SettingsInputSvideo';
import LabelIcon from '@material-ui/icons/Label';

import EvStationIcon from '@material-ui/icons/EvStation';
import BoltIcon from '@material-ui/icons/Bolt';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    case 'xs' : return (width == 'xs');
    case 'sm' : return (width == 'xs' || width == 'sm');
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
  const { data, addFreeUser, rmFreeUser, setOpenAddAddress } = getWizard();
  const theme = useTheme();
  const handleDelete = v => () => {
    rmFreeUser(v);
  }
  const handleClick = () => {
    setOpenAddAddress(true);
  }
  let chips = data.freeusers.map(x => {
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

const OtherSettings = (props) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" >
      <Grid item className={ classes.panel }><FreeUsers /></Grid>
    </Grid>
  )
}

const toObj = v => {
  var obj = {};
  for (let i = 0; i < inputdata[v].items.length; i++) {
    obj[inputdata[v].items[i].value] = inputdata[v].items[i].label;
  }
  return obj;
}

const Connector = (props) => {
  const classes = useStyles();
  const { data, rmConnector, editConnector } = getWizard();
  const connector = data.connectors[props.id];
  const getMode = m => toObj('connectormode')[m];
  const getPower = m => toObj('power')[m];
  const getType = m => toObj('connectortype')[m];
  const getPrice = m => {
    const currency = toObj('currency')[m.currency];
    return (m.price + ' ' + currency);
  };
  const handleDelete = () => rmConnector(connector.index);
  const handleEdit = () => editConnector(connector.index);
  return (
    <Grid item key={props.id} xs={12}>
     <Card key={props.id} className={ classes.connector }>
      <CardContent>
        <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
          { isOCPP(data.supervision.type) ?
            <Grid item><Chip variant="outlined" icon={<LabelIcon />} label={connector.index} /></Grid>
            : null
          }
          <Grid item><Chip variant="outlined" icon={<PowerIcon />} label={getMode(connector.mode)} /></Grid>
          <Grid item><Chip variant="outlined" icon={<BoltIcon />} label={getPower(connector.power)} /></Grid>
          <Grid item><Chip variant="outlined" icon={<SettingsInputSvideoIcon />} label={getType(connector.type)} /></Grid>
          <Grid item><Chip variant="outlined" icon={<LocalOfferIcon />} label={getPrice(connector)} /></Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleEdit}>
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </CardActions>
     </Card>
    </Grid>
  )
}

const Connectors = () => {
  const classes = useStyles();
  const { data, setOpen } = getWizard();
  const handleClick = () => { setOpen(true) };
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
        data.connectors.map((x,i) => <Connector id={i} />) :
        <Grid item style={{ height : '150px' }} container direction="row" justifyContent="center" alignContent="center">
          <Typography variant="subtitle1" style={{ color : '#34383e' }}>No Connector. Click 'ADD CONNECTOR'.</Typography>
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

const RPCGETSupervision = () => {
  const { setSwitchOn, setSwitchOff } = getWizard();
  return (
    <Grid container direction='row' justifyContent='flex-start' alignContent='center'>
      <Grid item md={12} sm={12} xs={12}>
        <EvseTextField id="switchon"
          getValue={d => d.supervision.switchon}
          handleChange={e => setSwitchOn(e.target.value)}
          errorText="Invalid Url"/>
      </Grid>
      <Grid item md={12} sm={12} xs={12}>
        <EvseTextField id="switchoff"
          getValue={d => d.supervision.switchoff}
          handleChange={e => setSwitchOff(e.target.value)}
          errorText="Invalid Url"/>
      </Grid>
      {/* <Grid item md={3} sm={6} xs={12}>
        <EvseTextField id="login"
          getValue={d => d.supervision.login}
          handleChange={e => setLogin(e.target.value)}
          errorText="Empty Login"/>
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <EvseTextField id="pwd"
          getValue={d => d.supervision.pwd}
          handleChange={e => setPwd(e.target.value)}
          errorText="Empty Password"/>
      </Grid> */}
    </Grid>
  )
}

const Supervision = (props) => {
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
            <EvseSelect id="supervision" handleChange={handleSupervision} getValue={ d => d.supervision.type }/>
          </Grid>
          {
            data.supervision.type == 'werenoderpcget' ? <RPCGETSupervision /> : null
          }
        </Grid>
      </Grid>
    </Grid>
  )
}

const General = (props) => {
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
              id="owner"
              isError={() => !isValidAddress(data.owner)}
              errorText="Invalid address format" />
          </Grid>
          <Grid item xs={6}>
            <EvseTextField
              id="id"
              handleChange={e => setId(e.target.value)}
              errorText="Empty identifier"/>
          </Grid>
          <Grid item  xs={6}>
            <EvseTextField id="nb" type="number" handleChange={e => setNb(e.target.value)}/>
          </Grid>
          <Grid item  xs={12}>
            <EvseSelect id="evseserver" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

const DefaultPanel = () => {
  return <Box style={{ height : '200px' }} />
}

const EVSESettings = (props) => {
  const classes = useStyles();
  const { data, setData } = getWizard();
  const handleChange = (field) => (e) => {
    setData(d => ({
      ...d, edition : true, evses : d.evses.map((x,i) => {
        if (i == props.index) {
          x[field] = e.target.value;
        }
        return x;
      })
    }))
  };
  const handleSupervision = (e) => {
    console.log("handlesupervision");
    var levses = data.evses;
    levses[props.index]["supervision"]["type"] = e.target.value;
    console.log(levses);
    setData(d => {
      console.log(d);
      const nd = {
      ...d, edition : true, evses : levses/* d.evses.map((x,i) => {
        if (i === props.index) {
          console.log(i);
          x["supervision"]["type"] = e.target.value;
        }
        return x;
        }) */
      };
      console.log(nd);
      return nd;
  })};
  const getSupervision = (idx) => (d) => {
    console.log("getSupervision ", idx, d.evses[idx].supervision.type);
    return d.evses[idx].supervision.type
  }
  return (
    <Grid container direction='row' justifyContent='flex-start' alignContent='center' className={ classes.settings }>
      <Grid item md={4} sm={12} xs={12}>
        <EvseTextField id="id" extraid={props.index} getValue={(d) => d.evses[props.index].id} handleChange={handleChange("id")}/>
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <EvseTextField id="gps" extraid={props.index} getValue={(d) => d.evses[props.index].gps} handleChange={handleChange("gps")}/>
      </Grid>
      <Grid item xs={12} style={{ marginBottom : '1px' }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={"panel1a-content-"+props.index}
            id={"panel1a-header-"+props.index}>
            <Grid container direction='row' justifyContent='flex-start' alignContent='center' spacing={2}>
              <Typography variant='subtitle2' style={{ color : '#34383e' }}>Click to expand settings</Typography>
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
                      <EvseSelect id="supervision" extraid={props.index}
                        handleChange={handleSupervision} getValue={getSupervision(props.index)}/>
                    </Grid>
                    {
                      data.evses[props.index].supervision.type == 'werenoderpcget' ? <RPCGETSupervision /> : null
                    }
                  </Grid>
                </Grid>
              </Grid>
            </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  )
}

const EditSettings = () => {
  const { data } = getWizard();
  return (
    <Grid container direction='row'>
      {
        data.evses.map((x,i) => {
          return (
            <Grid key={"evse"+i} xs={12} item style={{ borderBottom : '1px solid #34383e' }}>
              <EVSESettings index={i} />
            </Grid>
          )
        })
      }
    </Grid>)
}

const wizardPanels = [
  { title : 'General Settings', panel : <General /> },
  { title : 'Supervision', panel : <Supervision /> },
  { title : 'Connectors', panel : <Connectors /> },
  { title : 'Other Settings', panel : <OtherSettings /> },
  { title : 'Edit Settings', panel : <EditSettings /> },
  { title : 'Validate', panel : <DefaultPanel /> }
]

const Buttons = (props) => {
  const classes = useStyles();
  const { setPanel } = getPanels();
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
            {wizardPanels.map((panel) => (
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
            disabled={props.wizardPanelIdx == 0}
            variant="text"
            onClick={handlePrevious}
          >Previous</Button>
        </Grid>
        <Grid item >
          <Button size="small" disableElevation variant="contained" onClick={props.handleClick}>{
            props.wizardPanelIdx == wizardPanels.length - 1 ? "ok" : "next"
          }</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

const Wizard = (props) => {
  const classes = useStyles();
  const [ wizardPanelIdx, setWizardPanel ] = React.useState(0);
  const { data, setShowErrors, createEvses } = getWizard();
  const { evses, setEvses } = getEVSEs();
  const { setPanel } = getPanels();
  const isInvalid = () => {
    if (wizardPanelIdx == 0) {
      return (data.id == "" || !isValidAddress(data.owner));
    } else if (wizardPanelIdx == 1) {
      if (data.supervision.type == 'werenoderpcget') {
        return (
          data.supervision.switchon == undefined ||
          data.supervision.switchoff == undefined
        )
      } else return false;
    } else return false;
  }
  const handleClick = () => {
    if (wizardPanelIdx == wizardPanels.length - 1) {
      const newevses = Array(parseInt(data.nb)).fill(evses.data.length).map((x,i) => {
        return {id : (data.id + ' ' +  (x + i + 1)), revenue : 0 };
      } );
      setEvses(e => { return { ...e, data : e.data.concat(newevses) }; });
      setPanel(0);
    } else if (isInvalid()) {
      setShowErrors(true);
    } else {
      if (wizardPanelIdx == 3) {
        createEvses();
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
                { wizardPanels[wizardPanelIdx].title }
              </Typography>
            </Grid>
            <Grid item style={{ maxHeight : props.height - 200, overflow: 'auto' }}>
              { wizardPanels[wizardPanelIdx].panel }
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