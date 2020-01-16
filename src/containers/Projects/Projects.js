import React, { Component } from 'react';

import UserPage from '../../hoc/UserPage/UserPage';
import ProjectItem from '../../components/Projects/ProjectItem/ProjectItem';

import { ReactComponent as ProjectImage1} from '../../assets/images/flix.png'

import styles from './Projects.module.css';

class Projects extends Component {
    render() {
        const { show, header } = this.props;
        return(
            <UserPage header={header} show={show}>
                <div className={styles.Projects}>
                    <ProjectItem
                        imgPath={ProjectImage1}
                        title="First Project"
                        overview="A project that uses React"/>
                    <ProjectItem
                        imgPath={}
                        title="First Project"
                        overview="A project that uses React"/>
                    <ProjectItem
                        imgPath={}
                        title="First Project"
                        overview="A project that uses React"/>
                    <ProjectItem
                        imgPath={}
                        title="First Project"
                        overview="A project that uses React"/>
                    <ProjectItem
                        imgPath={}
                        title="First Project"
                        overview="A project that uses React"/>
                </div>
            </UserPage>
        );
    };
};

export default Projects;