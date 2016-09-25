/*
 * FeaturePage
 *
 * List all the features
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

import Button from 'components/Button';
import H1 from 'components/H1';

import styles from './styles.css';

export class FeaturePage extends React.Component {
  openHomePage = () => {
    this.props.dispatch(push('/'));
  };

  render() {
    return (
      <div>
        <Helmet
          meta={[
            { name: 'description', content: 'Feature page of React.js Boilerplate application' },
          ]}
          title="Feature Page"
        />
        <H1>Features</H1>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <p className={styles.listItemTitle}>Quick scaffolding</p>
            <p>Automate the creation of components, containers, routes, selectors
            and sagas - and their tests - right from the CLI!</p>
          </li>

          <li className={styles.listItem}>
            <p className={styles.listItemTitle}>Instant feedback</p>
            <p>Enjoy the best DX and code your app at the speed of thought! Your
            saved changes to the CSS and JS are reflected instantaneously
            without refreshing the page. Preserve application state even when
            you update something in the underlying code!</p>
          </li>

          <li className={styles.listItem}>
            <p className={styles.listItemTitle}>Predictable state management</p>
            <p>Unidirectional data flow allows for change logging and time travel
            debugging.</p>
          </li>

          <li className={styles.listItem}>
            <p className={styles.listItemTitle}>Next generation JavaScript</p>
            <p>Use template strings, object destructuring, arrow functions, JSX
            syntax and more, today.</p>
          </li>

          <li className={styles.listItem}>
            <p className={styles.listItemTitle}>Next generation CSS</p>
            <p>Write composable CSS that's co-located with your components for
            complete modularity. Unique generated class names keep the
            specificity low while eliminating style clashes. Ship only the
            styles that are on the page for the best performance.</p>
          </li>

          <li className={styles.listItem}>
            <p className={styles.listItemTitle}>Industry-standard routing</p>
            <p>It's natural to want to add pages (e.g. `/about`) to your
            application, and routing makes this possible.</p>
          </li>

          <li className={styles.listItem}>
            <p className={styles.listItemTitle}>Offline-first</p>
            <p>The next frontier in performant web apps: availability without a
            network connection from the instant your users load the app.</p>
          </li>
        </ul>
        <Button handleRoute={this.openHomePage}>Home</Button>
      </div>
    );
  }
}

FeaturePage.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(FeaturePage);
