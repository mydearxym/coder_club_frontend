/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';

/* import Img from 'components/Img';*/
import Footer from 'components/Footer';
/* import Banner from './banner-metal.jpg';
 * import A from 'components/A';
 * */
import styles from './styles.css';

// 按需加载: https://github.com/ant-design/ant-design/issues/900#issue-127675746
/* import 'antd/dist/antd.css';*/

/* <A className={styles.logoWrapper} href="https://twitter.com/mxstbr">*/
/* <Img className={styles.logo} src={Banner} alt="react-boilerplate - Logo" />*/
/* </A>*/

function App(props) {
  return (
    <div className={styles.wrapper}>
      <Helmet
        defaultTitle="React.js Boilerplate"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' },
        ]}
        titleTemplate="%s - React.js Boilerplate"
      />

      <h1>React 最佳实践!</h1>

      {props.children}
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
