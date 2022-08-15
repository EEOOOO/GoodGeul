import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import app from './firebase';
class AuthService{
    login(providerName){
        switch(providerName){
            case 'Google':
                const provider = new GoogleAuthProvider();
                break
            case 'Github':
                const provider = new GithubAuthProvider();
        }
        const auth = getAuth(app);
        return signInWithPopup(auth, provider)
    }
}

export default AuthService;