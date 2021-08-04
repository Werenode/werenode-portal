import * as React from 'react';
import { styled, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MuiDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DashboardIcon from '@material-ui/icons/Dashboard';
import PowerIcon from '@material-ui/icons/Power';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FileDownloadIcon from '@material-ui/icons/FileDownload';
import HelpIcon from '@material-ui/icons/Help';
import { Grid } from '@material-ui/core';

import { useAccountPkh } from './constate/dapp';
import DashBoard from './Dashboard';

const drawerWidth = 240;
const courier = "Courier Prime, monospace";

const makeDrawerPaperStyle = (theme) => ({
  top : '61px',
  backgroundColor : theme.palette.background.paper,
  borderColor : '#34383e'
})

const openedMixin = (theme) => (Object.assign({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
}, makeDrawerPaperStyle(theme)));

const closedMixin = (theme) => (Object.assign({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
}, makeDrawerPaperStyle(theme)));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 3),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    })
  }),
);

const StyledDivider = styled(Divider)({
  borderColor : '#34383e'
});

const panels = [
  { id : 0, title : 'Dashboard', icon : <DashboardIcon style={{ color : 'white' }} /> },
  { id : 1, title : 'EVSEs',     icon : <PowerIcon style={{ color : 'white' }} /> },
  { id : 2, title : 'Account',   icon : <AccountCircleIcon style={{ color : 'white' }}/> },
  { id : 3, title : 'Export',    icon : <FileDownloadIcon style={{ color : 'white' }}/>},
  { id : 4, title : 'Help',      icon : <HelpIcon style={{ color : 'white' }}/>}
]

const LoggedAs = (props) => {
  const phk = useAccountPkh();
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center" >
      <Grid item>
        <Typography variant='h5'>{panels[props.panel].title}</Typography>
      </Grid>
      <Grid item>
        <Grid container direction="row" spacing={1}>
          <Grid item>
            <Typography variant='caption'>Logged as</Typography>
          </Grid>
          <Grid item>
            <Typography variant='caption' style={{ fontFamily : courier }}>{phk}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

const Header = (props) => {
  React.useEffect(() => {
    props.setHeaderHeight(document.getElementById('drawerheader').clientHeight);
  }, [])
  return (
  <DrawerHeader id='drawerheader'>
    <LoggedAs panel={props.panel} />
  </DrawerHeader>)
}

export default function MainPanel(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [panel, setPanel] = React.useState(0);
  const [headerHeight, setHeaderHeight] = React.useState(0);
  const switchOpen = () => {
    setOpen(o => !o);
  }
  const handleOpen = (id) => (e) => {
    setPanel(id);
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={switchOpen} color='inherit'>
            {open ? <ChevronLeftIcon/> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <StyledDivider />
        <List>
          { panels.slice(0,3).map(x => {
            return <ListItem button key={x.title} onClick={handleOpen(x.id)} selected={panel == x.id}>
              <ListItemIcon >
                {x.icon}
              </ListItemIcon>
              <ListItemText primary={x.title} />
            </ListItem>
          })}
        </List>
        <StyledDivider />
        <List>
        { panels.slice(3,5).map(x => {
            return <ListItem button key={x.title} onClick={handleOpen(x.id)} selected={panel == x.id}>
              <ListItemIcon >
                {x.icon}
              </ListItemIcon>
              <ListItemText primary={x.title} />
            </ListItem>
          })}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }} style={{ height : props.height }}>
        <Header panel={panel} setHeaderHeight={setHeaderHeight}/>
        <DashBoard height={ props.height - headerHeight }/>
      </Box>
    </Box>
  );
}
