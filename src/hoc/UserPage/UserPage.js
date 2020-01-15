import React, { Component } from 'react';

import styles from './UserPage.module.css';

class Projects extends Component {


    render() {
        const { show, header, children } = this.props;
        let opacity = 0.1;
        let showClass = null;
        if(!show) {

        }
        if(show) {

        }

        return(
            <div className={styles.fadeIn} key={header} >
            <h2 className={styles.Header}>{header}</h2>
                {children}
            </div>
        );
    };
};

export default Projects;