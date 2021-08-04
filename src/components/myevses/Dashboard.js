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
import { CardActionArea, CardContent } from '@material-ui/core';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Container from '@material-ui/core/Container';

import { Typography } from '@material-ui/core';
import { getEVSEs } from './constate/evses';
import { getPanels, getEVSEPanelIdx } from './constate/panels';

import { getSelect } from './constate/select';

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
  }
});

const getEvseIdx = (evses, id) => {
  return evses.map(x => x.id).indexOf(id);
}

const EVSE = (props) => {
  const { setPanel } = getPanels();
  const { select, selected, setSelected } = getSelect();
  const { evses } = getEVSEs();
  const classes = useStyles();
  const evseidx = getEVSEPanelIdx(getEvseIdx(evses.data,props.id));

  const handleClick = () => {
    if (select) {
      if (selected.includes(props.id)) {
        setSelected(s => s.filter(x => x != props.id));
      } else {
        setSelected(s => s.concat([props.id]));
      }
    } else {
      setPanel(evseidx)
    }
  };
  const isSelected = () => {
    return select && selected.includes(props.id);
  }
  return (
    <Card className={ isSelected() ? classes.selected : classes.evse}>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Typography>{props.id}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
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

const actions = ['Add', 'Edit', 'Remove', 'Sort'];

const ActionButtons = (props) => {
  const anchorRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const { setSelect, setSelected } = getSelect();
  const { evses, setEvses } = getEVSEs();
  const handleClick = (e) => {
    console.info(`You clicked ${actions[props.selectedIndex]}`);
    if(props.selectedIndex == 3) {
      setEvses(evses => {
        const sorted = evses.data.concat().sort((x,y) => parseFloat(y.revenue) - parseFloat(x.revenue));
        console.log(sorted);
        return { ...evses, data : sorted };
      })
    };
  };
  const handleMenuItemClick = (event, index) => {
    props.setSelectedIndex(index);
    setOpen(false);
    if (index == 1 || index == 2) {
      setSelect(true);
    } else {
      setSelected([]);
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
}

const Tools = (props) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const { select } = getSelect();
  return (
    <div className={ classes.tools }>
      <Grid container direction="row" justifyContent="flex-end" alignItems="center" style={{ height:'100%' }}>
        { select ? <SelectAll /> : null }
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
      <Grid item style={{ width: '100%', maxHeight : props.height - 64, overflow : 'auto' }}>
        <EVSEsPanel />
      </Grid>
    </Grid>
  )
}

export default DashBoard;