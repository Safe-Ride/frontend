import React from 'react';
import styles from './Loader.module.css';

const Loader = ({ loading, children }) => {
  if (loading) {
    return (
      <div className={styles['container']}>
        <div className={styles['loader']}></div>
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div>
      {children}
    </div>
  );
};

export default Loader;