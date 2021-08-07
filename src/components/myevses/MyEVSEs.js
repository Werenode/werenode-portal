import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { DAppProvider, useReady } from './constate/dapp';
import { EVSEProvider } from './constate/evses';
import { PanelsProvider } from './constate/panels';
import { SelectProvider } from './constate/select';
import { WizardProvider } from './constate/wizard';
import labels from './labels.js';
import Login from './Login.js';
import MainPanel from './MainPanel.js';
import Wizard from './Wizard';
import { SportsRugbySharp } from '@material-ui/icons';

const TopPanel = (props) => {
  const ready = useReady();
  return (
    ready ? <MainPanel height={props.height}/> :
    <Login width={props.width}/>
  )
}

const MyEVSEs = (props) => {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: 'dark',
          primary : {
            main :  'rgba(0, 177, 165, 1)',
            contrastText : 'white'
          },
          background : {
            paper : '#18191a',
            default: '#18191a'
          },
          text : {
            primary : '#fff',
            secondary : 'rgba(255,255,255,0.7)',
            disabled : 'grey',
          },
          info : {
            main :  '#c7b45f'
          },
          action : {
            active : 'rgb(255,255,255)',
            disabled : '#34383e',
            disabledBackground : '#34383e',
            hover : 'rgba(0, 177, 165, 1)',
            selectedOpacity : '0.8'
          }
        },
      }),
    [true],
  );
  return(
      <ThemeProvider theme={theme}>
      <DAppProvider appName={ labels.appname }>
      <EVSEProvider>
      <PanelsProvider>
      <SelectProvider>
      <WizardProvider>
        <div style={{ height: `${props.height}px`, width: `${props.width}px` }}>
          <TopPanel height={props.height} width={props.width} />
       </div>
      </WizardProvider>
      </SelectProvider>
      </PanelsProvider>
      </EVSEProvider>
      </DAppProvider>
      </ThemeProvider>
  )
}

export default MyEVSEs;