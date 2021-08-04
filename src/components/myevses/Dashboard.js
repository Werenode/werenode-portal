import * as React from 'react';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/styles';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Container from '@material-ui/core/Container';

import { Typography } from '@material-ui/core';
import { getEVSEs } from './constate/evses';

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
    borderWidth : '1px',
    borderStyle : 'solid',
  }
});

const EVSE = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.evse}>
      <Typography>{props.id}</Typography>
    </Paper>
  )
}

const EVSEsPanel = (props) => {
  const { evses } = getEVSEs();
  return (
    <Container maxWidth="lg" style={{ marginBottom : '40px' }}>
    <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={4}>
      { evses.data.map(evse => {
        return (
          <Grid item key={evse.id}>
            <EVSE id={evse.id} />
          </Grid>)
      }) }
    </Grid>
    </Container>
  )
}

const actions = ['Add EVSE(s)', 'Select', 'Sort by Revenue', 'Sort by Nb Charging Sessions'];

const ActionButtons = (props) => {
  const anchorRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    console.info(`You clicked ${actions[props.selectedIndex]}`);
  };
  const handleMenuItemClick = (event, index) => {
    props.setSelectedIndex(index);
    setOpen(false);
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
        <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
          <Button onClick={handleClick}>{actions[props.selectedIndex]}</Button>
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

const Tools = (props) => {
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
  return (
    <Grid container
      direction="column-reverse"
      justifyContent="flex-start"
      alignItems="center"
      style={{ height : props.height }}>
      <Grid item style={{ width : '100%' }}>
        <Tools />
      </Grid>
      <Grid item style={{ width: '100%', maxHeight : props.height - 64, overflow : 'scroll' }}>
        <EVSEsPanel />
      </Grid>
    </Grid>
  )
}

export default DashBoard;