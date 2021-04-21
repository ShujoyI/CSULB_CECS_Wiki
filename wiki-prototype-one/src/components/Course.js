import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/CourseList.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Course(props) {

    if (props.courseDescription === "" && props.successors == null) {
        return null;
    }
    
    else if (props.successors == null) {
        return (
            <Card className='myCard'>
                <Card.Header className='cardHead'>Course Info</Card.Header>
                    <Card.Body className='cardBody'>
                        <Card.Title className='cardTitle'>{props.courseNumber}</Card.Title>
                        <Card.Text className='cardDes'>{props.courseDescription}</Card.Text>
                        <Card.Text className='cardPre'>Prequisites: {props.coursePrerequisites}</Card.Text>
                        <Card.Text className='cardCred'>Credits: {props.courseCredits}</Card.Text>
                    </Card.Body>
            </Card>
        );
    }

    else {
        const successors = props.successors;
        return (
            <Card className='myCardRoadMap'>
                <Card.Header className='cardRoadHead'>Course Prerequisites</Card.Header>
                    <Card.Body className='cardRoadBody'>
                        <Card.Title className='cardRoadTitle'>{props.courseNumber}</Card.Title>
                        <Card.Text className='cardSuc'> Courses you can take after are: {
                                successors.map((successor, index) => (
                                    <li key={index}>
                                        {successor}
                                    </li>
                                ))}
                        </Card.Text>
                    </Card.Body>
            </Card>
        );
    }
}

export default Course