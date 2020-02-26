import React from 'react';

import styles from './ContactItem.module.css';

const contactItem = ({ SVGIcon, title, info, mail }) => {
    
    let contactItem = (
        <div className={styles.ContactItem} >
            <SVGIcon />
            <div className={styles.ContactItemTitle}>
                <h2>{title}</h2>
                <p>{info}</p>
            </div>
        </div>
    );
    
    if(mail) {
        contactItem = (
            <div className={styles.ContactItem} >
            <SVGIcon />
            <div className={styles.ContactItemTitle}>
                <h2>{title}</h2>
                <a href={`mailto:${mail}`} target="_top" rel="noopener noreferrer">{info}</a>
            </div>
        </div>
        );
    }

    return contactItem;
};

export default contactItem;