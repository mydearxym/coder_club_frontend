/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

/* import Img from 'components/Img';*/
import Footer from 'components/Footer';


// 按需加载: https://github.com/ant-design/ant-design/issues/900#issue-127675746
/* import 'antd/dist/antd.css';*/

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

function App(props) {
  return (
    <AppWrapper>
      <Helmet
        defaultTitle="React.js Boilerplate"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' },
        ]}
        titleTemplate="%s - React.js Boilerplate"
      />

      <h1>React 最佳实践!</h1>

      {React.Children.toArray(props.children)}
      <Footer />
    </AppWrapper>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
