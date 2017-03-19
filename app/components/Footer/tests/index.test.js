
import { shallow } from 'enzyme';
import React from 'react';

import A from 'components/A';
import Footer from '../index';

describe('<Footer />', () => {
  it('should render the copyright notice', () => {
    const renderedComponent = shallow(
      <Footer />
    );
    expect(renderedComponent.contains(
      <section>
        <p>This project is licensed under the MIT license..</p>
      </section>
    )).toBe(true);
  });

  it('should render the credits', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.contains(
      <section>
        <p>Made with love by <A href="https://twitter.com/mxstbr">Max Stoiber</A>.</p>
      </section>
    )).toBe(true);
  });
});
