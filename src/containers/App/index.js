import React, { Component } from 'react';

class App extends Component {
  render() {
    if(localStorage.loggedIn) {
      return (
        <div className="App">
          <center>
            <h1>You're logged in Daddio, check out your Kanban board</h1>
          </center>
        </div>
      );
    }
    else {
      return(
        <div className="App">
          <center>
            <h1>You gotta log in to view your Kanban Boards</h1>
          </center>
        </div>
      );
    }
  }
}

export default App;