import React, { useState} from "react";
import "../App.css";
import { useAuth } from "../context/AuthContext";


function FormFirebase(){
    const auth=useAuth();
    const {displayName}=auth.user;
    const [emailRegister, setEmailRegister]=useState("");
    const [passwordRegister, setPasswordRegister]=useState("");
    const [newDisplayName, setNewDisplayName] = useState(""); 
    const handleRegister = (e) => {
      e.preventDefault();
      auth.register(emailRegister, passwordRegister, newDisplayName);
    };
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const handleLogin=(e)=>{
        e.preventDefault();
        auth.login(email,password);
    };
    const handleGoogle=(e)=>{
        e.preventDefault();
        auth.loginGoogle();
    };
    const handleLogout=(e)=>{
        e.preventDefault();
        auth.logout();
    };
   
    return(
        <div className="App">
            {displayName && <h1>{displayName}</h1>}

            <form className="form">
                <h3 className="title">Register</h3>
                <input onChange={(e)=>setNewDisplayName(e.target.value)}type="text" className="input" />
                <input onChange={(e)=>setEmailRegister(e.target.value)} type="email" className="input"/>
                <input onChange={(e)=> setPasswordRegister(e.target.value)} type="password" className="input" />
                <button onClick={(e)=>handleRegister(e)} className="button">submit</button>
            </form>
            <form className="form">
                <h3 className="title">Login</h3>
                <input onChange={(e)=> setEmail(e.target.value)}type="email" className="input" />
                <input onChange={(e)=> setPassword(e.target.value)}type="password" className="input"/>
                <button onClick={(e)=> handleLogin(e)} className="button">submit</button>
                <button onClick={(e)=> handleGoogle(e)}className="button">Google</button>
            </form>
            <button onClick={(e)=>handleLogout(e)}className="button">Logout</button>
        </div>
    );
}
export default FormFirebase;