import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalRoute } from 'react-router-modal';

export default class ChildrenExample extends React.Component {
  state = { show: false }

  render() {
    const { match } = this.props;

    return (
      <div>
        <h5>Child elements Example</h5>

        <p>
          <a href='https://github.com/davidmfoley/react-router-modal-examples/blob/master/src/examples/children/index.js'>View Source</a>
        </p>

        <p>
          <button type='button' onClick={() => this.setState({show: true})}>Show Modal</button>
        </p>
        <Link to={`${match.url}/modal-route`}>Navigate to ModalRoute path</Link>

        {this.state.show && (
          <Modal onBackdropClick={() => this.setState({show: false})}>
            <h3>Child elements</h3>
            <p>
              You can also define modal contents as child elements.
            </p>
          </Modal>
        )}

        <ModalRoute path={`${match.url}/modal-route`} parentPath={match.url}>
          <h3>ModalRoute with child elements</h3>
          <p>
            Children work with ModalRoute as well.
          </p>
        </ModalRoute>
      </div>
    );
  }
}
