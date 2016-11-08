/**
 * Testing our Button component
 */

import { shallow } from 'enzyme';
import React from 'react';

import Button from '../index';

const handleRoute = () => {};
const href = 'http://mxstbr.com';
const children = (<h1>Test</h1>);
const renderComponent = (props = {}) => shallow(
  <Button href={href} {...props}>
    {children}
  </Button>
);

describe('<Button />', () => {
  it('should render an <a> tag if no route is specified', () => {
    const renderedComponent = renderComponent({ href });
    expect(renderedComponent.find('a').length).toEqual(1);
  });

  it('should render a button to change route if the handleRoute prop is specified', () => {
    const renderedComponent = renderComponent({ handleRoute });
    expect(renderedComponent.find('button').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should handle click events', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = renderComponent({ onClick: onClickSpy });
    renderedComponent.find('a').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });

  it('should have a className attribute ha', () => {
    const renderedComponent = renderComponent({ className: 'testClassName' });
    expect(renderedComponent.find('a').prop('className')).toBeDefined();
    /* expect(renderedComponent.find('a').prop('className')).toBeUndefined();*/
  });

  it('should not adopt a type attribute when rendering an <a> tag', () => {
    const type = 'text/html';
    const renderedComponent = renderComponent({ href, type });
    expect(renderedComponent.prop('type')).toBeUndefined();
  });

  it('should not adopt a type attribute when rendering a button', () => {
    const type = 'submit';
    const renderedComponent = renderComponent({ handleRoute, type });
    expect(renderedComponent.prop('type')).toBeUndefined();
  });
});
