import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import app from './firebase';
class AuthService{
    function login(providerName){
        const provider = new [`${providerName}AuthProvider`]();
        const auth = getAuth(app);
        return signInWithPopup(auth, provider)
    }
}

export default AuthService;