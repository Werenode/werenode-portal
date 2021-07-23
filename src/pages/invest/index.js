import React from 'react';
import Layout from '@theme/Layout';
import { createTheme, ThemeProvider, useTheme } from '@material-ui/core/styles';
import { Grid, Container, Typography } from "@material-ui/core";
import Car from '../../../static/img/car.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
    case 'sm' : return (width == 'xs' || width == 'sm');
    default : return true
  }
}

const Invest = () => {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: 'dark',
          primary : {
            main :  '#00b1a5'
          },
          background : {
            paper : '#18191a',
            default: '#18191a'
          },
          text : {
            primary : '#fff',
          },
          info : {
            main :  '#c7b45f'
          }
        },
      }),
    [true],
  );
  const width = useWidth();
  const deg = isWidthDown('sm', width) ? '0' : '225';
  return(
    <Layout>
      <ThemeProvider theme={theme}>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <Grid item style={{
            backgroundImage : `linear-gradient(${deg}deg, rgb(0 0 0 / 100%), rgb(0 0 0 / 80%), rgb(0 76 126 / 0%)), url(${Car})`,
            backgroundSize : 'cover',
            backgroundPosition : 'left',
            height: "500px",
            width: "100%"
          }}>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Layout>
  )
}

  export default Invest;