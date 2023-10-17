import React, { useState} from "react";
import "../Formulario.css";
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
    const handleLogout=(e)=>{
        e.preventDefault();
        auth.logout();
    };
   
    return(
        <div className="App">
                <div className="form form-center">

            {displayName && <h1>{displayName}</h1>}

            <form className="form">
                <h3 className="title">Register</h3>
                <input onChange={(e)=>setNewDisplayName(e.target.value)}type="text" className="input" />
                <input onChange={(e)=>setEmailRegister(e.target.value)} type="email" className="input"/>
                <input onChange={(e)=> setPasswordRegister(e.target.value)} type="password" className="input" />
                <button onClick={(e)=>handleRegister(e)} className="button">submit</button>
                
            </form>
            <button onClick={(e)=>handleLogout(e)}className="button">Logout</button>
        </div>
        </div>

    );
}
export default FormFirebase;