import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { ModalContainer } from 'react-router-modal';
import BasicExample from './examples/basic';
import ChildrenExample from './examples/children';
import ModalLinkExample from './examples/modal_link';
import MatchParamsExample from './examples/match_params';
import Home from './home';
import NotFound from './not_found';

import './App.css';
import 'react-router-modal/css/react-router-modal.css';

class App extends Component {
  render() {
    const url = `/react-router-modal-examples`;
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <div className="App-header">
              <h2>react-router-modal</h2>
              <h5>Example Usage</h5>
            </div>

            <div className="App-main">
              <div className="App-nav">
                <h3>Examples</h3>
                <ul>
                  <li>
                    <Link to={`${url}/basic`}>Basic</Link>
                  </li>
                  <li>
                    <Link to={`${url}/children`}>Children</Link>
                  </li>
                  <li>
                    <Link to={`${url}/modal_link`}>ModalLink</Link>
                  </li>
                  <li>
                    <Link to={`${url}/match_params`}>Using match.params</Link>
                  </li>
                </ul>
              </div>

              <div className="App-content">
                <Switch>
                  <Route path={`${url}/basic`} component={BasicExample} />
                  <Route path={`${url}/children`} component={ChildrenExample} />
                  <Route path={`${url}/modal_link`} component={ModalLinkExample} />
                  <Route path={`${url}/match_params`} component={MatchParamsExample} />
                  <Route path={url} component={Home} exact/>
                  <Route path='*' component={NotFound} />
                </Switch>
              </div>
            </div>

            <ModalContainer />
          </div>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
