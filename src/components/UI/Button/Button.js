import React from 'react';

import styles from './Button.module.css';

const button = ({ type, dimensions, action, children }) => {
    return(
        <button 
            title={action}
            style={dimensions}
            className={[styles.Button, styles[`${type}`]].join(' ')}>
            {children}
        </button>
    );
};

export default button;