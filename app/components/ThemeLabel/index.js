/**
*
* ThemeLabel
*
*/

import React from 'react';

import styles from './styles.css';

function ThemeLabel( { theme } ) {
  return (
    <div className={ theme.label + ' ' + styles.themeLabel}>
      这是 label 组件, 用来测试主题
    </div>
  );
}

export default ThemeLabel;
