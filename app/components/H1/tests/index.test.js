import { shallow } from 'enzyme';
import React from 'react';

import H1 from '../index';

describe('<H1 />', () => {
  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H1>{children}</H1>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
