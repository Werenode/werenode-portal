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

import litepdf from '/documents/Werenode_Litepaper_21_12_03.pdf'

import { Document, Page, pdfjs, Outline } from "react-pdf/";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const data = {
  taglines: {
    header: 'Join the rEVolution',
    subheader: 'The ICO is running!',
    text1: 'Tokenomics from our <a href="https://uqsd.cdo"> litepaper : </a> '
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
  const pdf_w = 1000
  return (
    <Grid container direction={layoutOptions[layout].direction} style={{
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
          <Typography variant='h5' xs={12}>{data.taglines.subheader}</Typography>

        </Grid>
        <Grid item style={{
          marginLeft: '32px',
          marginRight: '32px',
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          <Button variant='outlined' href='https://exchange.werecoin.com/#/register' style={{ color: 'white' }}>Register here</Button>
        </Grid>

        <Grid item style={{
          marginLeft: '32px',
          marginRight: '32px',
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          <p xs={12} style={{ marginBottom: '32px' }}>
            From our <a href="./documents/Werenode_Litepaper_21_12_03.pdf"> litepaper : </a>
          </p>

          <Document file='/documents/Werenode_Litepaper_21_12_03.pdf' >
            <Page pageNumber={8} width='800' scale='1'  />
            <hr/>
            <Page pageNumber={9} width='800' scale='1' />
          </Document>

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
  // const width = useWidth();
  // const deg = isWidthDown('sm', width) ? '0' : '225';
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
