import React from 'react';
import { Paper, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useWallet, useConnect } from './constate/dapp';
import labels from './labels.js';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
//import Link from '@material-ui/core/Link';
import Link from '@docusaurus/Link';


const useStyles = makeStyles({
  paper: {
    paddingLeft : '20px',
    paddingRight : '20px',
    paddingTop  : '30px',
    paddingBottom : '20px',
    marginLeft : '20px',
    marginRight : '20px',
    borderColor : '#34383e',
    borderWidth : '1px',
    borderStyle : 'solid'
  },
  grid: {
    height: '100%',
  },
  title: {
    fontWeight : 'bold',
  },
  purpose: {
    color : 'grey',
    marginBottom : '40px'
  },
  connect: {
    marginBottom : '0px',
  },
  login: {
    padding : '12px'
  }
});

const ConnectWallet = (props) => {
  const classes = useStyles();
  const connect= useConnect();
  const handleClick = React.useCallback(async () => {
    try {
      await connect('hangzhounet', {forcePermission: true});
    } catch (err) {
      alert(err.message);
    }
  }, [connect]);
  return (
    <Grid item container direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
      <Grid item>
        <Typography className={classes.connect}>{ labels.login.connect }</Typography>
      </Grid>
      <Grid item>
        <Button disabled={props.disabled} variant='outlined' style={{
          width : `${props.width}px`,
          padding : '12px' }}
          onClick={handleClick}
        >
          { labels.login.button }
        </Button>
      </Grid>
    </Grid>
  )
}

const InstallWallet = (props) => {
  const classes = useStyles();
  return (
    <Grid item container direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
      <Grid item>
        <Typography className={classes.connect}>{ labels.login.connect }</Typography>
      </Grid>
      <Grid item>
        <Typography variant='caption' className={classes.purpose}>{ labels.login.nowallet }</Typography>
      </Grid>
      <Grid item>
        <Link to='https://templewallet.com/' style={{ textDecoration: 'none' }}>
          <Button disabled={props.disabled} variant='contained' style={{
            color : 'white',
            backgroundColor : '#ed8936',
            width : `${props.width}px`,
            padding : '12px' }} endIcon={<OpenInNewIcon />}>{ labels.login.install }</Button>
        </Link>
      </Grid>
    </Grid>
  )
}

const Login = (props) => {
  const classes = useStyles();
  const wallet = useWallet();
  const width = Math.min(props.width-80,500);
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.grid}>
      <Grid item style={{ paddingBottom : '10%' }}>
        <Paper className={classes.paper} elevation={0}>
          <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
            <Grid item>
              <Typography className={classes.title}>{ labels.login.title }</Typography>
            </Grid>
            <Grid item style={{ marginBottom : '40px' }}>
              <Typography variant='caption' className={classes.purpose}>{ labels.login.purpose }</Typography>
            </Grid>
            { wallet ?
              <ConnectWallet width={width} disabled={false} /> :
              <InstallWallet width={width} disabled={false} />
            }
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Login;
