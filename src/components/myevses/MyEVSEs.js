import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { DAppProvider, useReady } from './constate/dapp';
import labels from './labels.js';
import Login from './Login.js';
import MainPanel from './MainPanel.js';

const TopPanel = (props) => {
  const ready = useReady();
  return (
    ready ? <MainPanel /> :
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
            main :  'rgba(0, 177, 165, 1)'
          },
          background : {
            paper : '#18191a',
            default: '#18191a'
          },
          text : {
            primary : '#fff',
            disabled : 'grey',
          },
          info : {
            main :  '#c7b45f'
          },
          action : {
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
        <div style={{ height: `${props.height}px`, width: `${props.width}px` }}>
          <TopPanel width={props.width} />
       </div>
      </DAppProvider>
      </ThemeProvider>
  )
}

export default MyEVSEs;