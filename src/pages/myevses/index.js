import React from 'react';
import { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import MyEVSEs from '../../components/myevses/MyEVSEs';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = ExecutionEnvironment.canUseDOM ? window : { innerWidth:0, innerHeight:0 };
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

const MyEVSEsPage = () => {
  const { width, height } = useWindowDimensions();
  return (
    <Layout noFooter>
      <MyEVSEs width={width} height={height-60}/>
    </Layout>
  )
}

export default MyEVSEsPage;
