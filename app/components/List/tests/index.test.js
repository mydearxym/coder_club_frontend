import { shallow } from 'enzyme';
import React from 'react';

import ListItem from 'components/ListItem';
import List from '../index';

describe('<List />', () => {
  it('should render the component if no items are passed', () => {
    const renderedComponent = shallow(
      <List component={ListItem} />
    );
    expect(renderedComponent.find(ListItem)).toBeDefined();
  });

  it('should render the items', () => {
    const items = [
      { id: 1, name: 'Hello' },
      { id: 2, name: 'World' },
    ];
    const component = ({ item }) => <ListItem>{item.name}</ListItem>; // eslint-disable-line react/prop-types

    const renderedComponent = shallow(
      <List component={component} items={items} />
    );

    expect(renderedComponent.find(component)).toHaveLength(2);
    expect(renderedComponent.find(component).at(0).prop('item')).toBe(items[0]);
    expect(renderedComponent.find(component).at(1).prop('item')).toBe(items[1]);
  });
});
