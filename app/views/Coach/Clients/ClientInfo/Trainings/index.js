import React, {Component} from "react";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, DropDownMenu, MenuItem} from "material-ui";
import {Link} from "react-router-dom";
import { trainings } from "services/api";
import "./styles.css";

import Page from "components/Page";

class Trainings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mondays: [],
      tuesdays: [],
      wednesdays: [],
      thursdays: [],
      fridays: [],
      saturdays: [],
      sundays: [],
      error: "",
    };
  }

  componentDidMount() {
      trainings.all(this.clientId)
        .then((response) => {
          this.setState({
            ...this.state,
            mondays: response.data.data.filter((day) => day.weekday === 0),
            tuesdays: response.data.data.filter((day) => day.weekday === 1),
            wednesdays: response.data.data.filter((day) => day.weekday === 2),
            thursdays: response.data.data.filter((day) => day.weekday === 3),
            fridays: response.data.data.filter((day) => day.weekday === 4),
            saturdays: response.data.data.filter((day) => day.weekday === 5),
            sundays: response.data.data.filter((day) => day.weekday === 6),
          });
        });
  }

  get clientId() {
    return this.props.id;
  }

  render() {
    return (
      <div>
        <div className='container'>
          <Table displaySelectAll={false} selectable={false}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Poniedziałek</TableHeaderColumn>
                <TableHeaderColumn>Wtorek</TableHeaderColumn>
                <TableHeaderColumn>Środa</TableHeaderColumn>
                <TableHeaderColumn>Czwartek</TableHeaderColumn>
                <TableHeaderColumn>Piątek</TableHeaderColumn>
                <TableHeaderColumn>Sobota</TableHeaderColumn>
                <TableHeaderColumn>Niedziela</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              <TableRow hoverable={true}>
                <TableRowColumn>
                {
                  this.state.mondays
                  .map((training) => 
                    <p>{training.name}</p>
                  )
                }
                </TableRowColumn>
                <TableRowColumn>
                {
                  this.state.tuesdays
                  .map((training) => 
                    <p>{training.name}</p>
                  )
                }
                </TableRowColumn>
                <TableRowColumn>
                {
                  this.state.wednesdays
                  .map((training) => 
                    <p>{training.name}</p>
                  )
                }
                </TableRowColumn>
                <TableRowColumn>
                {
                  this.state.thursdays
                  .map((training) => 
                    <p>{training.name}</p>
                  )
                }
                </TableRowColumn>
                <TableRowColumn>
                {
                  this.state.fridays
                  .map((training) => 
                    <p>{training.name}</p>
                  )
                }
                </TableRowColumn>
                <TableRowColumn>
                {
                  this.state.saturdays
                  .map((training) => 
                    <p>{training.name}</p>
                  )
                }
                </TableRowColumn>
                <TableRowColumn>
                {
                  this.state.sundays
                  .map((training) => 
                    <p>{training.name}</p>
                  )
                }
                </TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Trainings;
