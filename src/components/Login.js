import React from 'react'
import { Redirect } from 'react-router'
import {
  TextField,
  Button,
  Container
} from '@material-ui/core';
import { Link } from 'react-router-dom';

// class App extends Component {
//   state = {
//     username: '',
//     password: ''
//   }

//   handleTextChange = (e) => {
//     const state = { ...this.state }
//     state[e.target.name] = e.target.value
//     this.setState(state)
//   }


//     window.location.replace("/")
//   }

//   render() {

const Login = (props) => {

  // const login = (e) => {
  //   e.preventDefault()
  //  document.cookie = "loggedIn=true;max-age=60*1000";
  // }

    return (
      <div className="App">
        <Container maxWidth="sm">
          <form className="login-form" 
          // onSubmit={this.login}>
          >
            <TextField
              required
              // onChange={this.handleTextChange}
              // value={this.state.username}
              name="username"
              label="Username"
              type="text" />
            <TextField
              required
              // onChange={this.handleTextChange}
              // value={this.state.password}
              name="password"
              label="Password"
              type="password" />
          <Link to={'/'}>
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary"
              onClick={()=>props.login()}
              >Login</Button>
          </Link>
          </form>
        </Container>
      </div>
    );
};

export default Login; 