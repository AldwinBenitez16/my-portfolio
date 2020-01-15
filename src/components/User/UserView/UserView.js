import React from 'react';

import IconBar from './IconBar/IconBar';

import styles from './UserView.module.css';

const userView = (props) => {
    return (
        <div className={styles.UserView}>
            <IconBar />
            {props.children}
        </div>
    );
};

export default userView;