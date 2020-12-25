import React, { useState } from 'react';
import '../App.css';
import '../styles/Account.css'
import { Button, FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import axios from 'axios';

export default function Register () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        if (email === '' || password === '') {
            alert('Please fill out the required fields.');
            event.preventDefault();
        }
        else {
            const newEmail = email;
            const newPassword = password;
            const account = {
                newEmail,
                newPassword,
            };
            axios.post('/createAccount', account);
            alert('Account creation successful'); 
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
                <Button className='myregister' type='register'>
                    Create Account
                </Button>
            </form>
        </div>
    );
}