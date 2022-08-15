import React from 'react';
import styles from './login.module.css';
const Login = () => {
    return (
        <div className={styles.loginBox}>
            <h1>Login</h1>
            <button className={styles.googleLoginButton}>Google</button>
            <button className={styles.githubLoginButton}>Github</button>
        </div>
    );
};

export default Login;