import React from 'react';

import Button from '../../UI/Button/Button';

import styles from './ProjectItem.module.css';

import { ReactComponent as GitIcon } from '../../../assets/svgs/git-circle-icon.svg';
import { ReactComponent as SourceIcon } from '../../../assets/svgs/source-icon.svg';

const projectItem = ({ title, imgPath, overview }) => {
    return(
        <div className={styles.ProjectItem}>
            <img 
                src={imgPath}
                alt={title}/>
            <div> 
                <h3>{title}</h3>
                <p>{overview}</p>
                <div className={styles.ButtonContainer}>
                    <Button 
                        dimensions={{
                            width: '40px',
                            height: '40px',
                            opacity: '.95'
                        }}
                        action="View GitHub"
                        type="Success">
                        <GitIcon />
                    </Button>
                    <Button 
                        dimensions={{
                            width: '40px',
                            height: '40px',
                            opacity: '.95'
                        }}
                        action="View Source"
                        type="Success">
                        <SourceIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default projectItem;