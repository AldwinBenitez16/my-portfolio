import React, { Component } from 'react';

import UserView from '../../components/User/UserView/UserView';
import UserControls from '../../components/User/UserControls/UserControls';
import Projects from '../Projects/Projects';
import Contacts from '../Contacts/Contacts';

import { UserProvider } from './UserContext';

import styles from './User.module.css';

class User extends Component {

    state={
        showProjects: true,
        showContacts: false
    }

    toggleUserView= (type) => {
        const showState = {...this.state}; // create a copy of state
        showState.showProjects = false;
        showState.showContacts = false;
        showState[`show${type}`] = true;
        this.setState(showState); // set the corresponding component to show and the rest to hide
    };
    
    render() {
        const user={ // the data the provider will contain
            toggleUserView: this.toggleUserView
        };

        let userViewContent = null;
        if(this.state.showProjects) {
            userViewContent = <Projects />;
        }
        if(this.state.showContacts) {
            userViewContent = <Contacts />;
        }

        return(
            <UserProvider value={user}>
                <div className={styles.User}>
                    <UserControls /> 
                    <UserView>
                        {userViewContent}
                    </UserView>
                </div>
            </UserProvider>
        );
    };
};

// usercontrols - sets which view is to be used
// userview - takes the component and shows it according to the usercontrols

export default User;