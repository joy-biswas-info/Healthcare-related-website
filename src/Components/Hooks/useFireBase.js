import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/initialize";

initializeFirebase();
const useFireBase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        })
        return () => unsubscribe
    }, [])


    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }
    return {
        user,
        logOut,
        signInUsingGoogle,
    }
}
export default useFireBase