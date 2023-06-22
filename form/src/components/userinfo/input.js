import Card from "../UI/Card";

import Button from "../UI/button";
import Wrapper from "../wrapper/wrapper";
import classes from './input.module.css'
import React, { useState } from 'react';



const Input=(props)=>{

    // const [values, setValues] = useState({});
    const [error, setError] = useState({});
    const [userName, setuserName]=useState("")
    const [userPassword, setUserPassword]= useState("")
    const [userEmail, setUserEmail]=useState("")

    function isValidEmail(userEmail) {
        return /\S+@\S+\.\S+/.test(userEmail);
    }
   

    const inputHandleSubmit = (event) => {
        event.preventDefault();
        const enteredName = event.current.value;
        const enteredEmail= event.current.value;
        const enteredPassword = event.current.value;

        if(enteredName.trim().length === 0 || enteredEmail.trim() ===0 || enteredPassword.trim() === 0){
            setError({
                title: 'Invalid input',
                message:'Please enter a valid name, Email or Password.'
            });
            return;
        }
       
        if(!new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)){
            setError({
                title:'Invalid Password',
                message:'Enter a valid password'
            });
            return;
        }
        setuserName("");
        setUserEmail("");
        setUserPassword("");
        props.onAddUser(enteredName, enteredEmail, enteredPassword);
    }
    
    const userNameChangeHandler =(event)=>{
        setuserName(event.target.value);
    }

    const userPasswordChangehandler=(event)=>{
        setUserPassword(event.target.value);
        
    }

    const userEmailChangeHandler = (event)=>{
        if (!isValidEmail(event.target.value)) {
            setError('Email is invalid');
          } else {
            setError(null);
          }
      
          setUserEmail(event.target.value);
        };
    

    
    
    
    return(
        <Wrapper>
            {/* {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorhandler}/>} */}
            
            <Card className={classes.input}>
                <form onSubmit={inputHandleSubmit}>                
                    <label htmlfor="">
                        <h1>Login</h1>
                    </label>             
                    
                
                    <label htmlfor="loginUser">User Name</label>
                    <input
                        onChange={userNameChangeHandler}
                        type="text"
                        id="loginUser"
                        name="username"
                        placeholder="Enter your Full Name"
                        value={userName}
                    />               
                    
                    <label htmlfor="loginEmail">Email</label>
                    <input
                        onChange={userEmailChangeHandler}
                        type="text"
                        id="loginpassword"
                        name="password"
                        placeholder="Enter Email Address"
                        value={userEmail}
                        />  
                         {error && <h2 style={{color: 'red'}}>{error}</h2>}      
                
                    <label htmlfor="loginPassword">Password</label>
                    <input
                        onChange={userPasswordChangehandler}
                        type="text"
                        id="loginpassword"
                        name="password"
                        placeholder="Enter Your Password"
                        value={userPassword}
                    />
                    
                    <div>
                        <Button type="submit" className="Button">Login</Button>
                    </div>
                </form>
            </Card>
        </Wrapper >
    )
}
export default Input;