import React from 'react';

import styles from './IconBar.module.css';

import { ReactComponent as GitIcon } from '../../../../assets/svgs/git-icon.svg';
import { ReactComponent as LinkedInIcon } from '../../../../assets/svgs/linked-in-icon.svg';
import { ReactComponent as ResumeIcon } from '../../../../assets/svgs/resume-icon.svg';

const iconBar = () => {
    return(
        <div className={styles.IconBar}>
            <h1 className={styles.Name}>Aldwin Benitez</h1>
            <div className={styles.IconContainer}>
                <GitIcon />
                <LinkedInIcon />
                <ResumeIcon />
            </div>
        </div>
    );
};

export default iconBar;