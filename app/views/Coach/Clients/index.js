import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
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
    height: 'auto',
    overflowY: 'auto',
  },
};

class Clients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeClientsList: [],
      pendingClientsList: [],
      blockedClientsList: [],
    };
  }

  componentDidMount() {
    axios
      .get('/clients?is_active=true')
      .then(response => {
        console.log(response);
        this.setState({
          activeClientsList: response.data.data,
        })
      })
      .catch(error =>
        console.log("error",error)),
    axios
      .get('/clients?is_pending=true')
      .then(response => {
        console.log(response);
        this.setState({
          pendingClientsList: response.data.data,
        })
      })
      .catch(error =>
        console.log("error",error)),
    axios
      .get('/clients?is_active=false')
      .then(response => {
        console.log(response);
        this.setState({
          blockedClientsList: response.data.data,
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
                cellHeight={350}
                style={styles.gridList}
              >
                <Subheader>Aktywni klienci</Subheader>
                {this.state.activeClientsList.map((tile) => (
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
            <div style={styles.root}>
              <GridList
                cellHeight={350}
                style={styles.gridList}
              >
                <Subheader>Oczekujący klienci</Subheader>
                {this.state.pendingClientsList.map((tile) => (
                  <GridTile
                    key={tile.id}
                    title={<span>{tile.name} {tile.last_name}</span>}
                    actionIcon={<FlatButton label="Anuluj zaproszenie" fullWidth={true} />}
                  >
                    <img src='../../../assets/images/avatar.png' />
                  </GridTile>
                ))}
              </GridList>
            </div>
            </Tab>
            <Tab label="Zablokowani" >
            <div style={styles.root}>
              <GridList
                cellHeight={350}
                style={styles.gridList}
              >
                <Subheader>Zablokowani klienci</Subheader>
                {this.state.blockedClientsList.map((tile) => (
                  <GridTile
                    key={tile.id}
                    title={<span>{tile.name} {tile.last_name}</span>}
                    //todo - data zablokowania
                    subtitle={<span>zablokowany: <b>{tile.updated_at}</b></span>}
                    actionIcon={<IconButton><InfoIcon /></IconButton>}
                  >
                    <img src='../../../assets/images/avatar.png' />
                  </GridTile>
                ))}
              </GridList>
            </div>
            </Tab>
          </Tabs>
      </Page>
      </MuiThemeProvider>
    )
  }
}

export default Clients;