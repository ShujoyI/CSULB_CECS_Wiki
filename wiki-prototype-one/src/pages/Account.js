import React, { useState } from 'react'
import '../App.css'
import '../styles/Account.css'
import { useHistory } from 'react-router-dom';
import { FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';

export default function Account() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        // This is where the account information will be retrieved. If the email or password are wrong then the login is unsuccessful.
        if (email === '' || password === '') {
            alert('Login Unsuccessful');
            event.preventDefault();
        }
        // If the authentication is successful, redirect to administration page.
        else {
            history.push('/AdminPage');
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
                <Button className='myButton' type="login">
                    Login
                </Button>
                <Button className='myregister' type="register">
                    Register
                </Button>
            </form>
        </div>
    );
}