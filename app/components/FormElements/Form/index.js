import React, { Component } from 'react';
import './styles.css';

const Form = (props) => (
  <div className="form_container">
    {props.children}
  </div>
);

export default Form;