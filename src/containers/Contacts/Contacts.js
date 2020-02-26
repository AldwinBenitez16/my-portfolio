import React, { Component } from 'react';

import ContactItem from '../../components/Contacts/ContactItem/ContactItem';

import UserPage from '../../hoc/UserPage/UserPage';

import styles from './Contacts.module.css';

import { ReactComponent as PhoneIcon } from '../../assets/images/phone.svg';
import { ReactComponent as MailIcon } from '../../assets/images/mail.svg';

class Contacts extends Component {
    render() {
        const { show, header } = this.props;
        return(
            <UserPage header={header} show={show}>
                <div className={styles.Contacts}>
                    <ContactItem  
                        SVGIcon={MailIcon}
                        title="Email"
                        info="aldwin.benitez@yahoo.com"
                        mail="aldwin.benitez@yahoo.com" />
                    <ContactItem 
                        SVGIcon={PhoneIcon}
                        title="Phone"
                        info="(613) - 299 - 0016" />
                </div>
            </UserPage>
        );
    };
};

export default Contacts;