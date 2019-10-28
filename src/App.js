import React,  { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import googleService from './service/google.service'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App"> 
         <GoogleLogin
            clientId="705645278924-tj9tgjjbkv9h8mdj4mdbohpo860ke39d.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.success}
            onFailure={this.success}
            cookiePolicy={'single_host_origin'}
            scope="https://www.googleapis.com/auth/drive"
      /> 

      </div>
    );
  }

  success = (code) => {
    googleService.sendToken(code);
  }
}

export default App;
