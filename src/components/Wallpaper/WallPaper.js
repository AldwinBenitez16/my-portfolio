import React from 'react';

import styles from './WallPaper.module.css';

const wallpaper = (props) => {
    return(
        <div className={styles.WallPaperContainer}>
            <div className={styles.WallPaper}>
                <div className={styles.GradientOverlay}></div>
            </div>
            {props.children}
        </div>
    );
};

export default wallpaper;