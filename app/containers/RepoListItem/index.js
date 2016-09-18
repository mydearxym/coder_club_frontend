/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { selectCurrentUser } from 'containers/App/selectors';

import ListItem from 'components/ListItem';
import IssueIcon from 'components/IssueIcon';
import A from 'components/A';

import styles from './styles.css';

export class RepoListItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    /* const item = this.props.item;*/
    const currentUser = this.props.currentUser;
    let nameprefix = '';

    // If the repository is owned by a different person than we got the data for
    // it's a fork and we should show the name of the owner
    if (this.props.item.owner.login !== currentUser) {
      nameprefix = `${this.props.item.owner.login}/`;
    }

    // Put together the content of the repository
    const content = (
      <div className={styles.linkWrapper}>
        <A
          className={styles.linkRepo}
          href={this.props.item.html_url}
          target="_blank"
        >
          {nameprefix + this.props.item.name}
        </A>
        <A
          className={styles.linkIssues}
          href={`${this.props.item.html_url}/issues`}
          target="_blank"
        >
          <IssueIcon className={styles.issueIcon} />
          {this.props.item.open_issues_count}
        </A>
      </div>
    );

    // Render the content into a list item
    return (
      <ListItem item={content} key={`repo-list-item-${this.props.item.full_name}`} />
    );
  }
}

/* const itemShape = React.PropTypes.shape({*/
  /* name: React.PropTypes.string,*/
  /* owner: React.PropTypes.object,*/
  /* html_url: React.PropTypes.string,*/
  /* full_name: React.PropTypes.string,*/
  /* open_issues_count: React.PropTypes.number,*/
  /* });*/

RepoListItem.propTypes = {
  item: React.PropTypes.shape({
    name: React.PropTypes.string,
    owner: React.PropTypes.object.isRequired,
    html_url: React.PropTypes.string,
    full_name: React.PropTypes.string,
    open_issues_count: React.PropTypes.number,
  }),
  /* item: itemShape,*/
  /* item: React.PropTypes.object,*/
  currentUser: React.PropTypes.string,
};

export default connect(createSelector(
  selectCurrentUser(),
  (currentUser) => ({ currentUser })
))(RepoListItem);
