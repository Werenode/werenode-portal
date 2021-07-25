import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { DAppProvider } from './constate/dapp';
import labels from './labels.js';
import Login from './Login.js';

const MyEVSEs = (props) => {
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
  return(
      <ThemeProvider theme={theme}>
      <DAppProvider appName={ labels.appname }>
        <div style={{ height: `${props.height}px` }}>
         <Login />
       </div>
      </DAppProvider>
      </ThemeProvider>
  )
}

export default MyEVSEs;