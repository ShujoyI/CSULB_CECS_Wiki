import React from 'react';
import '../App.css';
import '../styles/Minors.css';

export default function Minors() {
    return (
        <div className='minors'>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3" ></div>
                    <div class="col-sm-6" >
                    <div className='minors-headers'>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"> <a href="/">Home</a></li>
                            <li class="breadcrumb-item"> <a href="/academics">Academics</a></li>
                            <li class="breadcrumb-item"> Cyber Security</li>
                        </ol>    
                    </div>
                        <div className = 'minors-container'>
                            <div className="minors-data">
                                <h1 id="minors-title"><b>Minor in Cyber Security Applications</b></h1>
                                <br></br>
                                <h3><b>Why cyber security minor?</b></h3>
                                    <p>There are many reasons for taking on the cybersecurity minor! The minor in cybersecurity is desinged to provide students with cybersecurity skills, which can be an advantage for job seeking and career building, as well as a source of personal enrichment. Students graduating with a degree in computer science or computer engineering with a minor in cybersecurity could expect careers in software engineering, embedded systems engineering, or information systems management, with an emphasis on desingning, developing, operating, or analyzing security features or subsystems. This minor is right for you! This minor consists of 4 requred courses, and 2 additional courses that will let you go deep enough into an area of cybersecurity.</p>
                                <h3><b>What are the requirements?</b></h3>
                                    <p>The requirements for the cybersecurity applications minor are fairly simple they consist of 4 rquires courses as followed:</p>
                                        <li><b>CECS 100 - Critical Thinking in the Digital Information Age</b> (3 units)</li>
                                        <div className="minors-course-description">
                                            <p></p>
                                            <li>Prerequisite/Corequisite: <b>ENGL 100B</b> or <b>GE Written Communication</b></li>
                                            <li>This course aims to teach how to develop critical thinking skills using technical software.</li>
                                            <li>Main topics of the course include: identifying engineering issues for investigation, developing plannining and problem solving strategies, locating pertinent information and examples, critically anaying these sources, forming and testing hypotheses, synthesizing and organizing results for effective communication, and developing trasnferable problem solving skills.</li>
                                        </div>
                                        <p></p>
                                        <li><b>CECS 302 - Introduction to Computer Forensics</b> (3 units)</li>
                                        <div className="minors-course-description">
                                            <p></p>
                                            <li>Prerequisite: <b>CECS 100</b></li>
                                            <li>This course teaches an introduction to principles of digital forensics, evidence collection, preservation and analysis.</li>
                                            <li>The following topics are covered: Ivestigation principles, data acquisition, OS and memory recovery/analysis, computer network forensics, mobile forensics, legal consideration, ethics, digital evidence control and documentation.</li>
                                        </div>
                                        <p></p>
                                        <li><b>CECS 303 - Networks and Network Security</b> (3 units)</li>
                                        <div className="minors-course-description">
                                            <p></p>
                                            <li>Prerequisite: either <b>CECS 278</b> or <b>CECS 378</b>, with a grade of "C" or better</li>
                                            <li>This course teaches an examination of common computer security threats; fundamental techniques for implementing secure software systems and networks; practical experience in attacking and defending networked systems. </li>
                                        </div>
                                        <p></p>
                                        <li><b>JOUR 360 - Cultures and Politics of the Internet</b> (3 units)</li>
                                        <div className="minors-course-description">
                                            <p></p>
                                            <li>Prerequisite: Upper division standing and GE Foundation requirements.</li>
                                            <li>This interdisciplinary course is focused on the culture and politics of the internet. It introduces students to the regulations governing both broadband and mobile services, as well as explores how these policies are shaped.</li>
                                        </div>
                                    <p></p>
                                    <p>One must take one of the following: </p>
                                        <li><b>CECS 378 - Cyber Security Principles</b> (3 units)</li>
                                        <div className="minors-course-description">
                                            <p></p>
                                            <li>Prerequisite: <b>CECS 100</b></li>
                                            <li>This course teaches the following: Principles, mechanisms, implementation, and sound practices of computer security and data protection. Cryptography. Authentication and access control. Internet security. Malicious software. Common vulnerabilites. Practical security in everday life.</li>
                                        </div>
                                        <p></p>
                                        <li><b>CECS 378 - Introduction to Computer Security Principles</b> (3 units)</li>
                                        <div className="minors-course-description">
                                            <p></p>
                                            <li>Prerequisite: <b>CECS 229</b> and <b>CECS 274</b> or <b>CECS 275</b> all with a grade of "C" or better.</li>
                                            <li>This course is an introduction to the fundamentals of cryptography and information and computer security. Basic concepts, theories and protocols in computer security. Basic cryptography, software security, operating system security, database security, network security, human factors, social engineering, digital forensics, privacy and anonymity.</li>
                                        </div>
                                    <p></p>
                                    <p>One must take another from the following:</p>
                                        <li><b>IS 360 - Cybersecurity in Business</b> (3 units)</li>
                                        <div className="minors-course-description">
                                            <p></p>
                                            <li>This course teaches the foundation and business applications of cybersecurity. Principles and methodologies of risk assessment and management. Assurance and internal control. Security operations and administration. Introduction to cybersecurity attacks, threats and vulnerabilities. Regulatory and organizational compliance. Individual project.</li>
                                        </div>
                                        <p></p>
                                        <li><b>IS 456 - System Integration and Security</b> (3 units)</li>
                                        <div className="minors-course-description">
                                            <p></p>
                                            <li>Prerequisite: IS majors only or Computer Science Minors in Cyber Security. Freshmen excluded.</li>
                                            <li>This course teaches technology, application, operating system, infrastructure, and systems integration in internetworking and enterprise networking. Interoperability, mobile system, multimedia, distributed and collaborative systems, network management, fault tolerance, security and middleware. Case studies and hands-on activities.</li>
                                        </div>
                                    <p></p>
                                    <p>Obtaining a minor in Cybersecurity can be an advantage for job seeking and career building </p>
                                    
                            </div>
                        </div>
                    </div>
                <div class="col-sm-3"></div>
            </div>
        </div>
    </div>
    )
}