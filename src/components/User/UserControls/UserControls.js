import React from 'react';

import ControlItem from './ControlItem/ControlItem';

import { ReactComponent as ProjectsIcon } from '../../../assets/svgs/projects.svg';
import { ReactComponent as ContactIcon } from '../../../assets/svgs/contacts.svg';

import styles from './UserControls.module.css';

// Projects
// About Me
// Contact Me

const userControls = () => {
    return (
        <div className={styles.UserControls}>
            <ControlItem type='Projects'>
                <ProjectsIcon />
            </ControlItem>
            <ControlItem type='Contacts'>
                <ContactIcon />
            </ControlItem>
        </div>
    );
};

export default userControls;