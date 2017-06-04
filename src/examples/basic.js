import React from 'react';
import { Link } from 'react-router-dom';
import { ModalRoute } from 'react-router-modal';
import './basic.css';

function World() {
  return (
    <div className='basic__modal-content'>
      <h4>*/world</h4>
      <p>
        This is shown for any path that ends with /world
      </p>
    </div>
  );
}

function Hello({match}) {
  return (
    <div className='basic__modal-content'>
      <h4>/basic/hello</h4>
      <p>
        This modal is shown for any path that starts with /basic/hello
      </p>
      <p>
        Other modals with longer routes will appear on top:
      </p>

      <p>
        Clicking on the backdrop area will naivgate to the route specified in its parentPath property.
      </p>

      Try <Link to='/basic/hello/world'>/basic/hello/world</Link>
    </div>
  );
}

export default function BasicExample({match}) {
  return (
    <div>
      <h5>Basic Example</h5>
      <p>
        <Link to='/basic/hello'>/basic/hello</Link>
      </p>
      <p>
        <Link to='/basic/hello/world'>/basic/hello/world</Link>
      </p>
      <p>
        <Link to='/basic/crazy/world'>/basic/crazy/world</Link>
      </p>

      <ModalRoute component={Hello} path={`${match.url}/hello`} parentPath='/basic' />
      <ModalRoute component={World} exact path={`*/world`} parentPath='/basic/hello' />
    </div>
  );
}
