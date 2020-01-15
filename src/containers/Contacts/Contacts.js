import React, { Component } from 'react';

import UserPage from '../../hoc/UserPage/UserPage';

import styles from './Contacts.module.css';

class Contacts extends Component {
    render() {
        const { show, header } = this.props;
        return(
            <UserPage header={header} show={show}>
                <div className={styles.Contacts}>

                </div>
            </UserPage>
        );
    };
};

export default Contacts;