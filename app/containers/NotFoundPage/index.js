/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Button from 'components/Button';
import H1 from 'components/H1';

export function NotFound(props) {
  return (
    <article>
      <H1>Page not found.</H1>
      <Button
        handleRoute={function redirect() {
          props.dispatch(push('/'));
        }}
      >
        Home
      </Button>
    </article>
  );
}

NotFound.propTypes = {
  dispatch: PropTypes.func,
};

// Wrap the component to inject dispatch and state into it
export default connect()(NotFound);
