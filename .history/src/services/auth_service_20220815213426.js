import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import app from './firebase';
class AuthService{
    constructor(){
        this.googleProvider = new GoogleAuthProvider();
        this.githubProvider = new GithubAuthProvider();
    }
    async login(providerName){
        const provider = this.getProvider(providerName);
        
        const auth = getAuth(app);
        return await signInWithPopup(auth, provider)
    }
    getProvider(providerName){
        switch(providerName){
            case 'Google':
                return new GoogleAuthProvider();
            case 'Github':
                return new GithubAuthProvider();
        }
    }
}

export default AuthService;