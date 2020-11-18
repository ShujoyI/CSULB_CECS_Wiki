import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap';
import { Button } from './Button'

// Hardcoded to display CECS 225 Data
function CourseCard() {
    return (
        <Card>
        <Card.Header>Course Info</Card.Header>
        <Card.Body>
            <Card.Title>CECS 225</Card.Title>
            <Card.Text>
            It's that class where you do MIPS and stuff
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
            <Button 
                className='coursebtns'
                buttonStyle='coursebtn'
                buttonSize='medium'
            >
                Prerequisites
            </Button>
            <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossorigin="anonymous"
            />
        </Card.Body>
        </Card>
    );
}

export default CourseCard
