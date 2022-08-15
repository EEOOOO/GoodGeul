import React from 'react';
import styles from './login.module.css';
import {useHistory} from 'react-router-dom';

const Login = ({authService}) => {
    const history = useHistory();

    const goToMyGoodGeul = uid => {
        history.push(/MyBooks/uid)
    }
    const handleLogin = (event) => {
        authService.login(event.target.id)
        .then(data => goToMyGoodGeul(datauser.uid));
    }
    return (
        <div className={styles.loginBox}>
            <h1>Good Geul</h1>
            <p>좋은 글, 좋아하는 글, 너의 글 그리고 나의 글</p>
            <div className={styles.loginButtons}>
                <button onClick={handleLogin} id='Google' className={styles.googleLoginButton}>Google로 로그인</button>
                <button onClick={handleLogin} id='Github' className={styles.githubLoginButton}>Github로 로그인</button>
            </div>
        </div>
    );
};

export default Login;