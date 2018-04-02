import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import SocialGroup from 'material-ui/svg-icons/social/group';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ActionPower from 'material-ui/svg-icons/action/power-settings-new';

import './styles.css';

const adminNav = [{
    key: 0,
    name: 'Trenerzy',
    url: "/admin/coaches" 
  }, {
    key: 1,
    name: "Wyloguj",
    url: "",
    method: () => false
}];

const coachNav = [{
    key: 0,
    name: 'Klienci',
    url: "/coach/clients" 
  }, {
    key: 1,
    name: "Ćwiczenia",
    url: "/coach/exercises"
  }, {
    key: 2,
    name: "Wyloguj",
    url: "",
    method: () => false
}];

const clientNav = [{
    key: 0,
    name: 'Klienci',
    url: "/coach/clients" 
  }, {
    key: 1,
    name: "Ćwiczenia",
    url: "/coach/exercises"
  }, {
    key: 2,
    name: "Wyloguj",
    url: "",
    method: () => false
}];


const navigations = {
  admin: adminNav,
  coach: coachNav,
  client: clientNav
};

const Navigation = (props) => {
  return (
    <div className="navigation_container">
      <MuiThemeProvider>
        <div>
          {navigations[props.role].map((element) => (
            <Fragment key={element.key}>
              {element.url ? 
                <NavLink to={element.url}>
                  <RaisedButton
                    label={element.name}
                    labelPosition="before"
                    icon={<SocialGroup />}
                    className="m-btn"
                    fullWidth={true}
                    backgroundColor="#E53935"
                    labelColor="#FFFFFF"
                  />
                </NavLink> : 
                <RaisedButton
                  label={element.name}
                  labelPosition="before"
                  icon={<SocialGroup />}
                  className="m-btn"
                  fullWidth={true}
                  backgroundColor="#E53935"
                  labelColor="#FFFFFF"
                  onClick={element.method}
                />
              }
            </Fragment>
          ))}
        </div>
      </MuiThemeProvider>
    </div>
  );
}

Navigation.defaultProps = {
  role: 'coach'
};

export default Navigation;
