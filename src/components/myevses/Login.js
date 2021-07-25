import React from 'react';
import { Paper, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useReady, useWallet } from './constate/dapp';

const useStyles = makeStyles({
  paper: {
    padding     : '50px',
    borderColor : '#34383e',
    borderWidth : '1px',
    borderStyle : 'solid'
  },
  grid: {
    height: '100%',
  },
});

const Login = () => {
  const classes = useStyles();
  const ready = useReady();
  return (
    <Grid container direction="row" direction="row" justifyContent="center" alignItems="center" className={classes.grid}>
      <Grid item style={{ paddingBottom : '20%' }}>
        <Paper className={classes.paper} elevation={0}>
          <Grid container direction="column" justifyContent="center" alignItems="center" spacing={4}>
            <Grid item>
              <Typography>{ "Click below to connect to the app: " + (ready?"ready":"not ready")}</Typography>
            </Grid>
            <Grid item>
              <Button variant='outlined'>Login</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Login;