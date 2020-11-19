import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from './Button'

// Hardcoded to display CECS 225 Data
function CourseCard(props) {
    return (
        <Card>
            <Card.Header className='cardHead'>Course Info</Card.Header>
                <Card.Body className='cardBody'>
                    <Card.Title>{props.courseNumber}</Card.Title>
                    <Card.Text>
                        {props.courseDescription}
                    </Card.Text>
                    <Button 
                        className='coursebtns'
                        buttonStyle='coursebtn'
                        buttonSize='medium'
                    >
                        Prerequisites
                    </Button>
                    {/* <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                        crossorigin="anonymous"
                    /> */}
                </Card.Body>
        </Card>
    );
}

export default CourseCard
