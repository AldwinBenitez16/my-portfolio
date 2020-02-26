import React from 'react';

import Button from '../../UI/Button/Button';

import styles from './ProjectItem.module.css';

import { ReactComponent as ViewIcon } from '../../../assets/svgs/view-icon.svg';
import { ReactComponent as SourceIcon } from '../../../assets/svgs/source-icon.svg';

const projectItem = ({ title, image, overview, view, source }) => {

    return(
        <div className={styles.ProjectItem}>
            <div className={styles.ProjectItemImage}>
                <img 
                    src={image}
                    alt={title}/>
            </div>
            <div className={styles.ProjectInfo}> 
                <h3>{title}</h3>
                <h4>Overview</h4>
                <p>{overview}</p>
                <div className={styles.ButtonContainer}>
                    <a className={styles.Link} href={`${view}`} target="_blank" rel="noopener noreferrer">
                        <Button 
                            action="View GitHub"
                            type="Success"> 
                                <ViewIcon />
                        </Button>
                    </a>
                    <a className={styles.Link} href={`${source}`} target="_blank" rel="noopener noreferrer">
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
                    </a>
                </div>
            </div>
        </div>
    );
};

export default projectItem;