import React from 'react';

import styles from './IconBar.module.css';

import { ReactComponent as GitIcon } from '../../../../assets/svgs/git-icon.svg';
import { ReactComponent as LinkedInIcon } from '../../../../assets/svgs/linked-in-icon.svg';
import { ReactComponent as ResumeIcon } from '../../../../assets/svgs/resume-icon.svg';
import resume from '../../../../assets/files/resume.pdf';

const iconBar = () => {
    return(
        <div className={styles.IconBar}>
            <h1 className={styles.Name}>Aldwin <span className={styles.Extend}>Benitez</span></h1>
            <div className={styles.IconContainer}>
                <a href="https://github.com/AldwinBenitez16" target="_blank" rel="noopener noreferrer"><GitIcon /></a>
                <a href={resume} download><ResumeIcon /></a>
                <a href="https://www.linkedin.com/in/aldwin-benitez-35500b1a3/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
            </div>
        </div>
    );
};

export default iconBar;