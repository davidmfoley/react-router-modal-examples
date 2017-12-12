import React from 'react';
import { Link } from 'react-router-dom';
import { ModalRoute } from 'react-router-modal';
import './index.css';

const UserProfile = ({match}) =>  (
  <div>
    <p>
      userId: {match.params.userId}
    </p>
  </div>
);

const Example = ({match}) => {
  return (
    <div>
      <h5>Using match.params</h5>

      <p>
        <a href='https://github.com/davidmfoley/react-router-modal-examples/blob/master/src/examples/parent_path/index.js'>View Source</a>
      </p>


      <p>
        The current route params are provided to your modal component by the <a href='https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/match.md'>match</a> prop.
      </p>

      <p>
        For example, if we have a list of users, we may wish to show information about a particular user when clicked:
      </p>

      <div>
        <ul className='match-params__user-list'>
          <li>
            <Link to={`${match.url}/users/42`}>User 42</Link>
          </li>

          <li>
            <Link to={`${match.url}/users/77`}>User 77</Link>
          </li>
        </ul>
      </div>

      <ModalRoute path={`${match.url}/users/:userId`} parentPath={match.url} component={UserProfile} />
    </div>
  );
};

export default Example;
