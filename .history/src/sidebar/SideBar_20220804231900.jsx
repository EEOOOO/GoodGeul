import React, { Component } from 'react';
import styles from './sidebar.module.css';
class SideBar extends Component {
    render() {
        return (
            <div>
                <p className={styles.userName}>WooYoon Lee</p>
            </div>
        );
    }
}

export default SideBar;