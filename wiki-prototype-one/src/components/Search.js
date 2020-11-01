import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

function Search () {

    const history = useHistory();
    const [value, setValue] = useState("");

    function handleSubmit(event) {
        // This is where the account information will be retrieved. If the email or password are wrong then the login is unsuccessful.
        if (value === '') {
            alert('Provide a search option');
            event.preventDefault();
        }
        // If the authentication is successful, redirect to administration page.
        else {
            history.push('/SearchPage');
        }
    }

    return (
        <div className='search-hero-section'>
            <form onSubmit={handleSubmit}>
                <FormGroup className='searchGroup' controlID='userEmail'>
                    <FormControl className='searchBox'
                        type="text" 
                        placeholder="Search" 
                        onChange={e => setValue(e.target.value)}
                    />
                </FormGroup>
                <Button className='searchBar' type="submit">
                    Search
                </Button>
            </form>
        </div>
    );
}

export default Search