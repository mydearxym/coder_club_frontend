
import { shallow } from 'enzyme';
import React from 'react';

import Footer from 'components/Footer';
import App from '../index';

describe('<App />', () => {
  /* it('should render the logo', () => {*/
    /* const renderedComponent = shallow(*/
      /* <App />*/
      /* );*/
    /* expect(renderedComponent.find('Img').length).toEqual(1);*/
    /* });*/

  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <App>
        {children}
      </App>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });

  it('should render the footer', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(Footer).length).toBe(1);
  });
});
