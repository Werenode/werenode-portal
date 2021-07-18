import React from 'react';
import Layout from '@theme/Layout';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { useState, useEffect } from 'react';

import Login from './Login.js';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const MyEVSEs = () => {
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
  const { height } = useWindowDimensions();
  return(
    <Layout>
      <ThemeProvider theme={theme}>
      <div style={{ height: `${height-60}px` }}>
        <Login />
      </div>
      </ThemeProvider>
    </Layout>
  )
}

export default MyEVSEs;