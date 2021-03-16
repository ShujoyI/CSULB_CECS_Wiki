import { Component } from 'react';
import '../styles/Resume.css';

class Resume extends Component {
    render() {
        return(
        <div className='resumeContainer'> 
            <div className='resumeHeaders'>
                <ul class="breadcrumb">
                    <li><a href="/">Home</a></li>
                    <li><a href="career">Career</a></li>
                    <li>Resume</li>
                </ul>
            </div>
            <nav id="navbar-example3" class="navbar navbar-light bg-light">
                <nav class="nav nav-pills flex-column">
                    <a class="nav-link" href="#crafting-resume">Crafting your Resume</a>
                    <nav class="nav nav-pills flex-column">
                        <a class="nav-link ml-3 my-1" href="#contact-information">Contact Information</a>
                        <a class="nav-link ml-3 my-1" href="#resume-content">Resume Content</a>
                        <a class="nav-link ml-3 my-1" href="#education">Education</a>
                        <a class="nav-link ml-3 my-1" href="#skills-section">Skills Section</a>
                        <a class="nav-link ml-3 my-1" href="#work-experience">Work Experience</a>
                        <a class="nav-link ml-3 my-1" href="#projects">Projects</a>
                        <a class="nav-link ml-3 my-1" href="#activites-and-awards">Activities and Awards</a>
                        <a class="nav-link ml-3 my-1" href="#grammar">Avoid Spelling or Grammatical Errors</a>
                    </nav>
                    <a class="nav-link" href="#item-2">Crafting your Cover Letter</a>
                    <nav class="nav nav-pills flex-column">
                        <a class="nav-link ml-3 my-1" href="#item-3-1">Item 3-1</a>
                        <a class="nav-link ml-3 my-1" href="#item-3-2">Item 3-2</a>
                    </nav>
                </nav>
            </nav>

            <div className="Article">
            <div data-spy="scroll" data-target="#navbar-example3" data-offset="0">
                <h1 id="crafting-resume"><b>Crafting your Resume</b></h1>
                    <h5>A well written resume can help get the attention of hiring managers that may eventually lead to a job offer. Here are a few key resume writing tips that will help you organize and design your resume</h5>
                <h2 id="contact-information"><b>Contact Informatio</b>n</h2>
                    <h5>The beginning of your resume should include basic contact information about yourself. Including the following:</h5>
                        <li>Your name</li>
                        <li>Your email</li>
                        <li>Your phone number</li>
                        <li>Linkedin username</li>
                        <li>Github username</li>
                        <li>Personal website</li>
                <h2 id="resume-content"><b>Resume Content</b></h2>
                        <li>Heading</li>
                        <li>Objective</li>
                        <li>Skills</li>
                        <li>Experience</li>
                        <li>Education covered in detail</li>
                    <h5>Using a professional email, then a personal email would be best for your resume and make sure the number listed is the best way to reach you. Make sure you are contactable</h5>
                <h2 id="education"><b>Education</b></h2>
                    <h5>Real world experience matters more than education in computer science. However, brainstorm what you did in school that might turn heads. Making a long list. Even something done around three years ago might dazzle an employer.</h5>
                        <li>Degree Type and graduation date (or expected graduation date)</li>
                        <li>Major</li>
                        <li>University and Location</li>
                        <li>Honors, Awards, and other Academic Achievements (and even GPA if high enough)</li>
                    <h3><b>Computer Science Education Section Examples</b></h3>
                    <h5><b>The following example</b> shows how a computer science engineering student education can look like.</h5>
                    <h5><b>California State University Long Beach</b> Expected: May, 2021</h5>
                    <h5>B.S. in Computer Science</h5>
                        <li>Favorite area of study: Relational Database Management Systems</li>
                        <li>Favorite class: Machine Learning for Better Data Management</li>
                        <li>Extracurricular project: Built a working river level gage from a culvert mounted laser and a Raspberry Pi.</li>
                        <li>Wrote a popular column on coding for the school paper.</li>
                    <h3><b>Promote Your Favorite Classes</b></h3>
                    <h5>Add a couple favorite classes. Add courses you excelled in. Add subjects you’re passionate about. This can help you stand out from other applicants.</h5>
                <h2 id="skills-section"><b>Skills Section</b></h2>
                <h5>Customize the skills section of your resume to match, as much as you can, the requirements listed in the job posting. The closer a match your skills are to the job requirements, the better your chances are for being selected for an interview.</h5>
                <h5>Preferably, if your resume is well crafted, the recruiter should already know what your strong suits are. The skill section is just a quick summary/reiteration. Listing many technologies you claim you know without actually showing how you have worked with them is pointless.</h5>
                <h5><b>Example Skill Section:</b> Languages: Java, Python, C, C++, JavaScript, HTML, CSS, SQL Technologies/Framework: React, Git, Numpy, Matplotlib</h5>
                <h2 id="work-experience"><b>Work Experience</b></h2>
                <h5>The work experience section is the most important section of one’s resume. However, work experience truly means relevant work experience, not any work experience.</h5>
                <h5>If you want to stand out from hundreds of applicants, you need to highlight your achievements, not just outline your duties and responsibilities. You need to provide recruiters an answer to the question “why should we hire you?”</h5>
                
                <h5><b>How much work experience to put on a resume?</b></h5>
                <table>
                
                <tr>
                    <td><h5>Senior-level candidates:</h5></td>
                    <td><h5>List up to 15 years of relevant work experience</h5></td> 
                </tr>
                <tr>
                    <td><h5>Junior-to mid-level candidates:</h5></td>
                    <td><h5>Include detailed job descriptions of relevant positions in your field and a brief mention of other positions: internships, temporary gigs, freelancing</h5></td>
                </tr>
                <tr>
                    <td><h5>Entry-level candidates:</h5></td>
                    <td><h5>List and describe experiences from all paid work you have ever done, including internships, part-time or temporary work, freelancing, independent projects</h5></td> 
                </tr>
                <tr>
                    <td><h5>Candidates with no professional work experience:</h5></td>
                    <td><h5>Include all paid and unpaid work experience: roles in student organizations, practicums, unpaid internships, volunteer experience</h5></td> 
                </tr>
                </table>
                <h2 id="projects"><b>Projects</b></h2>
                <p>...</p>
                <h2 id="activites-and-awards"><b>Activities and Awards</b></h2>
                <p>...</p>
                <h2 id="grammar"><b>Avoid Spelling or Grammatical Errors</b></h2>
                <p>...</p>
            </div>
            </div>
        </div>   
        )
    }
}

export default Resume