import { getAuth, signInWithPopup,GoogleAuthProvider } from "firebase/auth";

class AuthService{
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, provider)
}