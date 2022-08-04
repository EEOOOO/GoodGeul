import React, { Component } from 'react';
import styles from './sidebar.module.css';
class SideBar extends Component {
    render() {
        return (
            <div className={styles.sideNavBar}>
                <p className={styles.userName}>WooYoon Lee</p>
                <ul className={styles.menuList}>
                    <li className={styles.homeMenu}>Home</li>
                    <li className={styles.myBookMenu}>MyBook</li>
                    <li className={styles.messageMenu}>Message</li>
                    <li className={styles.settingMenu}>Setting</li>
                </ul>
            </div>
        );
    }
}

export default SideBar;