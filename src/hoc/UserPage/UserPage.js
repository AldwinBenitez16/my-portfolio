import React, { Component } from 'react';

import styles from './UserPage.module.css';

class Projects extends Component {


    render() {
        const { show, header, children } = this.props;

        let showClass = styles.Hide;
        if(show) {
            showClass = styles.Show;
        }

        return(
            <div className={showClass}>
                <h2 className={styles.Header}>{header}</h2>
                {children}
            </div>
        );
    };
};

export default Projects;