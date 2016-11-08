/**
 * Testing the NotFoundPage
 */

import { shallow } from 'enzyme';
import React from 'react';

import H1 from 'components/H1';
import { NotFound } from '../index';

describe('<NotFound />', () => {
  it('should render the Page Not Found text', () => {
    const renderedComponent = shallow(
      <NotFound />
    );
    expect(renderedComponent.contains(<H1>Page not found.</H1>)).toEqual(true);
  });
});
