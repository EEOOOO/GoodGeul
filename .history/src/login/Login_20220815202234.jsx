import React from 'react';
import styles from './login.module.css';
imp
const Login = () => {
    const onLogin = (event) => {

    }
    return (
        <div className={styles.loginBox}>
            <h1>Good Geul</h1>
            <p>좋은 글, 좋아하는 글, 너의 글 그리고 나의 글</p>
            <div className={styles.loginButtons}>
                <button onClick={onLogin} id='Google' className={styles.googleLoginButton}>Google로 로그인</button>
                <button onClick={onLogin} id='Github' className={styles.githubLoginButton}>Github로 로그인</button>
            </div>
        </div>
    );
};

export default Login;