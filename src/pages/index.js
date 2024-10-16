import { Button, Container, Grid, Typography } from '@material-ui/core';
import { ThemeProvider, createTheme, useTheme } from '@material-ui/core/styles';
import { isWidthDown, useWidth } from '../jsUtils';

import Car from '../../static/img/car.png';
//import Evse from '../../static/img/shutterstock_259990757.png';
import Evse from '../../static/img/shutterstock_1436226374.jpeg';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Map from '../../static/img/home_bg1.jpeg';
//import Plug from '../../static/img/shutterstock_1868850010.jpeg';
//import Plug from '../../static/img/shutterstock_1868849356.jpeg';
import Plug from '../../static/img/shutterstock_1859956345.jpeg';
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//import HomepageFeatures from '../components/HomepageFeatures';

const data = {
  taglines: {
    header: 'Equip your parking with a bespoke EV charging solution',
    subheader: 'Choose the best solution to accompany the electrified mobility of your employees, visitors or customers. Bring valuable services adapted to your real needs for the right cost. Find all the relevant analytics about your charging stations and your EV fleet.',
    mobile: 'Open your EV charging station',
    submobile: 'Connect every charging equipement and allow anybody to share its own and be compensated seamlessly. Ready for your clean and sustainable mobility!',
    evsemanager: 'Register your EV charging station',
    submanager: 'No need to wait for the big players. Help your fellow EV riders and get revenue from it. If you have an accessible connected charging station, you just have to register your EV supply equipment in the blockchain with the Werenode DApp.',
    invest: 'Be part of the future of EV',
    subinvest: 'New possibilities with Werenode : V2G, SmartCharge, ISO 15118, etc...'
  },
  buttons: {
    invest: 'Join us',
    evsemanager: 'Register now'
  },
  team: [
    {
      key: 'Benoît Maïsseu',
      title: 'CEO - Co-founder',
      role: 'EV ecosystem expert',
      img: 'img/BMAI_petit.png',
      linkedin: 'https://www.linkedin.com/in/benoit-maisseu'
    },
    {
      key: 'Nadiya Khokhryakova',
      title: 'President - Co-founder',
      role: 'Entrepreneur',
      img: 'img/MM.png',
      linkedin: ''
    },
    {
      key: 'François Chiron',
      title: 'CTO-IT - Co-founder',
      role: 'IT & payment expert',
      img: 'img/FCh.png',
      linkedin: ''
    },
    {
      key: 'François Colet',
      title: 'CTO-EV - Co-founder',
      role: 'EV charging expert, ISO15118 co-author',
      img: 'img/FC.jpeg',
      linkedin: ''
    },
    {
      key: 'Gaëtan Cadéro',
      title: 'Advisor - Co-founder',
      role: 'Operation management expert',
      img: 'img/GC.jpeg',
      linkedin: ''
    },
    {
      key: 'Benoît Rognier',
      title: 'CBO - Co-founder',
      role: 'Deep tech and Web3.0 expert',
      img: 'img/BR.jpeg',
      linkedin: ''
    },
    {
      key: 'Ajibola Abdul Muheen Olamilekan (Miles)',
      title: 'Community Manager',
      role: 'Digital Marketing and Sales',
      img: 'img/MA.jpeg',
      linkedin: ''
    },
    {
      key: 'Evgenii Zhdarkin',
      title: 'Lead Developer',
      role: 'Full-stack & Smart contracts development',
      img: 'img/Evgenii.png',
      linkedin: ''
    },
    {
      key: 'Lucas Gonçalves',
      title: 'Developer',
      role: 'Mobile App development',
      img: 'img/Lucas.jpg',
      linkedin: ''
    }
  ],
  partners: [
    {
      key: 'BPI France',
      img: 'img/bpifr.svg',
      url: 'https://www.bpifrance.fr/',
      width: '300px'
    },
    {
      key: 'Completium',
      img: 'img/completium.svg',
      url: 'https://completium.com/',
      width: '180px'
    },
    {
      key: 'EIT Urban Mobility',
      img: 'img/EITUM_Vertical.png',
      url: 'https://www.eiturbanmobility.eu/innovation/areas-of-innovation/',
      width: '200px',
    },
    {
      key: 'Systematic',
      img: 'img/systematic.jpg',
      url: 'https://systematic-paris-region.org/nouveaux-membres-2021-chapitre-3/',
      width: '200px',
    },
    {
      key: 'Blockspot',
      img: 'img/blockspot-light_blue-250x90.png',
      url: 'https://blockspot.io/coin/werecoin/',
      width: '200px',
    },
    {
      key: 'Incubateur CS',
      img: 'img/21ST Logo_Logo Vert Blanc-p-500.png',
      url: 'https://21st.centralesupelec.com/',
      width: '100px',
    },
    {
      key: 'Nomadic Labs',
      img: 'img/nomadic-labs.png',
      url: 'https://www.nomadic-labs.com/',
      width: '250px',
    },
    {
      key: 'Coinbrain',
      img: 'img/coinbrainfondsombre.png',
      url: 'https://coinbrain.com/coins/bnb-0xcb2B11e8B780971907A9A171754C7D767ee8Bc70',
      width: '250px',
    },
    {
      key: 'Spicyswap',
      img: 'img/spicyswap.png',
      url: 'https://spicyswap.xyz/#/pool/KT1PnUZCp3u2KzWr93pn4DD7HAJnm3rWVrgn:0/KT19Fmya7B49wKYdoqXYphyQWGRUn9g5wG8R:0',
      width: '250px',
    },
    {
      key: 'Coincodex',
      img: 'img/coincodex-logo-3.png',
      url: 'https://coincodex.com/crypto/werecoin/',
      width: '250px',
    },
    {
      key: 'Archetype',
      img: 'img/archetype.png',
      url: 'https://archetype-lang.org/',
      width: '250px',
    },
    {
      key: 'Edukera',
      img: 'img/edukera.png',
      url: 'https://edukera.com/',
      width: '250px',
    },
    {
      key: 'B-Hub',
      img: 'img/b-hub.png',
      url: 'https://b-hub.eu/blockchain-startups-france/#werenode',
      width: '250px',
    },
    {
      key: 'Ontochain',
      img: 'img/ontochain.png',
      url: 'https://ontochain.ngi.eu',
      width: '200px',
    },
    {
      key: 'PlanetTechCare',
      img: 'img/planettechcare.png',
      url: 'https://www.planet-techcare.green/annuaire/',
      width: '200px',
    },
    {
      key: 'FrenchTech',
      img: 'img/lafrenchtechsaclay.png',
      url: 'https://lafrenchtech-paris-saclay.fr',
      width: '200px',
    },
    {
      key: 'MintMe',
      img: 'img/logomintme.png',
      url: 'https://www.mintme.com/token/Werecoin',
      width: '200px',
    },
    {
      key: 'Trustchain',
      img: 'img/trustchain.png',
      url: 'https://trustchain.ngi.eu',
      width: '200px',
    },
    {
      key: 'ParisandCo',
      img: 'img/ParisandCo.png',
      url: 'https://www.parisandco.com/',
      width: '200px',
    },
    {
      key: 'QuartiersInnovation',
      img: 'img/QuartiersInnovation.jpg',
      url: 'https://www.paris.fr/pages/les-quartiers-d-innovation-urbaine-font-le-paris-de-demain-5913',
      width: '200px',
    },
    {
      key: 'Sargasso',
      img: 'img/Sargasso.png',
      url: 'https://ngisargasso.eu',
      width: '200px',
    },
    {
      key: 'OPGrandPrix',
      img: 'img/OPGrandPrix.png',
      url: 'https://ngisargasso.eu',
      width: '200px',
    },
    {
      key: 'LGNova',
      img: 'img/LGNova.png',
      url: 'https://www.lgnova.com',
      width: '200px',
    }
  ]
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

const WerenodeHeader = () => {
  const width = useWidth();
  return (
    <Grid container direction={layoutOptions[layout].direction} justifyContent="flex-start" alignItems="flex-start" style={{
      minHeight: isWidthDown('md', width) ? "600px" : "500px",
      backgroundImage: `linear-gradient(${layoutOptions[layout].angle}deg, rgb(0 76 126 / 100%), rgb(0 76 126 / 90%), rgb(0 76 126 / 0%)), url(${Plug})`,
      backgroundSize: 'cover',
      backgroundPosition: isWidthDown('sm', width) ? 'right' : 'right'
    }}>
      <Grid container direction="row" justifyContent="center" alignItems="center" item md={6} sm={12} xs={12}>
        <Grid item xs={12} style={{
          margin: '50px',
          textAlign: 'center'
        }}>
          <img src={useBaseUrl('img/werenode_logo_text_250px.png')} style={{ width: '350px' }} />
        </Grid>
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
          <Typography variant="h6" xs={12}>{data.taglines.subheader}</Typography>
          

        </Grid>
      </Grid>
    </Grid>
  )
}

const Phone = () => {
  return (
    <div style={{
      position: 'relative',
      width: '500px',
      height: '660px',
      overflow: 'hidden'
    }}>
      <img src={useBaseUrl('img/phone2.png')} style={{ width: '430px', position: 'absolute', top: '-3px', left: '34px' }} />
      <img src={useBaseUrl('img/app_screen1.jpg')} style={{
        position: 'absolute',
        top: '74px',
        left: '79px',
        width: '342px',
      }} />
    </div>
  )
}

const openUri = (os) => {
  if (typeof window !== 'undefined') {
    window.location.href = (os == "android" ? "https://play.google.com/store/apps/details?id=com.werenode.app" : "https://apps.apple.com/fr/app/werenode/id1582403510");
  }
}

const GooglePlayStore = () => {
  return (
    <img onClick={() => openUri("android")} src={useBaseUrl('img/google-play-badge.png')} style={{ width: '200px' }} />
  )
}

const AppleStore = () => {
  return (
    <img onClick={() => openUri("ios")} src={useBaseUrl('img/AppStoreButton.png')} style={{ width: '232px' }} />
  )
}

const MobileApp = () => {
  const width = useWidth();
  return (
    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" style={{
      backgroundImage: `url(${Map})`,
      backgroundSize: 'cover',
    }}>
      <Grid container direction="row" justifyContent="center" alignItems="center" item md={6} sm={12} xs={12} style={{
        height: "660px",
        overflow: 'hidden'
      }} >
        <Grid item><Phone /></Grid>
      </Grid>
      <Grid container direction="column" justifyContent="space-between" alignItems="center" item md={4} sm={12} xs={12} style={{
        height: '100%',
        paddingTop: isWidthDown('sm', width) ? "0px" : "100px",
        height: isWidthDown('sm', width) ? "100%" : "650px"
      }}  >
        <Grid item container direction="column" justifyContent="center" alignItems="center">
          <Grid item style={{
            textAlign: 'center',
            marginTop: isWidthDown('sm', width) ? "50px" : "0px",
            marginBottom: isWidthDown('sm', width) ? "50px" : "0px",
          }}>
            <Typography variant='h3'>{data.taglines.mobile}</Typography>
          </Grid>
          <Grid item style={{
            textAlign: 'center',
            marginLeft: '32px',
            marginRight: '32px',
            marginTop: isWidthDown('sm', width) ? "50px" : "32px",
            marginBottom: isWidthDown('sm', width) ? "50px" : "0px",
          }}>
            <Typography variant="h6">{data.taglines.submobile}</Typography>
          </Grid>
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
      position: 'relative',
      height: '700px',
      width: '1000px'
    }}>

      <img src={useBaseUrl('img/mac-mockup2.png')} style={{
        position: 'absolute',
        top: '64px',
        right: '0px',
        height: '600px',
      }} />

    </div>
  )
}

const EvseManager = () => {
  const width = useWidth();
  return (
    <Grid container direction={isWidthDown('sm', width) ? "column-reverse" : "row"} justifyContent="flex-start" alignItems="flex-start" style={{
      backgroundImage: `linear-gradient(0deg, rgb(0 76 126 / 100%), rgb(0 76 126 / 80%), rgb(0 76 126 / 0%)), url(${Evse})`,
      backgroundSize: 'cover',
      backgroundPosition: isWidthDown('sm', width) ? 'center' : 'left'
    }}>
      <Grid container direction="column" justifyContent="flex-end" alignItems="center" item md={6} sm={12} xs={12} style={{
        height: "700px"
      }}>
        <Grid item style={{
          marginLeft: isWidthDown('sm', width) ? "0px" : "100px",
          marginRight: isWidthDown('sm', width) ? "0px" : "100px",
          textAlign: 'center'
        }}>
          <Typography variant='h3'>{data.taglines.evsemanager}</Typography>
        </Grid>
        <Grid item style={{
          marginLeft: isWidthDown('sm', width) ? "32px" : "100px",
          marginRight: isWidthDown('sm', width) ? "32px" : "100px",
          marginTop: '32px',
          textAlign: 'center'
        }}>
          <Typography variant='h6'>{data.taglines.submanager}</Typography>
        </Grid>
        <Grid item>
          <Link to='registeryourequipment' style={{ textDecoration: 'none' }}>
            <Button variant="contained" disableElevation style={{
              paddingLeft: '40px',
              paddingRight: '40px',
              color: 'white',
              marginBottom: '50px',
              marginTop: '50px'
            }}>{data.buttons.evsemanager}</Button>
          </Link>
        </Grid>
      </Grid>
      <Grid item md={6} sm={12} xs={12} style={{
        height: isWidthDown('sm', width) ? "500px" : "100%",
        width: isWidthDown('sm', width) ? "100%" : "100%",
        overflow: 'hidden'
      }}>
        <Labtop />
      </Grid>
    </Grid>
  )
}

const Invest = () => {
  const width = useWidth();
  const deg = isWidthDown('xs', width) ? '0' : '225';
  return (
    <Grid container justifyContent="flex-end" alignItems="flex-start" style={{
      backgroundImage: `linear-gradient(${deg}deg, rgb(0 0 0 / 100%), rgb(0 0 0 / 80%), rgb(0 76 126 / 0%)), url(${Car})`,
      backgroundSize: 'cover',
      backgroundPosition: 'left',
      height: "500px",
    }}>
      <Grid container direction="column" justifyContent={isWidthDown('sm', width) ? "flex-end" : "center"} alignItems="center" item md={6} sm={6} xs={12} style={{
        height: "100%",
      }}>
        <Grid item style={{
          marginLeft: isWidthDown('sm', width) ? "50px" : "50px",
          marginRight: isWidthDown('sm', width) ? "50px" : "50px",
          textAlign: 'center',
          marginBottom: isWidthDown('sm', width) ? '25px' : '50px',
        }}>
          <Typography variant='h3'>{data.taglines.invest}</Typography>
        </Grid>
        <Grid item style={{
          marginLeft: isWidthDown('sm', width) ? "32px" : "100px",
          marginRight: isWidthDown('sm', width) ? "32px" : "100px",
          marginTop: '32px',
          textAlign: 'center'
        }}>
          <Typography variant='h6'>{data.taglines.subinvest}</Typography>
        </Grid>
        <Grid item style={{
          marginTop: isWidthDown('xs', width) ? "25px" : "50px",
          marginBottom: isWidthDown('sm', width) ? "32px" : "0px",
        }}>
          {<Link to='/invest' style={{ textDecoration: 'none' }}>
            <Button variant='outlined' style={{ color: 'white' }}>{data.buttons.invest}</Button>
          </Link>}
        </Grid>
      </Grid>

    </Grid>
  )
}

const Member = (props) => {
  return (
    <Grid item md={4} sm={6} xs={12} container direction="column" justifyContent="center" alignItems="center" style={{
      marginTop: '30px'
    }}>
      <Grid item>
        <img src={useBaseUrl(props.img)} style={{
          borderRadius: '100%',
          borderStyle: 'inset',
          borderColor: 'white',
          borderWidth: '2px',
          height: '120px',
          width: '120px'
        }}
        />
      </Grid>
      <Grid item style={{ textAlign: 'center' }}>
        <Typography>{props.name + ', ' + props.title}</Typography>
      </Grid>
      <Grid item style={{ textAlign: 'center' }}>
        <Typography>{props.role}</Typography>
      </Grid>
    </Grid>
  )
}

const Team = (props) => {
  return (
    <Grid container direction="row" justifyContent="flex-start" alignItems="center" style={{
      marginTop: '100px',
      marginBottom: '130px',
    }}>
      {data.team.map(member =>
        <Member img={member.img} key={member.key} name={member.key} title={member.title} role={member.role} />
      )}
    </Grid>
  )
}

const Partner = (props) => {
  const width = useWidth();
  // console.log("wi",isWidthDown('sm', width))
  return (
    <Grid item style={{
      marginBottom: isWidthDown('sm', width) ? "20px" : "0px",
      marginTop: isWidthDown('sm', width) ? "20px" : "0px",
      marginLeft: '32px',
      marginRight: '32px',
    }}>
      <Link to={props.url}>
        <img src={useBaseUrl(props.img)} style={{ width: props.width }} />
      </Link>
    </Grid>
  )
}

const Partners = () => {
  const width = useWidth();
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" style={{
      backgroundColor: '#1d222b',
      paddingBottom: '32px',
    }}>
      <Grid item style={{ marginTop: '15px' }}>
        <Typography variant='subtitle1' style={{ color: 'grey' }}>Partners</Typography>
      </Grid>
      <Grid item container justifyContent="center" alignItems="center" spacing={2} style={{
        marginTop: '0px',
        marginBottom: '0px',

      }}>
        {data.partners.map(partner =>
          <Partner key={partner.key} img={partner.img} width={partner.width} url={partner.url} />
        )}
      </Grid>
    </Grid>
  )
}

export default function Home() {
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
            paper: 'black',
            default: 'black'
          },
          info: {
            main: '#c7b45f'
          }
        },
      }),
    [true],
  );
  return (
    <div style={{ backgroundColor: '#121212' }}>
      <Layout
        title="Werenode Portal"
        description="Official Werenode website">
        <ThemeProvider theme={theme}>
          <WerenodeHeader />
          <MobileApp />
          <EvseManager />
          <Invest />
          {/*<HomepageFeatures />*/}
          <Team />
          <Partners />
        </ThemeProvider>
      </Layout>
    </div>
  );
}
