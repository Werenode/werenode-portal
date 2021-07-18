import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import { Grid, Typography, Button, Container } from '@material-ui/core';
import useBaseUrl from '@docusaurus/useBaseUrl';
//import Plug from '../../static/img/shutterstock_1868850010.jpeg';
//import Plug from '../../static/img/shutterstock_1868849356.jpeg';
import Plug from '../../static/img/shutterstock_1859956345.jpeg';
import Map from '../../static/img/home_bg1.jpeg';
//import Evse from '../../static/img/shutterstock_259990757.png';
import Evse from '../../static/img/shutterstock_1436226374.jpeg';
import { createTheme, ThemeProvider, useTheme } from '@material-ui/core/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import HomepageFeatures from '../components/HomepageFeatures';

const data = {
  taglines : {
    header      : 'This is the very important portals header tagline',
    mobile      : 'This is the very important mobile app tagline',
    evsemanager : 'This is the very important evse manager app tagline',
  },
  team : [
    {
      name     : 'Benoît Maïsseu',
      title    : 'CEO',
      role     : 'EV ecosystem expert',
      img      : 'img/BM.jpeg',
      linkedin : '' },
    {
      name     : 'Gaëtan Cadéro',
      title    : 'COO-CFO',
      role     : 'Operation management expert',
      img      : 'img/GC.jpeg',
      linkedin : '' },
    {
      name     : 'François Chiron',
      title    : 'Payment Technology Advisor',
      role     : 'IT & payment expert',
      img      : 'img/FCh.png',
      linkedin : ''
    },
    {
      name     : 'François Colet',
      title    : 'CTO',
      role     : 'EV charging expert, ISO15118 co-author',
      img      : 'img/FC.jpeg',
      linkedin : ''
    },
    {
      name     : 'Benoît Rognier',
      title    : 'CIO',
      role     : 'Deep tech and blockchain expert',
      img      : 'img/BR.jpeg',
      linkedin : ''
    },
  ]
}

const layoutOptions = {
  right : {
    angle : '225',
    direction : 'row-reverse'
  },
  left : {
    angle : '135',
    direction : 'row'
  }
}

const layout = 'left'

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

const WerenodeHeader = () => {
  const width = useWidth();
  return (
    <Grid container direction={layoutOptions[layout].direction} justifyContent="flex-start" alignItems="flex-start" style={{
      height: "500px",
      backgroundImage : `linear-gradient(${layoutOptions[layout].angle}deg, rgb(0 76 126 / 100%), rgb(0 76 126 / 90%), rgb(0 76 126 / 0%)), url(${Plug})`,
      backgroundSize : 'cover',
      backgroundPosition : isWidthDown('sm', width) ? 'right' : 'right'
    }}>
      <Grid container direction="row" justifyContent="center" alignItems="center" item md={6} sm={12} xs={12}>
        <Grid item xs={12} style={{
            margin    : '50px',
            textAlign : 'center'
          }}>
          <img src={useBaseUrl('img/werenode_logo_text_250px.png')} style={{ width : '350px' }}/>
        </Grid>
        <Grid item style={{
          margin      : '50px',
          textAlign   : 'center'
         }}>
          <Typography variant='h3' xs={12}>{data.taglines.header}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

const Phone = () => {
  return (
    <div style={{
      position : 'relative',
      width    : '500px',
      height   : '650px',
      overflow : 'hidden'
    }}>
      <img src={useBaseUrl('img/app_screen1.jpg')} style={{
        position : 'absolute',
        top: '64px',
        left: '79px',
        width: '342px',
      }}/>
      <img src={useBaseUrl('img/phone.png')} style={{ width : '500px', position : 'absolute', top : '0px', left : '0px' }}/>
    </div>
  )
}

const GooglePlayStore = () => {
  return (
    <img src={useBaseUrl('img/google-play-badge.png')} style={{ width : '200px' }}/>
  )
}

const AppleStore = () => {
  return (
    <img src={useBaseUrl('img/AppStoreButton.png')} style={{ width : '150px' }}/>
  )
}

const MobileApp = () => {
  const width = useWidth();
  return (
    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" style={{
      backgroundImage : `url(${Map})`,
      backgroundSize  : 'cover',
    }}>
    <Grid container direction="row" justifyContent="center" alignItems="center" item md={6} sm={12} xs={12} style={{
      height     : "650px",
    }} >
      <Grid item><Phone /></Grid>
    </Grid>
    <Grid container direction="column" justifyContent="space-between" alignItems="center" item md={4} sm={12} xs={12} style={{
      height     : '100%',
      paddingTop : isWidthDown('sm', width) ? "0px" : "100px",
      height     : isWidthDown('sm', width) ? "100%" : "650px"
    }}  >
      <Grid item style={{
        textAlign   : 'center',
        marginTop      : isWidthDown('sm', width) ? "50px" : "0px",
        marginBottom   : isWidthDown('sm', width) ? "50px" : "0px",
      }}>
        <Typography variant='h3'>{data.taglines.mobile}</Typography>
      </Grid>
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4} item>
        <Grid item>
          <GooglePlayStore />
        </Grid>
        <Grid item>
          <AppleStore />
        </Grid>
      </Grid>
    </Grid>
    </Grid>
  )
}

const Labtop = () => {
  return (
    <div style={{
      position : 'relative',
      height   : '700px',
      width    : '1500px'
    }}>
      <div style={{
        backgroundColor : 'black',
        position  : 'absolute',
        top      : '80px',
        left     : '180px',
        height   : '550px',
        width    : '1500px'
      }}>
      </div>
      <img src={useBaseUrl('img/mac-mockup.png')} style={{
        position : 'absolute',
        top      : '64px',
        left     : '79px',
        height   : '600px'
      }}/>

    </div>
  )
}

const EvseManager = () => {
  const width = useWidth();
  return (
    <Grid container direction={isWidthDown('sm', width) ? "column-reverse" : "row"} justifyContent="flex-start" alignItems="flex-start" style={{
      backgroundImage : `linear-gradient(0deg, rgb(0 76 126 / 100%), rgb(0 76 126 / 80%), rgb(0 76 126 / 0%)), url(${Evse})`,
      backgroundSize : 'cover',
      backgroundPosition : isWidthDown('sm', width) ? 'center' : 'left'
    }}>
    <Grid container direction="column" justifyContent="flex-end" alignItems="center" item md={6} sm={12} xs={12} style={{
      height : "700px"
    }}>
      <Grid item style={{
          marginLeft   : isWidthDown('sm', width) ? "0px" : "100px",
          marginRight  : isWidthDown('sm', width) ? "0px" : "100px",
          textAlign    : 'center'
         }}>
        <Typography variant='h3'>{data.taglines.evsemanager}</Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" disableElevation style={{
          paddingLeft  : '40px',
          paddingRight : '40px',
          color        : 'white',
          marginBottom : '100px',
          marginTop    : '50px'
        }}>open app</Button>
      </Grid>
    </Grid>
    <Grid item md={6} sm={12} xs={12} style={{
      height   : isWidthDown('sm', width) ? "700px" : "100%",
      overflow : 'hidden'
    }}>
      <Labtop />
    </Grid>
    </Grid>
  )
}

const Member = (props) => {
  return (
    <Grid item md={4} sm={6} xs={12} container direction="column" justifyContent="center" alignItems="center" style={{
      marginTop : '30px'
    }}>
      <Grid item>
        <img src={useBaseUrl(props.img)} style={{
          borderRadius : '100%',
          borderStyle  : 'inset',
          borderColor  : 'white',
          borderWidth  : '2px',
          height       : '120px',
          width        : '120px'
        }}
        />
      </Grid>
      <Grid item style={{ textAlign : 'center' }}>
        <Typography>{ props.name + ', ' + props.title }</Typography>
      </Grid>
      <Grid item style={{ textAlign : 'center' }}>
        <Typography>{ props.role }</Typography>
      </Grid>
    </Grid>
  )
}

const Team = (props) => {
  return (
    <Container>
    <Grid container direction="row" justifyContent="flex-start" alignItems="center" style={{
      marginTop : '100px',
      marginBottom : '130px',
    }}>
      { data.team.map(member =>
        <Member img={member.img} name={member.name} title={member.title} role={member.role}/>
      ) }
    </Grid>
    </Container>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: 'dark',
          primary : {
            main :  '#00b1a5'
          },
          background : {
            paper : 'black',
            default: 'black'
          },
          info : {
            main :  '#c7b45f'
          }
        },
      }),
    [true],
  );
  return (
    <div style={{ backgroundColor : '#121212' }}>
    <ThemeProvider theme={ theme }>
    <Layout
      title="Werenode Portal"
      description="Description will go into a meta tag in <head />">
      <WerenodeHeader />
      <MobileApp />
      <EvseManager />
      {/*<HomepageFeatures />*/}
      <Team />
    </Layout>
    </ThemeProvider>
    </div>
  );
}
