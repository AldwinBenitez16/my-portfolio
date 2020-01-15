import React from 'react';
import { UserConsumer } from '../../../../containers/User/UserContext';

import styles from './ControlItem.module.css';

const controlItem = (props) => {
    return(
        <UserConsumer>
            {value => (
                <div 
                    title={`View ${props.type}`}
                    className={styles.ControlItem}
                    onClick={() => value.toggleUserView(props.type)}>
                        {props.children}
                </div>
            )}
        </UserConsumer>
    );
};

export default controlItem;