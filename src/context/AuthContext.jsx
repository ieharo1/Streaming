import {auth} from "../firebase/firebase.config";
import {createContext, useContext} from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup ,signOut} from "firebase/auth";

export const authContext = createContext();
export const useAuth=()=>{
    const context = useContext(authContext);
    if(!context){
        console.log("No creaste el contexto");
    }
    return context;
};
export function AuthProvider({children}){
    const register = async(email, password)=>{
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response)
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
            logout
        }}
        >{children}</authContext.Provider>;
}