import React from 'react';

import styles from './ContactItem.module.css';

const contactItem = ({ SVGIcon, title, info }) => {
    return(
        <div className={styles.ContactItem} >
            <SVGIcon />
            <div className={styles.ContactItemTitle}>
                <h2>{title}</h2>
                <a>{info}</a>
            </div>
        </div>
    ); 
};

export default contactItem;