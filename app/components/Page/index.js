import React, { Component } from 'react';

import './styles.css';

const Page = (props) => (
  <div className="page_container">
    {props.children}
  </div>
);

export default Page;
