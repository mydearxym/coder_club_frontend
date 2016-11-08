import { shallow } from 'enzyme';
import React from 'react';

import LoadingIndicator from '../index';

describe('<LoadingIndicator />', () => {
  it('should render 14 divs', () => {
    const renderedComponent = shallow(
      <LoadingIndicator />
    );
    expect(renderedComponent.find('div').length).toBe(14);
  });
});
