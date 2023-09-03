import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import { app } from './firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    //registration
    const registration = (email, password, username, useUrl) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                updateProfile(auth.currentUser, {
                    displayName: username,
                    photoURL: useUrl
                })
                    .then(() => {

                    })
                    .catch((error) => {

                    });
                setUser(user);

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
    //google
    const GoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
    }

    //login
    const login = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                //sign in
                const user = result.user;
                setUser(user);
                setLoading(false)
            })
            .catch((error) => {
                const errorMessage = error.message;
            })
    }
    //onauth change
    useEffect(()=>{
        setLoading(true)
        const unSubscribe = onAuthStateChanged(auth, (user)=>{
            setUser(user)
            setLoading(false)
        });
        return ()=>{
            return unSubscribe()
        }
    },[])
    const logout = ()=>{
        signOut(auth).then(() => {
          }).catch((error) => {
          });
    }







    const authInfo = {
        user,
        loading,
        error,
        registration,
        login,
        GoogleSignIn,
        logout,
        

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;