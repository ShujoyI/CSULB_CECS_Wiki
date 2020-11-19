import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/Card.css';

function Course(props) {

    if (props.courseDescription === "") {
        return (
            <Card className='myCard'>
                <Card.Header className='cardHead'>Course Not Selected Yet</Card.Header>
                    <Card.Body className='cardBody'>
                        <Card.Title className='cardTitle'>{props.courseNumber}</Card.Title>
                        <Card.Text claassName='cardText'>Select a class from the list to learn more about it.</Card.Text>
                    </Card.Body>
            </Card>
        );
    }
    else {
        return (
            <Card className='myCard'>
                <Card.Header className='cardHead'>Course Info</Card.Header>
                    <Card.Body className='cardBody'>
                        <Card.Title className='cardTitle'>{props.courseNumber}</Card.Title>
                        <Card.Text className='cardText'>{props.courseDescription}</Card.Text>
                    </Card.Body>
            </Card>
        );
    }
}

export default Course