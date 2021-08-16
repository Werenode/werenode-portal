import * as React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import StyledSelect from './styled/StyledSelect';
import InputLabel from '@material-ui/core/InputLabel';
import StyledFormControl from './styled/StyledFormControl';
import { getWizard } from './constate/wizard';
import HelpIcon from '@material-ui/icons/Help';
import StyledTextField from './styled/StyledTextField';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tooltip, { tooltipClasses } from '@material-ui/core/Tooltip';
import { styled } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { inputdata } from './inputData.js';

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} placement="right-start"/>
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#000'
  },
}));

export const WithHelp = (props) => {
  const url = window.location.protocol + '//' + window.location.host + useBaseUrl("docs/myevsesmanual" + '#' + inputdata[props.id].hash);
  const handleClick = () => {
    window.open(url, 'My EVSEs User Manual');
  }
  const margin = props.error ? '10px' : '32px';
  return (
    <Grid container direction="row" justifyContent="flex-start" alignContent="center" style={{ width: '100%', marginBottom : margin }}>
      <Grid item children={props.element} style={{ width: 'calc(100% - 64px)' }}/>
      <Grid item style={{ marginLeft : '12px', marginRight : '32px' }}>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography variant="caption">{inputdata[props.id].desc}</Typography>
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

export const EvseSelect = (props) => {
  const { data, setData } = getWizard();
  function handleChange(e) {
    setData(d => { d[props.id] = e.target.value; return { ...d, edition : true } })
  };
  return (
    <WithHelp id={props.id} element={
      <StyledFormControl style={{ width : '100%' }}>
      <InputLabel >{inputdata[props.id].label}</InputLabel>
      <StyledSelect
        id={ "evses" + props.id }
        label={inputdata[props.id].label}
        value={props.getValue !== undefined ? props.getValue(data) : data[props.id]}
        onChange={props.handleChange !== undefined ? props.handleChange : handleChange}
      >
        { inputdata[props.id].items.map(x => {
          return <MenuItem key={x.value} value={x.value}>{x.label}</MenuItem>
        }) }
      </StyledSelect>
      </StyledFormControl>
    } />
  )
}

export const EvseTextField = (props) => {
  const { data, setData } = getWizard();
  function handleChange(e) {
    setData(d => { d[props.id] = e.target.value; return { ...d, edition : true } })
  };
  const isInvalid = () => {
    var val = undefined;
    if (props.getValue !== undefined) {
      val = props.getValue(data)
    } else {
      val = data[props.id]
    };
    var invalid = false;
    if (props.isError !== undefined) {
      if (props.isError(val)) {
        invalid = true;
      }
    }
    return val == undefined || val == "" || invalid;
  }
  const isError = data.showerrors ? isInvalid() : false;
  return (
    <WithHelp id={props.id} error={isError} element={
      <StyledTextField
        id={ "evses" + props.id }
        label={inputdata[props.id].label}
        color="primary"
        variant="outlined"
        value={props.getValue !== undefined ? props.getValue(data) : data[props.id]}
        onChange={props.handleChange !== undefined ? props.handleChange : handleChange}
        type={props.type}
        fullWidth
        error={ isError }
        helperText={ isError ? props.errorText : "" }
      />}
    />
  )
}