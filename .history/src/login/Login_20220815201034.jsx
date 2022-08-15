import React from 'react';
import styles from './login.module.css';
const Login = () => {
    return (
        <div className={styles.loginBox}>
            <h1>Good Geul</h1>
            <p>좋은 글 그리고 나의 글</p>
            <div className={styles.loginButtons}>
                <button className={styles.googleLoginButton}>Google로 로그인</button>
                <button className={styles.githubLoginButton}>Github로 로그인</button>
            </div>
        </div>
    );
};

export default Login;