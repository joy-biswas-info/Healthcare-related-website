import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/initialize";

initializeFirebase();
const useFireBase = () => {
    const [user, setUser] = useState({});const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
        .finally(()=> setIsLoading(false))
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe
    }, [])


    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
    }
    return {
        user,
        isLoading,
        logOut,
        signInUsingGoogle,
    }
}
export default useFireBase