import React, { useState } from "react";
import "../App.css";
import { useAuth } from "../context/AuthContext";
function FormFirebase(){
    const auth=useAuth();
    const [emailRegister, setEmailRegister]=useState("");
    const [passwordRegister, setPasswordRegister]=useState("");
    const handleRegister= (e)=>{
        e.preventDefault()
        auth.register(emailRegister, passwordRegister);
    };
    return(
        <div className="App">
            <form className="form">
                <h3 className="title">Register</h3>
                <input onChange={(e)=>setEmailRegister(e.target.value)} type="email" className="input"/>
                <input onChange={(e)=> setPasswordRegister(e.target.value)} type="password" className="input" />
                <button onClick={(e)=>handleRegister(e)} className="button">submit</button>
            </form>
            <form className="form">
                <h3 className="title">Login</h3>
                <input type="email" className="input" />
                <input type="password" className="input"/>
                <button className="button">submit</button>
                <button className="button">Google</button>
            </form>
            <button className="button">Logout</button>
        </div>
    );
}
export default FormFirebase;