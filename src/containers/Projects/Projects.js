import React, { Component } from 'react';

import UserPage from '../../hoc/UserPage/UserPage';
import ProjectItem from '../../components/Projects/ProjectItem/ProjectItem';

import styles from './Projects.module.css';

import Flix from '../../assets/images/flix.png';
import Teckdegree_1 from '../../assets/images/teckdegree-1.png';
import Teckdegree_2 from '../../assets/images/teckdegree-2.png';
import Teckdegree_3 from '../../assets/images/teckdegree-3.png';
import Teckdegree_4 from '../../assets/images/teckdegree-4.png';
import Teckdegree_5 from '../../assets/images/teckdegree-5.png';

class Projects extends Component {
    render() {
        const { show, header } = this.props;
        return(
            <UserPage header={header} show={show}>
                <div className={styles.Projects}>
                    <ProjectItem
                        image={Flix} 
                        title="ReactMedia"
                        overview="ReactMedia is built using react"/>
                    <ProjectItem
                        image={Teckdegree_1} 
                        title="ReactMedia"
                        overview="ReactMedia is built using react"/>
                    <ProjectItem
                        image={Teckdegree_2} 
                        title="ReactMedia"
                        overview="ReactMedia is built using react"/>
                    <ProjectItem
                        image={Teckdegree_3} 
                        title="ReactMedia"
                        overview="ReactMedia is built using react"/>
                    <ProjectItem
                        image={Teckdegree_4} 
                        title="ReactMedia"
                        overview="ReactMedia is built using react"/>
                    <ProjectItem
                        image={Teckdegree_5} 
                        title="ReactMedia"
                        overview="ReactMedia is built using react"/>
                </div>
            </UserPage>
        );
    };
};

export default Projects;