/**
 * Test the repo list item
 */

import { shallow, mount } from 'enzyme';
import React from 'react';

import ListItem from 'components/ListItem';
import { RepoListItem } from '../index';

describe('<RepoListItem />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = {
      owner: {
        login: 'mxstbr',
      },
      html_url: 'https://github.com/mxstbr/react-boilerplate',
      name: 'react-boilerplate',
      open_issues_count: 20,
      full_name: 'mxstbr/react-boilerplate',
    };
  });

  it('should render a ListItem', () => {
    const renderedComponent = shallow(
      <RepoListItem item={item} />
    );
    expect(renderedComponent.find(ListItem).length).toBe(1);
  });

  it('should not render the current username', () => {
    const renderedComponent = mount(
      <RepoListItem currentUser={item.owner.login} item={item} />
    );
    expect(renderedComponent.text()).not.toContain(item.owner.login);
  });

  it('should render usernames that are not the current one', () => {
    const renderedComponent = mount(
      <RepoListItem currentUser="nikgraf" item={item} />
    );
    expect(renderedComponent.text()).toContain(item.owner.login);
  });

  it('should render the repo name', () => {
    const renderedComponent = mount(
      <RepoListItem item={item} />
    );
    expect(renderedComponent.text()).toContain(item.name);
  });

  it('should render the issue count', () => {
    const renderedComponent = mount(
      <RepoListItem item={item} />
    );
    expect(renderedComponent.text()).toContain(item.open_issues_count);
  });

  it('should render the IssueIcon', () => {
    const renderedComponent = mount(
      <RepoListItem item={item} />
    );
    expect(renderedComponent.find('svg').length).toBe(1);
  });
});
