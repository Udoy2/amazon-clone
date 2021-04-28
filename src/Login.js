
import { Link,useHistory } from 'react-router-dom';
import React, { useState } from 'react'
import './Login.css'
import {auth} from './firebase';
function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const singIn = (e) =>{
        e.preventDefault();

        // some login functionality 
        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }
    const register = (e) => {
        e.preventDefault();

        // do some fancy register
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            // it succcessfully created a new user with email and password
            console.log(auth);
            if (auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <Link to='/'>

                <img
                    className='login__logo' 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"/>
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input 
                    type="text" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input 
                    type="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}/>

                    <button 
                    type='submit'
                    onClick={singIn}
                    className='login__signInButton'>Sign In</button>

                    <p>
                        By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. 
                    </p>

                    <button
                    onClick={register}
                    className='login__registerButton'>Create you amazon account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
