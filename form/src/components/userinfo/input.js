import Card from "../UI/Card";
import Button from "../UI/button";
import Wrapper from "../wrapper/wrapper";
import classes from './input.module.css'
import React, { useState } from 'react';
import {omit} from 'lodash'


const Input=(callback)=>{

    // const [values, setValues] = useState({});
    const [error, setError] = useState({});
    const [userName, setuserName]=useState("")
    const [userPassword, setUserPassword]= useState("")



    // const validation=(event, name, value)=>{
    //     switch(name){
            
    //         case'username':
    //         if(value.length <= 4){
    //             setError({
    //                 ...error,
    //                 username: 'Username should atleast have 5 letters'
    //             })
    //         }else{
    //             let newObj = omit(error, "username");
    //             setError(newObj);
    //         }
    //         break;

    //         case'email':
    //         if(!new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value))
    //         {
    //             setError({
    //                 ...error,
    //                 email:'Enter a valid email address'
    //             })
    //         }else{
    //             let newObj =(error, "email");
    //             setError(newObj);
    //         }
    //         break;

    //         case'password':
    //         if(!new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value))
    //         {
    //             setError({
    //                 ...error,
    //                 password:'Password should contain atleast 8 char and contain uppercase, lowercase and number'
    //             })
    //         }else{
    //             let newObj = omit(error,"password");
    //             setError(newObj);
    //         }
    //         break;
    //         default: break;
    //     }
    // }

    // const handleChange = (event)=>{
    //     event.preventDefault();
    //     let name = event.target.name;
    //     let val = event.target.value;

    //     validation(event, name, val);
    //     setValues({
    //         ...values,
    //         [name]:val,
    //     })
    // }

   

    const handleSubmit = (event) => {
        if(event) event.preventDefault();
    
        if(Object.keys(error).length === 0 && Object.keys(values).length !==0 ){
           
    
        }else{
            alert("There is an Error!");
        }
    
    }
    return(
        <Wrapper>
            <Card className={classes.input}>
                <form onSubmit={handleSubmit}>                
                    <label htmlfor="">
                        <h1>Login</h1>
                    </label>             
                    
                
                    <label htmlfor="loginUser">User Name</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="loginUser"
                        name="username"
                        placeholder="Enter your Full Name"
                    />               
                    {
                        error.username && <h3>{error.username}</h3>

                    }
                    <label htmlfor="loginEmail">Email</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="loginpassword"
                        name="password"
                        placeholder="Enter Email Address"
                    />  
                    {
                        error.email && <h3>{error.email}</h3>
                    }            
                
                    <label htmlfor="loginPassword">Password</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="loginpassword"
                        name="password"
                        placeholder="Enter Your Password"
                    />
                    {
                        error.password && <h3>{error.password}</h3>
                    }
                    <div>
                        <Button type="submit" className="Button">Login</Button>
                    </div>
                </form>
            </Card>
        </Wrapper >
    )
}
export default Input;