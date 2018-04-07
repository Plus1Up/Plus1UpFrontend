import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import InfoIcon from 'material-ui-icons/Info';

import axios from 'config/axios';
import Page from 'components/Page';
import './index.css';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 'auto',
    height: 450,
    overflowY: 'auto',
  },
};

class Clients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientsList: [],
    };
  }

  componentDidMount() {
    axios
      .get('/clients')
      .then(response => {
        console.log(response);
        this.setState({
          clientsList: response.data.data,
        })
      })
      .catch(error =>
        console.log("error",error))
  }

  render() {
    return (
      <MuiThemeProvider>
      <Page>
        <h1 id="inline1">KLIENCI</h1>
          <RaisedButton id="inline2"
                label="Dodaj klienta"
                labelPosition="before"
                href="/coach/clients/add_client"
                backgroundColor="#E9967A"
                labelColor="#FFFFFF"
          />
          <Tabs>
            <Tab label="Aktywni" >
            <div style={styles.root}>
              <GridList
                cellHeight={180}
                style={styles.gridList}
              >
                <Subheader>Wszyscy klienci</Subheader>
                {this.state.clientsList.map((tile) => (
                  <GridTile
                    key={tile.id}
                    title={<span>{tile.name} {tile.last_name}</span>}
                    subtitle={<span>ostatni trening: <b>{tile.updated_at}</b></span>}
                    actionIcon={<IconButton><InfoIcon /></IconButton>}
                  >
                    <img src='../../../assets/images/avatar.png' />
                  </GridTile>
                ))}
              </GridList>
            </div>
            </Tab>
            <Tab label="Oczekujący" >
              <div>
                <p>
                TODO
                </p>
              </div>
            </Tab>
            <Tab label="Zablokowani" >
              <div>
                <p>
                  TODO
                </p>
              </div>
            </Tab>
          </Tabs>
      </Page>
      </MuiThemeProvider>
    )
  }
}

export default Clients;