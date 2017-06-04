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
        Other modals with longer routes will appear to be stacked "on top" of this one. This is because they are rendered later in the document order.
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
        <a href='https://github.com/davidmfoley/react-router-modal-examples/blob/master/src/examples/basic.js'>View Source</a>
      </p>
      <p>
        In this example, two ModalRoutes are defined, one that matches /hello and another that matches */world.
      </p>
      <p>
        Depending on the route, either or both of the modals is shown.
      </p>
      <p>
        <Link to='/basic/hello'>./hello</Link>
      </p>
      <p>
        <Link to='/basic/hello/world'>./hello/world</Link>
      </p>
      <p>
        <Link to='/basic/crazy/world'>./crazy/world</Link>
      </p>

      <ModalRoute component={Hello} path={`${match.url}/hello`} parentPath='/basic' />
      <ModalRoute component={World} exact path={`*/world`} parentPath='/basic/hello' />
    </div>
  );
}
