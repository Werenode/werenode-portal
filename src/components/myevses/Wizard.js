import * as React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { Paper, Box } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import HelpIcon from '@material-ui/icons/Help';

import StyledTextField from './styled/StyledTextField';

import { getEVSEs } from './constate/evses';
import { getPanels } from './constate/panels';
import { getWizard } from './constate/wizard';
import { useAccountPkh } from './constate/dapp';

import Tooltip, { tooltipClasses } from '@material-ui/core/Tooltip';
import { styled } from "@material-ui/core/styles";
import useBaseUrl from '@docusaurus/useBaseUrl';

import MenuItem from '@material-ui/core/MenuItem';
import StyledSelect from './styled/StyledSelect';
import InputLabel from '@material-ui/core/InputLabel';
import StyledFormControl from './styled/StyledFormControl';

const useStyles = makeStyles({
  paper: {
   /*  position : 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '1200px',
    width : '70%', */
    transform: 'translate(0%, -20%)',
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
});

const inputData = {
  owner : { label : 'Owner', hash :'owner', desc : 'Address of the Tezos account that owns the EVSE(s).' },
  id :    { label : 'Identifier', hash : 'identifier', desc : 'Identifier of the EVSE(s).' },
  nb :    { label : 'Number of EVSE(s)', hash : 'nb-evses', desc : 'Number of EVSEs to declare.' },
  evseserver : { label : 'EVSE Server', hash : 'evse-server', desc : 'EVSE Manager Server.',
    items : [ { value : 'werenode', label : 'Werenode Server' } ]
  }
}

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} placement="right-start"/>
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#000'
  },
}));

const WithHelp = (props) => {
  const url = window.location.protocol + '//' + window.location.host + useBaseUrl("docs/myevsesmanual" + '#' + inputData[props.id].hash);
  const handleClick = () => {
    window.open(url, 'My EVSEs User Manual');
  }
  return (
    <Grid container direction="row" justifyContent="flex-start" alignContent="center" style={{ width: '100%' }}>
      <Grid item children={props.element} style={{ width: 'calc(100% - 32px)' }}/>
      <Grid item style={{ marginLeft : '12px' }}>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography variant="caption">{inputData[props.id].desc}</Typography>
              <Button size='small' variant="text" style={{ fontSize : '10px' }} onClick={handleClick}>Learn more...</Button>
            </React.Fragment>
          }
        >
          <HelpIcon fontSize="small"></HelpIcon>
        </HtmlTooltip>
      </Grid>
    </Grid>
  )
}

const EvseTextField = (props) => {
  const { data, setData } = getWizard();
  function handleChange(e) {
    setData(d => { d[props.id] = e.target.value; return { ...d, edition : true } })
  };
  return (
    <WithHelp id={props.id} element={
      <StyledTextField
        id={ "evses" + props.id }
        label={inputData[props.id].label}
        color="primary"
        variant="outlined"
        value={data[props.id]}
        onChange={props.handleChange !== undefined ? props.handleChange : handleChange}
        type={props.type}
        fullWidth
      />} />
  )
}

const EvseSelect = (props) => {
  const { data, setData } = getWizard();
  function handleChange(e) {
    setData(d => { d[props.id] = e.target.value; return { ...d, edition : true } })
  };
  return (
    <WithHelp id={props.id} element={
      <StyledFormControl style={{ width : '100%' }}>
      <InputLabel>{inputData[props.id].label}</InputLabel>
      <StyledSelect
        id={ "evses" + props.id }
        label={inputData[props.id].label}
        value={data[props.id]}
        onChange={handleChange}
      >
        { inputData[props.id].items.map(x => {
          return <MenuItem key={x.value} value={x.value}>{x.label}</MenuItem>
        }) }
      </StyledSelect>
      </StyledFormControl>
    } />
  )
}

const General = (props) => {
  const classes = useStyles();
  const { data, setData, setNb, setId } = getWizard();
  const pkh = useAccountPkh();
  React.useEffect(() => {
    if (!data.edition) {
      setData(d => { return { ...d, owner : pkh } })
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
              alignContent='center' spacing={4}>
          <Grid item xs={12}>
            <EvseTextField id="owner"/>
          </Grid>
          <Grid item xs={6}>
            <EvseTextField id="id" handleChange={e => setId(e.target.value)} />
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

const wizardPanels = [
  { title : 'General Settings', panel : <General /> },
  { title : 'Supervision', panel : <DefaultPanel /> },
  { title : 'Connectors', panel : <DefaultPanel /> },
  { title : 'Other Settings', panel : <DefaultPanel /> },
  { title : 'Edit Settings', panel : <DefaultPanel /> },
  { title : 'Validate', panel : <DefaultPanel /> }
]

const Buttons = (props) => {
  const classes = useStyles();
  const { setPanel } = getPanels();
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
          <Stepper activeStep={props.wizardPanelIdx} >
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
  const { data } = getWizard();
  const { evses, setEvses } = getEVSEs();
  const { setPanel } = getPanels();
  const handleClick = () => {
    if (wizardPanelIdx == wizardPanels.length - 1) {
      const newevses = Array(parseInt(data.nb)).fill(evses.data.length).map((x,i) => {
        return {id : ('EVSE ' +  (x + i + 1)), revenue : 0 };
      } );
      setEvses(e => { return { ...e, data : e.data.concat(newevses) }; });
      setPanel(0);
    } else {
      setWizardPanel(wp => wp + 1);
    }
  }
  return (
    <Grid container direction="row" justifyContent='center' alignContent='center' style={{ height : props.height }}>
      <Grid item>
    <Paper elevation={3} className={ classes.paper }>
      <Grid container direction="column" justifyContent='flex-start' alignContent='flex-start' >
        <Grid item className={ classes.header }>
          <Typography variant="h5" component="div" className={ classes.title }>
            { wizardPanels[wizardPanelIdx].title }
          </Typography>
        </Grid>
        <Grid item>
          { wizardPanels[wizardPanelIdx].panel }
        </Grid>
        <Buttons handleClick={handleClick} wizardPanelIdx={wizardPanelIdx} setWizardPanel={setWizardPanel}/>
      </Grid>
    </Paper>
      </Grid>
    </Grid>
  )
}

export default Wizard;