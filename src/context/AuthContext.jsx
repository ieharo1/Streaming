import React, {useState, useEffect}from "react";
import {auth} from "../firebase/firebase.config";
import {createContext, useContext} from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup ,signOut,updateProfile , onAuthStateChanged} from "firebase/auth";

export const authContext = createContext();
export const useAuth=()=>{
    const context = useContext(authContext);
    if(!context){
        console.log("No creaste el contexto");
    }
    return context;
};
export function AuthProvider({children}){
    const [user, setUser]=useState("");
    useEffect(()=>{
        const suscribed = onAuthStateChanged(auth, (currentUser)=>{
            if(!currentUser){
                console.log("No existe usuario");
                setUser("");
            }
            else{
                setUser(currentUser);
            }
        })
        return()=> suscribed();
    },[])
        
    const register = async (email, password, displayName) => {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        if (displayName) {
          // Actualiza el displayName si se proporciona
          await updateProfile(response.user, { displayName: displayName });
        }
        console.log(response);
      };
    const login = async(email,password)=>{
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response)
    };
    const loginGoogle = async()=>{
        const responseGoogle = new GoogleAuthProvider();
        return await signInWithPopup(auth, responseGoogle)
    };
    const logout = async()=>{
        const response = await signOut(auth);
        console.log(response)
    };
    return <authContext.Provider
        value={{
            register,
            login,
            loginGoogle,
            logout,
            user
        }}
        >{children}</authContext.Provider>;
}