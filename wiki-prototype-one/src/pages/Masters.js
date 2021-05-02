import React from 'react';
import '../App.css';
import '../styles/Masters.css';

export function Masters() {

    function display(buttonID) {
        var buttonName = ".masters_list_" + buttonID;
        let myButton = document.querySelector(buttonName);
        myButton.classList.toggle('masters_list_' + buttonID + '_active');
    }

    return (
        <div className='masters'>
            <div className='masters-headers'>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"> <a href="/">Home</a></li>
                    <li class="breadcrumb-item"> <a href="/academics">Academics</a></li>
                    <li class="breadcrumb-item"> Applying to Graduate School</li>
                </ol>
            </div>
            <div className='masters-container'>
                <h1><b>CSULB CECS GRADUATE STUDY</b></h1>
                <div className="masters_info_list">
                    <div className='option_one'>
                        <button onClick={node => display("one")} className="masters_list_one"> GENERAL INFORMATION </button>
                        <div className="masters_sub_list_one">
                            <h3>Courses you may take range over a broad spectrum of technological topics, including: </h3>
                            <li>Software Engineering</li>
                            <li>Networks</li>
                            <li>Web Design</li>
                            <li>Game Programming</li>
                            <li>Modeling and Simulation</li>
                            <li>Computer Architecture</li>
                            <li>Artificial Intelligence</li>
                            <li>Computer Graphics</li>
                            <h3>Pursuing a graduate program in Computer Science at CSULB provides the following: advanced study in software development and engineering, networking, operating systems, distributed computing, artificial intelligence, and analysis of algorithms. Students can pursue concentrations in Advanced Systems or Software Development.</h3>
                            <h3>For questions, reach out to the graduate advisor: Bo Fu</h3>
                        </div>
                    </div>
                    <div className='option_two'>
                        <button onClick={node => display("two")} className="masters_list_two"> ADMISSION </button>
                        <div className='masters_sub_list_two'>
                            <h3>For admission, these are the following requirements for graduate applicants: </h3>
                            <li>Have earned a bachelor’s degree from an accredited institution</li>
                            <li>Have been in good standing at the last institution attended</li>
                            <li>Possess a grade point average (GPA) of at least 2.7 for the last 60 semester units (90 quarter units) attempted</li>
                            <li>Optionally, submit a general Graduate Record Examination (GRE) score. (Highly recommended for International Students and students with a GPA below 3.0)</li>
                            <h3>Students may be admitted on a conditional basis, subject to the requirement that they remedy any deficiencies subsequent to admission. Letters of recommendation are not required. There is no separate application for the department.</h3>
                        </div>
                    </div>
                    <div className='option_three'>
                        <button onClick={node => display("three")} className="masters_list_three"> POLICIES </button>
                        <div className='masters_sub_list_three'>
                            <li><b>Transfer units:</b> Students may transfer up to 6 of the 30 units required for the MSCS degree, subject to approval of the CECS graduate advisor. Units earned through the College of Professional & International Education are considered transfer units. No transfer units may be used to fulfill the 21-unit graduate credit requirement.</li>
                            <li><b>7-year limit:</b> All requirements of the MSCS degree must be completed within seven years from the date the first course of the student's approved program was completed.</li>
                            <li><b>Probation:</b> Graduate students are placed on academic probation if they fail to maintain an overall grade-point average of at least 3.0 in all upper division and graduate level courses taken since admission to the degree program. Students who remain on academic probation for more than two consecutive semesters are subject to academic disqualification.</li>
                            <li><b>Graduation Writing Assessment Requirement Exam:</b> Student must demonstrate competency in writing skills as a requirement for graduation, by passing the Graduation Writing Assessment Requirement Exam (GWAR).</li>
                        </div>
                    </div>
                    <div className='option_four'>
                        <button onClick={node => display("four")} className="masters_list"> ELECTIVES </button>
                    </div>
                    <div className='option_five'>
                        <button onClick={node => display("five")} className="masters_list"> COMPREHENSIVE EXAM </button>
                    </div>
                    <div className='option_six'>
                        <button onClick={node => display("six")} className="masters_list"> POLICIES </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Masters;