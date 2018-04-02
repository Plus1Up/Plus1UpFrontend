import React from 'react';

import './styles.css';

const Layout = (props) => (
  <div className="main_containter">
    {props.sidebar}
    {props.navigation}
    {props.views}
  </div>
);

export default Layout;
