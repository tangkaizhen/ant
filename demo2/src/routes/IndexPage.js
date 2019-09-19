import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Button } from 'antd';
function IndexPage() {
  return (
    <div className={styles.normal}>
      <Button>click me</Button>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
