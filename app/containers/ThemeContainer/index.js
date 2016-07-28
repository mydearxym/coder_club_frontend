/*
 *
 * ThemeContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Helmet from 'react-helmet';
import styles from './styles.css';

import ThemeLabel from 'components/ThemeLabel';
import Button from 'components/Button';

import themeLight from './theme-light.css';
import themeDark from './theme-dark.css';


export class ThemeContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      cur_theme: '',
    };
  }

  openRoute = (route) => {
    console.log('openRoute3');
    /* debugger*/
    this.props.changeRoute(route);
  };

  /**
   * Changed route to '/features'
   */
  openHomePage = () => {
    console.log('openHomePage');
    this.openRoute('/');
  };

  switchTheme(theme) {
    console.log('switchTheme', theme);

    let cur_theme = '';
    if (theme === 'A') {
      cur_theme = themeLight;
    } else {
      cur_theme = themeDark;
    }

    this.setState({
      cur_theme,
    });
  }

  render() {
    const cur_theme = this.state.cur_theme || themeDark;

    return (
      <div className={styles.themeContainer}>
        <Helmet
          title="ThemeContainer"
          meta={[
            { name: 'description', content: 'Description of ThemeContainer' },
          ]}
        />

        <div className="theme_green">theme green</div>
        <div className="theme_tomato">theme tomato</div>
        <div className={`${styles.base_on_theme}  theme_tomato`}>base_on_theme</div>

        <span><Button onClick={this.switchTheme.bind(this, 'A')}>theme A</Button></span>
        <span><Button onClick={this.switchTheme.bind(this, 'B')}>theme B</Button></span>

        <h2>ThemeLabel</h2>
        <ThemeLabel theme={cur_theme} />
        <Button handleRoute={this.openHomePage}>Home</Button>

      </div>
    );
  }
}

ThemeContainer.propTypes = {
  changeRoute: React.PropTypes.func,
}

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ThemeContainer);
