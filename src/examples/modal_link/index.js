import React from 'react';
import { ModalLink } from 'react-router-modal';

function ExampleModalContent() {
  return (
    <div>
      Hello
    </div>
  );
}
export default class ModalLinkExample extends React.Component {
  state = { show: false }

  render() {
    const { match } = this.props;

    return (
      <div>
        <h5>ModalLink example</h5>
        <p>
          <a href='https://github.com/davidmfoley/react-router-modal-examples/blob/master/src/examples/modal_link'>View Source</a>
        </p>

        <p>
          <ModalLink path={`${match.url}/modal-route`} component={ExampleModalContent}>
            Basic Modal Link
          </ModalLink>
        </p>
      </div>
    );
  }
}
