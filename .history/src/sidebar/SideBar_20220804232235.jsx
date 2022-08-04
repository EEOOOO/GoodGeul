import React, { Component } from 'react';
import styles from './sidebar.module.css';
class SideNavBar extends Component {
    render() {
        return (
            <div className={styles.sideNavBar}>
                <p className={styles.userName}>WooYoon Lee</p>
                <ul className={styles.menuList}>
                    <li className={homeMenu}>Home</li>
                    <li className={myBookMenu}>MyBook</li>
                    <li className={messageMenu}>Message</li>
                    <li className={settingMenu}>Setting</li>
                </ul>
            </div>
        );
    }
}

export default SideBar;