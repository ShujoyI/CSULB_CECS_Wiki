import React, { useState } from 'react'
import '../App.css'
import '../styles/Account.css'
import { Button, FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

export default function Account() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    function handleSubmit(event) {
        //history.push('/account');
        // This is where the account information will be retrieved. If the email or password are wrong then the login is unsuccessful.
        if (email === '' || password === '') {
            alert('Please fill out the required fields.');
            event.preventDefault();
        }
        // If the authentication is successful, redirect to administration page.
        else {
            const newEmail = email;
            const newPassword = password;
            const account = {
                newEmail,
                newPassword,
            };
            axios.post('/createLogin', account);
            axios.get("/verifyLogin").then(response => {
                if (response.data.email === email) {
                    console.log('Welcome!');
                    history.push('/login');
                }
                else {
                    alert('FAILURE');
                }
            });
        }
    }

    return (
        <div className='account-hero-section'>
            <form onSubmit={handleSubmit}>
                <FormGroup className='emailGroup' controlID='userEmail'>
                    <FormLabel className='emailLabel'>Email</FormLabel>
                    <FormControl className='emailBox'
                        type="email" 
                        placeholder="Enter email" 
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlID='userPassword'>
                    <FormLabel className='passwordLabel'>Password</FormLabel>
                    <FormControl 
                        type="password"
                        placeholder="Password" 
                        onChange={e => setPassword(e.target.value)}
                    />
                </FormGroup>
                <Button className='login-button' type="login" variant="primary">
                    Login
                </Button>
                <Link to='/register' className='btn-web'>
                    <Button className='register-button'>
                        Register
                    </Button>
                </Link>
            </form>
        </div>
    );
}