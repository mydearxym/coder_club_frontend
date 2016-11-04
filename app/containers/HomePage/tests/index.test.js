/**
 * Test the HomePage
 */

import { shallow, mount } from 'enzyme';
import React from 'react';

import { HomePage, mapDispatchToProps } from '../index';
import { changeUsername } from '../actions';
import { loadRepos } from '../../App/actions';
import RepoListItem from 'containers/RepoListItem';
import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';

describe('<HomePage />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(
      <HomePage loading />
    );
    expect(renderedComponent.contains(<List component={LoadingIndicator} />)).toBe(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <HomePage
        error={{ message: 'Loading failed!' }}
        loading={false}
      />
    );
    expect(
      renderedComponent
        .text()
        .indexOf('Something went wrong, please try again!')
    ).toBeGreaterThan(-1);
  });

  it('should render fetch the repos on mount if a username exists', () => {
    const submitSpy = jest.fn();
    mount(
      <HomePage
        username="Not Empty"
        onChangeUsername={() => {}}
        onSubmitForm={submitSpy}
      />
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should render the repositories if loading was successful', () => {
    const repos = [{
      owner: {
        login: 'mxstbr',
      },
      html_url: 'https://github.com/mxstbr/react-boilerplate',
      name: 'react-boilerplate',
      open_issues_count: 20,
      full_name: 'mxstbr/react-boilerplate',
    }];
    const renderedComponent = shallow(
      <HomePage
        error={false}
        repos={repos}
      />
    );

    expect(renderedComponent.contains(<List component={RepoListItem} items={repos} />)).toEqual(true);
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeUsername', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeUsername).toBeDefined();
      });

      it('should dispatch changeUsername when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const username = 'mxstbr';
        result.onChangeUsername({ target: { value: username } });
        expect(dispatch).toHaveBeenCalledWith(changeUsername(username));
      });
    });
  });

  describe('onSubmitForm', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onSubmitForm).toBeDefined();
    });

    it('should dispatch loadRepos when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.onSubmitForm();
      expect(dispatch).toHaveBeenCalledWith(loadRepos());
    });

    it('should preventDefault if called with event', () => {
      const preventDefault = jest.fn();
      const result = mapDispatchToProps(() => {});
      const evt = { preventDefault };
      result.onSubmitForm(evt);
      expect(preventDefault).toHaveBeenCalledWith();
    });
  });
});
