import React, { Component } from 'react';

import styles from './UserPage.module.css';

class Projects extends Component {


    render() {
        const { show, header, children } = this.props;

        let opacityClass = styles.Hide;
        let speed = '.3s';
        if(show) {
            opacityClass = styles.Show;
            speed = '1s';
        }

        return(
            <div style={{ transition: `opacity ${speed} ease-in-out` }} className={[styles.UserOverlay, opacityClass].join(' ')} >
                <h2 className={styles.Header}>{header}</h2>
                {children}
            </div>
        );
    };
};

export default Projects;