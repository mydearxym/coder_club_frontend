/*
 *
 * ThemeContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Helmet from 'react-helmet';
import styles from './styles.scss';

import ThemeLabel from 'components/ThemeLabel';
import Button from 'components/Button';
import { default as AButton } from 'antd/lib/button';
require('antd/lib/button/style');
import Tag from 'antd/lib/tag';
require('antd/lib/tag/style');

import { debounce } from 'react-decoration';

import themeLight from './theme-light.css';
import themeDark from './theme-dark.css';


export class ThemeContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      cur_theme: '',
    };
  }
  /*
   *   componentDidMount() {
   *     console.log('componentsDidMount');
   *   }
   * */
  openRoute = (route) => {
    /* console.log('openRoute3');*/
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

  diekhandleChange() {
    console.log('handleChange');
    this.setState({
      hello: '',
    });
  }

  switchTheme(theme) {
    console.log('switchTheme', theme);

    let curTheme;

    if (theme === 'A') {
      curTheme = themeLight;
    } else {
      curTheme = themeDark;
    }

    this.setState({
      curTheme,
    });
  }

  @debounce(500, true)
  handleDebounce() {
    console.log('handleDebounce');
  }

  render() {
    const curTheme = this.state.cur_theme || themeDark;

    /* console.log('curTheme', curTheme)*/

    return (
      <div >
        <Helmet
          meta={[
            { name: 'description', content: 'Description of ThemeContainer' },
          ]}
          title="ThemeContainer"
        />

        <h2 className={styles.base_on_theme}>base_on_theme</h2>

        <div className={'theme-light'}>
          <AButton onClick={this.handleDebounce}>test debounce</AButton>
          <h2>his h2</h2>
          <div className={'tlable'}>-light/dark theme?</div>
          <Tag color="blue">蓝色</Tag>
          <AButton type="primary">Hello</AButton>
        </div>

        <h2 className={styles.sass_color}>ouside sassman</h2>
        <h1 className={styles.hide_on_tv}>hide_on_tv</h1>

        <div className={styles.themeContainer}>
          <h2 className={styles.sass_color}>i am sass man</h2>
          <div className="theme_green">theme green!</div>
          <input onChange={::this.diekhandleChange} />
          <div className="theme_tomato">theme tomato</div>

          <span><Button onClick={this.switchTheme.bind(this, 'A')}>theme A</Button></span>
          <span><Button onClick={this.switchTheme.bind(this, 'B')}>theme B</Button></span>

          <h2>ThemeLabel</h2>

          <div>
            <ThemeLabel
              hello={false}
              theme={curTheme}
            />
          </div>
          <Button handleRoute={this.openHomePage}>Home</Button>
        </div>
      </div>
    );
  }
}

ThemeContainer.propTypes = {
  changeRoute: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ThemeContainer);
