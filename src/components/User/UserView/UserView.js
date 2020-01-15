import React from 'react';

import IconBar from './IconBar/IconBar';

import styles from './UserView.module.css';

const userView = ({ UserComponent, rest }) => {
    return (
        <div className={styles.UserView}>
            <IconBar />
        </div>
    );
};

export default userView;