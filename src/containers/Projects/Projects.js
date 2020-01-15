import React, { Component } from 'react';

import UserPage from '../../hoc/UserPage/UserPage';

import styles from './Projects.module.css';

class Projects extends Component {
    render() {
        const { show, header } = this.props;
        return(
            <UserPage header={header} show={show}>
                <div className={styles.Projects}>
                
                </div>
            </UserPage>
        );
    };
};

export default Projects;