import React, { Component } from 'react';
import styles from './sidebar.module.css';
class SideBar extends Component {
    render() {
        return (
            <div>
                <p className={styles.userName}>WooYoon Lee</p>
                <ul className={styles.menuList}>
                    <li className={homeMenu}>Home</li>
                    <li className={myBookMenu}>Home</li>
                    <li className={messageMenu}>Home</li>
                    <li className={settingMenu}>Home</li>
                </ul>
            </div>
        );
    }
}

export default SideBar;