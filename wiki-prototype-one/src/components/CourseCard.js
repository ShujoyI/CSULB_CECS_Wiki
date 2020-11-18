import React from 'react';
import {Button, Card} from 'react-bootstrap';

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
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    );
}

export default CourseCard
