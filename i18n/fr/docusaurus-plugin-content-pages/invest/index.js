import { Button, Container, Grid, Typography } from '@material-ui/core';
import { ThemeProvider, createTheme, useTheme } from '@material-ui/core/styles';
import { isWidthDown, useWidth } from '@site/src/jsUtils';

import Car from '@site/static/img/car.png';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Map from '@site/static/img/home_bg1.jpeg';

import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const data = {
  taglines: {
    header: 'Rejoignez la rEVolution',
    subheader: "L'ICO est en cours !",
    text1: "Pour plus d'informations, écrivez à contact@werenode.com"
  },
  buttons: {
    invest: 'rejoindre la communauté',
    lite: 'Télécharger le Lite Paper !'
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
          <Button variant='outlined' href='https://forms.gle/tuLJBM1QHNBpknUK7' style={{ color: 'white' }}>Abonnez-vous à notre newsletter</Button>
        </Grid>
        <Grid item style={{
          marginLeft: '32px',
          marginRight: '32px',
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          <Button variant='outlined' href='https://app.uniswap.org/explore/tokens/ethereum/0x1D801fB8b2ED31b9990D7A2272A11c2c1D0a25b6' style={{ color: 'white' }}>Acheter des jetons EWRC sur Ethereum</Button>
        </Grid>
        <Grid item style={{
          marginLeft: '32px',
          marginRight: '32px',
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          <Button variant='outlined' href='https://biswap.org/fr/swap?outputCurrency=0xcb2B11e8B780971907A9A171754C7D767ee8Bc70' style={{ color: 'white' }}>Acheter des jetons BWRC sur Binance Smart Chain</Button>
        </Grid>
        <Grid item style={{
          marginLeft: '32px',
          marginRight: '32px',
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          <Button variant='outlined' href='https://hd.spicyswap.xyz/#/trade/KT1TRtYkzHivDvRAQxYNDBmdnyVfjGtDUZrU' style={{ color: 'white' }}>Acheter des jetons WRC sur Tezos</Button>
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
        title="Werenode - Rejoignez-nous">
        <ThemeProvider theme={theme}>
          <InvestHeader />
        </ThemeProvider>
      </Layout>
    </div>
  )
}
