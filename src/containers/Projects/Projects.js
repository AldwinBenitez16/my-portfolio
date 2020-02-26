import React, { Component } from 'react';

import UserPage from '../../hoc/UserPage/UserPage';
import ProjectItem from '../../components/Projects/ProjectItem/ProjectItem';

import styles from './Projects.module.css';

import Flix from '../../assets/images/flix.png';
import Wheel_of_success from '../../assets/images/wheel-of-success.png'; 
import Fit_in from '../../assets/images/fit-in.png';
import Gallery from '../../assets/images/photo-gallery.png';

class Projects extends Component {
    render() {
        const { show, header } = this.props;
        return(
            <UserPage header={header} show={show}>
                <div className={styles.Projects}>
                    <ProjectItem
                        image={Flix} 
                        title="ReactMedia"
                        overview="ReactMedia is built using react"
                        view="https://flix-movies.netlify.com"
                        source="https://github.com/AldwinBenitez16/flix" />
                    <ProjectItem
                        image={Wheel_of_success} 
                        title="ReactMedia"
                        overview="ReactMedia is built using react"/>
                    <ProjectItem
                        image={Fit_in} 
                        title="ReactMedia"
                        overview="ReactMedia is built using react"/>
                    <ProjectItem
                        image={Gallery} 
                        title="ReactMedia"
                        overview="ReactMedia is built using react"/>
                </div>
            </UserPage>
        );
    };
};

export default Projects;