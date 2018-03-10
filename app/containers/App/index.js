import React from 'react';

import Layout from 'components/Layout';
import Body from 'components/Body';
import Sidebar from 'components/Sidebar';

const App = (props) => (
  <Layout
    sidebar={
      <Sidebar />
    }
    body={
      <Body />
    }
  />
);

export default App;