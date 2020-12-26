import React, { useState } from 'react'
import '../App.css'
import '../styles/Account.css'
import { Button, FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import { Btton } from '../components/Button';
import axios from 'axios';

export default function Account() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
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
                    alert('SUCCESS');
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
                <Button className='myButton' type="login">
                    Login
                </Button>
                <Btton className='myregister' buttonStyle='register'>
                    Register
                </Btton>
            </form>
        </div>
    );
}