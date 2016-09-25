import React, { PropTypes } from 'react';

import styles from './styles.css';

function ListItem(props) {
  /* console.log("props.item", props.item);*/
  return (
    <li className={props.className || styles.item}>
      <div className={styles.itemContent}>
        {props.item}
      </div>
    </li>
  );
}

ListItem.propTypes = {
  className: PropTypes.string,
  item: PropTypes.any,
};

export default ListItem;
