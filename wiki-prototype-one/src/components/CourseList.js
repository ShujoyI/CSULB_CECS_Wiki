import React, { useState } from 'react';
import { Button } from './Button'
import '../styles/CourseList.css';
import Course from './Course'

function CourseList() {

    const [courseNum, setCourseNum] = useState("")
    const [courseDes, setCourseDes] = useState("")

    function setDetails(num, des) {
        setCourseNum(num);
        setCourseDes(des);
    }

    return(
        <div className='courseHeaders'>
            <h1>Courses</h1>
            <h2>Below are all CS courses available at CSULB.</h2>
            <h3>* All courses listed under 'lower division' and 'upper division' are mandatory courses.</h3>
            <Course className="selectedCourse" courseNumber={courseNum} courseDescription={courseDes}/>
            <div className='lowerDivision'>
                <h2>Lower Division</h2>
                <div className='lowerDivisionButtonsRowOne'>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium' onClick={node => setDetails("ENGR 101", "Introduction to Engineering.")}>ENGR 101</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium' onClick={node => setDetails("ENGR 102", "Introduction to Engineering Part 2.")}>ENGR 102</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium' onClick={node => setDetails("CECS 100", "Introduction to Python.")}>CECS 100</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium' onClick={node => setDetails("CECS 105", "Introduction to Computer Science.")}>CECS 105</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium' onClick={node => setDetails("CECS 174", "Introduction to Object Oriented Programming.")}>CECS 174</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium' onClick={node => setDetails("CECS 225", "Introduction to MIPS Programming.")}>CECS 225</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium' onClick={node => setDetails("CECS 228", "Discrete Mathematics I.")}>CECS 228</Button>
                </div>
                <div className='lowerDivisionButtonsRowTwo'>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 274</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 277</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 282</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 229</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>MATH 122</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>MATH 123</Button>
                </div>
            </div>
            <div className='upperDivision'>
                <h2>Upper Division</h2>
                <div className='upperDivisionButtonsRowOne'>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 323</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 326</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 327</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 328</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 341</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 343</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 378</Button>
                </div>
                <div className='upperDivisionButtonsRowTwo'>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>ENGR 350</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>EE 381</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>ENGR 361</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 342</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 491A</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 491B</Button>
                </div>
            </div>
            <div className='elective'>
                <h2>Electives</h2>
                <div className='electiveButtonsRowOne'>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 456</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 451</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 419</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 428</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 429</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 444</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 445</Button>
                </div>
                <div className='electiveButtonsRowTwo'>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 448</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 449</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 455</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 450</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 453</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 470</Button>
                </div>
                <div className='electiveButtonsRowThree'>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 475</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 476</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 478</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 495</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>CECS 497</Button>
                    <Button className='classbtns' buttonStyle='classbtn' buttonSize='classmedium'>EE 495</Button>
                </div>
            </div>
        </div>
    );
}

export default CourseList