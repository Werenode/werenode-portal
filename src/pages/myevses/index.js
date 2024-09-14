import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Layout from '@theme/Layout';
import React, { useEffect, useState } from 'react';

import MyEVSEs from '../../components/myevses/MyEVSEs';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = ExecutionEnvironment.canUseDOM ? window : { innerWidth: 0, innerHeight: 0 };
  return {
    width,
    height,
  };
}

const MyEVSEsPage = () => {
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const { width, height } = windowDimensions;

  function handleResize() {
    setWindowDimensions(getWindowDimensions());
  }

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {

      window.addEventListener('resize', handleResize);

      const resizeEvent = new Event('resize');
      window.dispatchEvent(resizeEvent);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <Layout noFooter>
      <MyEVSEs width={width} height={height-60}/>
    </Layout>
  );
};

export default MyEVSEsPage;
