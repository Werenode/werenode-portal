import { Button, Container, Grid, Typography } from '@material-ui/core';
import { ThemeProvider, createTheme, useTheme } from '@material-ui/core/styles';
import { isWidthDown, useWidth } from '../../jsUtils';

import Car from '../../../static/img/car.png';
import HomepageFeatures from '../../components/features/HomepageFeatures';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Map from '../../../static/img/home_bg1.jpeg';

import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const data = {
  taglines: {
    header: 'Join the rEVolution',
    subheader: 'The ICO is running!',
    text1: 'Send email for more info at contact@werenode.com'
  },
  buttons: {
    invest: 'join the community',
    lite: 'Download Lite Paper!'
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
      width: "100%"
    }}>
      <Grid container direction="column" justifyContent="center" alignItems="center" item md={6} sm={12} xs={12}>
        <Grid item style={{
          margin: '50px',
          textAlign: 'center'
        }}>
          <Typography variant='h3' xs={12} >{data.taglines.header}</Typography>
        </Grid>
        <Grid item style={{
          marginLeft: '32px',
          marginRight: '32px',
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          <Button variant='outlined' href='https://forms.gle/tuLJBM1QHNBpknUK7' style={{ color: 'white' }}>Subscribe to our newsletter</Button>
        </Grid>
        <Grid item style={{
          marginLeft: '32px',
          marginRight: '32px',
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          <Button variant='outlined' href='https://app.uniswap.org/explore/tokens/ethereum/0x1D801fB8b2ED31b9990D7A2272A11c2c1D0a25b6' style={{ color: 'white' }}>Buy EWRC Tokens on Ethereum</Button>
        </Grid>
        <Grid item style={{
          marginLeft: '32px',
          marginRight: '32px',
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          <Button variant='outlined' href='https://biswap.org/fr/swap?outputCurrency=0xcb2B11e8B780971907A9A171754C7D767ee8Bc70' style={{ color: 'white' }}>Buy BWRC Tokens on Binance SmartChain</Button>
        </Grid>
        <Grid item style={{
          marginLeft: '32px',
          marginRight: '32px',
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          <Button variant='outlined' href='https://hd.spicyswap.xyz/#/trade/KT1TRtYkzHivDvRAQxYNDBmdnyVfjGtDUZrU' style={{ color: 'white' }}>Buy WRC Tokens on Tezos</Button>
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
  const { siteConfig } = useDocusaurusContext();
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
    <div style={{ backgroundColor: '#121212' }}>
      <Layout
        title="Werenode Invest">
        <ThemeProvider theme={theme}>
          <InvestHeader />
        </ThemeProvider>
      </Layout>
    </div>
  )
}
