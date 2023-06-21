import Card from "../UI/Card";
import Button from "../UI/button";
import Wrapper from "../wrapper/wrapper";
import classes from './input.module.css'

const Input=(props)=>{
    return(
        <Wrapper>
            <Card className={classes.input}>
                <form>                
                    <label htmlfor="">
                        <h1>Login</h1>
                    </label>             
                    
                
                    <label htmlfor="loginUser">User Name</label>
                    <input
                        
                        type="text"
                        id="loginUser"
                        name="username"
                        placeholder="Enter your Full Name"
                    />               
                    
                    <label htmlfor="loginEmail">Email</label>
                    <input
                        
                        type="text"
                        id="loginpassword"
                        name="password"
                        placeholder="Enter Email Address"
                    />              
                
                    <label htmlfor="loginPassword">Password</label>
                    <input
                        
                        type="text"
                        id="loginpassword"
                        name="password"
                        placeholder="Enter Your Password"
                    />
                    
                    <Button type="submit" className="Button">Login</Button>
                </form>
            </Card>
        </Wrapper >
    )
}
export default Input;