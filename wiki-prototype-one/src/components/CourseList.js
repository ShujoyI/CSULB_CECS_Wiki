import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/CourseList.css';
import Course from './Course';
import { Link } from 'react-router-dom';
import axios from "axios";

export function CourseList() {

    const [courseNum, setCourseNum] = useState("")
    const [courseDes, setCourseDes] = useState("")
    const courses = ["ENGR 101", "ENGR 102", "CECS 100", "CECS 105", "CECS 174", "CECS 225", "CECS 228"]

    function setDetails(variableToQuery) {

        const courseNum = variableToQuery;
        const course = {
            courseNum,
        };
      
        axios.post('/create', course);

        axios.get("/selectCourse").then(response => {
            setCourseNum(response.data.courseNumber);
            setCourseDes(response.data.courseDescription);
        });
    }

    function addElement() {

        for (let i = 0; i < courses.length; i++) {
            const newButton = document.createElement("Button");
            newButton.innerHTML = courses[i];
            newButton.className = 'classbtns';
            newButton.onClick = setDetails(courses[i]);
            const currentDiv = document.getElementById('lowerButtonsOne');
            currentDiv.appendChild(newButton);
        }
    }

    return(
        <div className='courseHeaders'>
            <h1>Courses</h1>
            <div className='roadMap'>
                <h2>For information className='course_list_button' on how to build your schedule, check className='course_list_button' out this interactive Road Map.</h2>
                <Link className='roadMapLink' to='/degreeRoadMap'>BeachCS Road Map 2020</Link>
            </div>
            <h2>Below are all CS courses available at CSULB.</h2>
            <h3>* All courses listed under 'lower division' and 'upper division' are mandatory courses.</h3>
            <Course className="selectedCourse" courseNumber={courseNum} courseDescription={courseDes}/>
            <div className='lowerDivision'>
                <h2>Lower Division</h2>
                <div className='lowerDivisionButtonsRowOne' id='lowerButtonsOne'>
                </div>
                <div className='lowerDivisionButtonsRowTwo'>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 274")}>CECS 274</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 277")}>CECS 277</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 282")}>CECS 282</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 229")}>CECS 229</Button>
                    <Button className='course_list_button' onClick={node => setDetails("MATH 122")}>MATH 122</Button>
                    <Button className='course_list_button' onClick={node => setDetails("MATH 123")}>MATH 123</Button>
                </div>
            </div>
            <div className='upperDivision'>
                <h2>Upper Division</h2>
                <div className='upperDivisionButtonsRowOne'>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 323")}>CECS 323</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 326")}>CECS 326</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 327")}>CECS 327</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 328")}>CECS 328</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 341")}>CECS 341</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 343")}>CECS 343</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 378")}>CECS 378</Button>
                </div>
                <div className='upperDivisionButtonsRowTwo'>
                    <Button className='course_list_button' onClick={node => setDetails("ENGR 350")}>ENGR 350</Button>
                    <Button className='course_list_button' onClick={node => setDetails("EE 381")}>EE 381</Button>
                    <Button className='course_list_button' onClick={node => setDetails("ENGR 361")}>ENGR 361</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 342")}>CECS 342</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 491A")}>CECS 491A</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 491B")}>CECS 491B</Button>
                </div>
            </div>
            <div className='elective'>
                <h2>Electives</h2>
                <div className='electiveButtonsRowOne'>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 456")}>CECS 456</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 451")}>CECS 451</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 419")}>CECS 419</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 428")}>CECS 428</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 429")}>CECS 429</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 444")}>CECS 444</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 445")}>CECS 445</Button>
                </div>
                <div className='electiveButtonsRowTwo'>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 448")}>CECS 448</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 449")}>CECS 449</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 455")}>CECS 455</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 450")}>CECS 450</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 453")}>CECS 453</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 470")}>CECS 470</Button>
                </div>
                <div className='electiveButtonsRowThree'>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 475")}>CECS 475</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 476")}>CECS 476</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 478")}>CECS 478</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 495")}>CECS 495</Button>
                    <Button className='course_list_button' onClick={node => setDetails("CECS 497")}>CECS 497</Button>
                    <Button className='course_list_button' onClick={node => setDetails("EE 495")}>EE 495</Button>
                </div>
            </div>
        </div>
    );
}

export default CourseList