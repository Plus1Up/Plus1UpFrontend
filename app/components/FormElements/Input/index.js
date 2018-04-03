import React, { Component } from 'react';

const Input = (props) => (
  <div className="input-wrapper">
    <input
      className="input"
      type={props.type}
      name={props.name}
      onChange={props.onChange}
    />
  </div>
);

Input.defaultProps = {
  type: "text",
  name: "",
}

export default Input;