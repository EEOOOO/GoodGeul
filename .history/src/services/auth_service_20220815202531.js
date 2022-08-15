import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

class AuthService{
    login(providerName){
        const provider = new [`${providerName}AuthProvider`]();
        const auth = getAuth();
        return signInWithPopup(auth, provider)
    }
}

export default AuthService;