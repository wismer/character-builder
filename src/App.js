import React, { Component } from 'react';
import './App.css';
import { playerEndpoint } from './adapters';
import Login from './login';
import { Link } from 'react-router';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      token: null,
      players: []
    };

    this.didLogin = (payload) => {
      payload.json().then(r => {
        this.setState({ token: r.data.id, isAuthenticated: true });
      });
    };
  }

  render() {
    return (
      <div className="App">
      {/* dashboard here.... */}
        <div className='dashboard'>
          <article>
            <header>DASHBOARD</header>
            <section>
              <Link to='/create/race'>Make a new Character</Link>
            </section>
          </article>

          <article>
            {this.props.children}
          </article>
        </div>

        {this.state.isAuthenticated ? "" : <Login didLogin={this.didLogin} />}
      </div>
    );
  }

  handleClick() {
    playerEndpoint('GET').then(players => {
      console.log(players);
    });
  }
}

export default App;
