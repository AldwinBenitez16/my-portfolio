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
                        spotlight={true}
                        image={Flix} 
                        title="ReactMedia"
                        overview='ReactMedia is a website made using React and the RESTful API, "The Movie Database". ReactMedia uses react router for navigation, redux for state management and axios to make api calls.'
                        view="https://reactmedia.netlify.com/#/home"
                        source="https://github.com/AldwinBenitez16/flix" />
                    <ProjectItem
                        image={Fit_in} 
                        title="Fit-In"
                        overview="Fit-In is a fitness website template made using Webpack, Sass, and Bootstrap. It explores the file structure and naming convention from the BEM methodology."
                        view="https://fit-in.netlify.com/"
                        source="https://github.com/AldwinBenitez16/work-in" />
                    <ProjectItem
                        image={Wheel_of_success} 
                        title="Wheel of Success"
                        overview="Game Show App is a website game that tests the users skill to correctly guess the letters of a phrase. However, if the user guesses the wrong letters 5 times, they lose. Game Show App uses HTML, CSS and Javascript."
                        view="https://aldwinbenitez16.github.io/Game-Show-App/"
                        source="https://github.com/AldwinBenitez16/Game-Show-App"/> 
                    <ProjectItem
                        image={Gallery} 
                        title="Interactive Photo Gallery "
                        overview="An interactive photo gallery that features the JQuery library, Lightbox. It also uses HTML, CSS, and Javascript."
                        view="https://aldwinbenitez16.github.io/Interactive-Photo-Gallery/"
                        source="https://github.com/AldwinBenitez16/Interactive-Photo-Gallery" />
                </div>
            </UserPage>
        );
    };
};

export default Projects;