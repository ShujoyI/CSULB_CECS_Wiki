import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/CourseList.css';
//import '../styles/Card.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Course(props) {

    if (props.courseDescription === "" && props.successors == null) {
        return (
            <Card className='myCard'>
                <Card.Header className='cardHead'>Course Not Selected Yet</Card.Header>
                    <Card.Body className='cardBody'>
                        <Card.Text className='cardText'>Select a class from the list to learn more about it.</Card.Text>
                    </Card.Body>
            </Card>
        );
    }
    else if (props.successors == null) {
        return (
            <Card className='myCard'>
                <Card.Header className='cardHead'>Course Info</Card.Header>
                    <Card.Body className='cardBody'>
                        <Card.Title className='cardTitle'>{props.courseNumber}</Card.Title>
                        <Card.Text className='cardDes'>{props.courseDescription}</Card.Text>
                        <Card.Text className='cardPre'>Prequisites: {props.coursePrerequisites}</Card.Text>
                    </Card.Body>
            </Card>
        );
    }

    else {
        const successors = props.successors;
        return (
            <Card className='myCard'>
                <Card.Header className='cardHead'>Course Prerequisites</Card.Header>
                    <Card.Body className='cardBody'>
                        <Card.Title className='cardTitle'>{props.courseNumber}</Card.Title>
                        <Card.Text className='cardText'> Courses you can take after are: {
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