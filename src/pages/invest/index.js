import { Button, Container, Grid, Typography } from '@material-ui/core';
import { ThemeProvider, createTheme, useTheme } from '@material-ui/core/styles';
import { isWidthDown, useWidth } from '../../jsUtils';

import Car from '../../../static/img/car.png';
import HomepageFeatures from '../../components/features/HomepageFeatures';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Map from '../../../static/img/home_bg1.jpeg';
import Plug from '../../../static/img/shutterstock_1859956345.jpeg';
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const data = {
  taglines: {
    header: 'Join the rEVolution',
    subheader: 'Stay tuned for the upcoming ICO !',
    text1: 'Send email for more info at contact@werenode.com'
  },
  buttons: {
    invest: 'join the community',

  },
}

const layoutOptions = {
  right: {
    angle: '225',
    direction: 'row-reverse'
  },
  left: {
    angle: '135',
    direction: 'row'
  }
}

const layout = 'left'

const InvestHeader = () => {
  const width = useWidth();
  return (
    <Grid container direction={layoutOptions[layout].direction} justifyContent="flex-start" alignItems="flex-start" style={{
      minHeight: isWidthDown('md', width) ? "600px" : "500px",
      backgroundImage: `linear-gradient(${layoutOptions[layout].angle}deg, rgb(0 0 0 / 100%), rgb(0 0 0 / 80%), rgb(0 76 126 / 0%)), url(${Car})`,
      backgroundSize: 'cover',
      backgroundPosition: isWidthDown('sm', width) ? 'left' : 'left',
      height: "500px",
      width: "100%"
    }}>
      <Grid container direction="row" justifyContent="center" alignItems="center" item md={6} sm={12} xs={12}>
        <Grid item style={{
          margin: '50px',
          textAlign: 'center'
        }}>
          <Typography variant='h3' xs={12}>{data.taglines.header}</Typography>
        </Grid>
        <Grid item style={{
          marginLeft: '32px',
          marginRight: '32px',
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          <Typography variant="h4" xs={12}>{data.taglines.subheader}</Typography>
        </Grid>
        <Grid item style={{
          marginLeft: '32px',
          marginRight: '32px',
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          <Typography xs={12}>{data.taglines.text1}</Typography>
        </Grid>
        <Grid item xs={12} style={{
          margin: '50px',
          textAlign: 'center'
        }}>
          <img src={useBaseUrl('img/werenode_logo_text_250px.png')} style={{ width: '350px' }} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default function Investhome() {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: 'dark',
          primary: {
            main: '#00b1a5'
          },
          background: {
            paper: '#18191a',
            default: '#18191a'
          },
          text: {
            primary: '#fff',
          },
          info: {
            main: '#c7b45f'
          }
        },
      }),
    [true],
  );
  const width = useWidth();
  const deg = isWidthDown('sm', width) ? '0' : '225';
  return (
    <Layout
      title="Werenode Invest">
      <ThemeProvider theme={theme}>
        <InvestHeader />
      </ThemeProvider>
    </Layout>
  )
}