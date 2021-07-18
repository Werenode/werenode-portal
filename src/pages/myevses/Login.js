import React from 'react';
import { Paper, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  paper: {
    padding     : '50px',
    borderColor : '#34383e',
  },
  grid: {
    height: '100%',
  },
});

const Login = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" direction="row" justifyContent="center" alignItems="center" className={classes.grid}>
      <Grid item>
        <Paper variant="outlined" elevation={0} className={classes.paper}>
          <Grid container direction="column" justifyContent="center" alignItems="center" spacing={4}>
            <Grid item>
              <Typography>Click below to connect to the app</Typography>
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