import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { ModalContainer } from 'react-router-modal';
import BasicExample from './examples/basic';

import './App.css';
import 'react-router-modal/css/react-router-modal.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <div className="App-header">

              <h3>Examples</h3>
              <div>
                <Link to='/basic'>Basic</Link>
              </div>
            </div>

            <Switch>
              <Route path='/basic' component={BasicExample} />
            </Switch>
            <ModalContainer />
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
