import React from 'react';

import Button from '../../UI/Button/Button';

import styles from './ProjectItem.module.css';

import { ReactComponent as GitIcon } from '../../../assets/svgs/git-circle-icon.svg';
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
                    <Button 
                        action="View GitHub"
                        type="Success">
                            <a className={styles.Link} href={`${view}`} target="_blank" ><GitIcon /></a>
                    </Button>
                    <Button 
                        dimensions={{
                            width: '40px',
                            height: '40px',
                            opacity: '.95'
                        }}
                        action="View Source"
                        type="Success">
                            <a className={styles.Link} href={`${source}`} target="_blank" ><SourceIcon /></a>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default projectItem;