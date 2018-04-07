import React, { Component } from 'react';
import { MuiThemeProvider, TextField } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';

import { clients } from 'services/api';
import Page from 'components/Page';
import Input from 'components/FormElements/Input';
import Form from 'components/FormElements/Form';
import './index.css'

const hideAutoFillColorStyle = {
  WebkitBoxShadow: '0 0 0 1000px white inset'
};  
const hintStyle = { 
  zIndex: '1' 
};

class ClientAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        mail_address: '',
        password: '',
        name: '',
        last_name: '',
        coach_id: ''
      },
      error: '',
    };
  }

  componentDidMount() {}

  onHandleClick = () => {
    clients.new(this.state.form).then((response) => {
      console.log(response)
      alert('Nowy klient został dodany.');
    }).catch((error) => {
      console.log(error)
      this.setState({ error: response.error })
    })
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ form: {
      ...this.state.form,
      [name]: value,
    }});
  }

  render() {
    return (
      <MuiThemeProvider>
      <Page>
        <Form>
          <h2>Dodawanie klienta:</h2>
           <div>
              <TextField
                name="coach_id"
                type='number'
                floatingLabelText="Trener"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
              <TextField
                name="name"
                defaultValue=""
                floatingLabelText="Imię"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
                <TextField
                name="last_name"
                defaultValue=""
                floatingLabelText="Nazwisko"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
                <TextField
                name="mail_address"
                defaultValue=""
                floatingLabelText="Adres email"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
                <TextField
                name="password"
                type='password'
                defaultValue=""
                floatingLabelText="Hasło"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
                />
              <RaisedButton className="add_button" label="DODAJ" onClick={this.onHandleClick} />
            </div>
        </Form>
      </Page>
      </MuiThemeProvider>
    )
  }
}

export default ClientAdd;