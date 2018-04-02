import React from 'react';

import './styles.css';

const Sidebar = (props) => (
  <div className="sidebar_container">
    {props.children}
  </div>
);

export default Sidebar;
