import React from 'react';
import { login } from './adapters';


export default class Login extends React.Component {
  constructor(props) {
    super();
    this.state = {
      didError: false,
      username: '',
      password: ''
    };

    this.handleInput = (evt) => {
      const { target } = evt;
      const state = {};
      const name = target.getAttribute('name');
      state[name] = target.value;

      this.setState(state);
    };

    this.handleLogin = (evt) => {
      evt.preventDefault();

      const { username, password } = this.state;
      login(username, password).then((msg) => {
        props.didLogin(msg);
      }, (err) => {
        this.setState({ didError: true, errorMsg: err });
      });
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleLogin}>
          <label htmlFor='username'>Username</label>
          <input name='username' onChange={this.handleInput}/>
          <input name='password' type='password' onChange={this.handleInput} />
          <input type='submit' />
        </form>
      </div>
    );
  }
}
