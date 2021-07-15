import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import { Grid, Typography, Button } from '@material-ui/core';
import useBaseUrl from '@docusaurus/useBaseUrl';
//import Plug from '../../static/img/shutterstock_1868850010.jpeg';
//import Plug from '../../static/img/shutterstock_1868849356.jpeg';
import Plug from '../../static/img/shutterstock_1859956345.jpeg';
import Map from '../../static/img/home_bg1.jpeg';
//import Evse from '../../static/img/shutterstock_259990757.png';
import Evse from '../../static/img/shutterstock_1436226374.jpeg';

const texts = {
  tagline : 'This is the very important portals header tagline',
  mobiletagline : 'This is the very important mobile app tagline',
  evsemanagertagline : 'This is the very important evse manager app tagline'
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

const WerenodeHeader = () => {
  return (
    <Grid container direction={layoutOptions[layout].direction} justifyContent="flex-start" alignItems="flex-start" style={{
      height: "500px",
      backgroundImage : `linear-gradient(${layoutOptions[layout].angle}deg, rgb(0 76 126 / 100%), rgb(0 76 126 / 90%), rgb(0 76 126 / 0%)), url(${Plug})`,
      backgroundSize : 'cover'
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
          <Typography variant='h3' xs={12}>{texts.tagline}</Typography>
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
  return (
    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" style={{
      height: "650px",
      backgroundImage : `url(${Map})`,
      backgroundSize : 'cover'
    }}>
    <Grid container direction="row" justifyContent="center" alignItems="center" item md={6} sm={12} xs={12}>
      <Grid item><Phone /></Grid>
    </Grid>
    <Grid container direction="column" justifyContent="space-between" alignItems="center" style={{ height: '100%' }} item md={4} sm={12} xs={12} >
      <Grid item style={{
          marginTop   : '100px',
          textAlign   : 'center'
         }}>
          <Typography variant='h3'>{texts.mobiletagline}</Typography>
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
  return (
    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" style={{
      height: "700px",
      backgroundImage : `linear-gradient(0deg, rgb(0 76 126 / 100%), rgb(0 76 126 / 80%), rgb(0 76 126 / 0%)), url(${Evse})`,
      backgroundSize : 'cover'
    }}>
    <Grid container direction="column" justifyContent="flex-end" alignItems="center" item md={6} sm={12} xs={12} style={{ height : '100%' }}>
      <Grid item style={{
          margin   : '100px',
          textAlign   : 'center'
         }}>
        <Typography variant='h3'>{texts.evsemanagertagline}</Typography>
      </Grid>
      <Grid item>
        <Button>go to app</Button>
      </Grid>
    </Grid>
    <Grid item md={6} sm={12} xs={12} style={{ height : '100%', overflow : 'hidden' }}>
      <Labtop />
    </Grid>
    </Grid>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Werenode Portal"
      description="Description will go into a meta tag in <head />">
      <WerenodeHeader />
      <MobileApp />
      <EvseManager />
    </Layout>
  );
}
