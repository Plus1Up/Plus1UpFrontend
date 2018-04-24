import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, DropDownMenu, MenuItem} from 'material-ui';
import {Link} from 'react-router-dom';
import { trainings } from 'services/api';
import './styles.css';

import Page from 'components/Page';

class Trainings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: '',
    };
  }

  componentDidMount() {
      trainings.all(this.clientId)
        .then(response => {
          this.setState({
            ...this.state,
            data: response.data.data
          });
        })
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
            {
              this.state.data
              .map(training =>
                <TableRow key={training.id} hoverable={true}>
                  {(training.weekday == 1 ? 
                    (<TableRowColumn>{training.name}</TableRowColumn>) 
                    : (<TableRowColumn/>)
                  )}
                  {(training.weekday == 2 ? 
                    (<TableRowColumn>{training.name}</TableRowColumn>) 
                    : (<TableRowColumn/>)
                  )}
                  {(training.weekday == 3 ? 
                    (<TableRowColumn>{training.name}</TableRowColumn>) 
                    : (<TableRowColumn/>)
                  )}
                  {(training.weekday == 4 ? 
                    (<TableRowColumn>{training.name}</TableRowColumn>) 
                    : (<TableRowColumn/>)
                  )}
                  {(training.weekday == 5 ? 
                    (<TableRowColumn>{training.name}</TableRowColumn>) 
                    : (<TableRowColumn/>)
                  )}
                  {(training.weekday == 6 ? 
                    (<TableRowColumn>{training.name}</TableRowColumn>) 
                    : (<TableRowColumn/>)
                  )}
                  {(training.weekday == 7 ? 
                    (<TableRowColumn>{training.name}</TableRowColumn>) 
                    : (<TableRowColumn/>)
                  )}
                  </TableRow>
              )
            }
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Trainings;
