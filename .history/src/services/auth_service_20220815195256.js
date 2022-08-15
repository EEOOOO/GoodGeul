import { getAuth, signInWithPopup,GoogleAuthProvider } from "firebase/auth";

class AuthService{
    login(){
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        return signInWithPopup(auth, provider)
    }
}

export default AuthService;