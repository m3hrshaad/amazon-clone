import React, {useState} from 'react';
import '../StyleComponents/login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
        .catch(error => alert(error.messages))
        //some fancy firebase login  here
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully create a new user with email and pass
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
        .catch(error => alert(error.messages))
        // do some fancy firebase register
    }

    return (
        <div className='login'>
            <Link to='/' >
                <img className='login_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG21.png" alt="" />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email or mobile phone number</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={ e=> setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn} className="login_signInButton">Sign In</button>
                </form>

                <p>
                By continuing, you agree to Amazon FAKE Conditions of Use and Privacy Notice.
                </p>

                <button onClick={register} className="login_registerButton">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login;
