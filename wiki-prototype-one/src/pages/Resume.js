import { Component } from 'react';
import '../styles/Resume.css';


class Resume extends Component {
    render() {
        return(
            <div className='resume'>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3" ></div>
                    <div class="col-sm-6" >
                    <div className='resumeHeaders'>
                        <ul class="breadcrumb">
                            <li><a href="/">Home</a></li>
                            <li><a href="career">Career</a></li>
                            <li>Resume</li>
                        </ul>
                    </div>
                        <div className = 'resume-container'>
                            <div className="career-data">
                                <h1 id="career-title"><b>Crafting your Resume</b></h1>
                                <p>A well written resume can help get the attention of hiring managers that may eventually lead to a job offer. Here are a few key resume writing tips that will help you organize and design your resume</p>
                                <h2><b>Contact Information</b></h2>
                                <p>The beginning of your resume should include basic contact information about yourself. Including the following:</p>
                                <li>Your name</li>
                                <li>Your email</li>
                                <li>Your phone number</li>
                                <li>Linkedin username</li>
                                <li>Github username</li>
                                <li>Personal website</li>
                                <p></p>
                                <h2 id="resume-content"><b>Resume Content</b></h2>
                                <li>Heading</li>
                                <li>Objective</li>
                                <li>Skills</li>
                                <li>Experience</li>
                                <li>Education covered in detail</li>
                                <p></p>
                                <p>Using a professional email, then a personal email would be best for your resume and make sure the number listed is the best way to reach you. Make sure you are contactable</p>
                                <h2 id="education"><b>Education</b></h2>
                                <p>Real world experience matters more than education in computer science. However, brainstorm what you did in school that might turn heads. Making a long list. Even something done around three years ago might dazzle an employer.</p>
                                <li>Degree Type and graduation date (or expected graduation date)</li>
                                <li>Major</li>
                                <li>University and Location</li>
                                <li>Honors, Awards, and other Academic Achievements (and even GPA if high enough)</li>
                                <p></p>
                                <h3><b>Computer Science Education Section Examples</b></h3>
                                <p><b>The following example</b> shows how a computer science engineering student education can look like.</p>
                                <p><b>California State University Long Beach</b> Expected: May, 2021</p>
                                <p>B.S. in Computer Science</p>
                                <li>Favorite area of study: Relational Database Management Systems</li>
                                <li>Favorite class: Machine Learning for Better Data Management</li>
                                <li>Extracurricular project: Built a working river level gage from a culvert mounted laser and a Raspberry Pi.</li>
                                <li>Wrote a popular column on coding for the school paper.</li>
                                <p></p>
                                <h3><b>Promote Your Favorite Classes</b></h3>
                                <p>Add a couple favorite classes. Add courses you excelled in. Add subjects you’re passionate about. This can help you stand out from other applicants.</p>
                                <h2 id="skills-section"><b>Skills Section</b></h2>
                                <p>Customize the skills section of your resume to match, as much as you can, the requirements listed in the job posting. The closer a match your skills are to the job requirements, the better your chances are for being selected for an interview.</p>
                                <p>Preferably, if your resume is well crafted, the recruiter should already know what your strong suits are. The skill section is just a quick summary/reiteration. Listing many technologies you claim you know without actually showing how you have worked with them is pointless.</p>
                                <p><b>Example Skill Section:</b> Languages: Java, Python, C, C++, JavaScript, HTML, CSS, SQL Technologies/Framework: React, Git, Numpy, Matplotlib</p>
                                <h2 id="work-experience"><b>Work Experience</b></h2>
                                <p>The work experience section is the most important section of one’s resume. However, work experience truly means relevant work experience, not any work experience.</p>
                                <p>If you want to stand out from hundreds of applicants, you need to highlight your achievements, not just outline your duties and responsibilities. You need to provide recruiters an answer to the question “why should we hire you?”</p>
                                <p><b>How much work experience to put on a resume?</b></p>
                                <table>
                                
                                <tr>
                                    <td><p>Senior-level candidates:</p></td>
                                    <td><p>List up to 15 years of relevant work experience</p></td> 
                                </tr>
                                <tr>
                                    <td><p>Junior-to mid-level candidates:</p></td>
                                    <td><p>Include detailed job descriptions of relevant positions in your field and a brief mention of other positions: internships, temporary gigs, freelancing</p></td>
                                </tr>
                                <tr>
                                    <td><p>Entry-level candidates:</p></td>
                                    <td><p>List and describe experiences from all paid work you have ever done, including internships, part-time or temporary work, freelancing, independent projects</p></td> 
                                </tr>
                                <tr>
                                    <td><p>Candidates with no professional work experience:</p></td>
                                    <td><p>Include all paid and unpaid work experience: roles in student organizations, practicums, unpaid internships, volunteer experience</p></td> 
                                </tr>
                                </table>
                                <h2 id="projects"><b>Projects</b></h2>
                                <p>If you don't have relevant work experience, the next best option to have on your resume are projects that you have worked on and completed in a Projects section as they can help show companies your tehnical expertise and background.</p>
                                <p>Working on small projects and then including them in your computer science resume can help you grab the recruiter's attention. This includes school projects, hackathon projects, freelance work, open source contributions, and any other personal programming project.</p>
                                <p>When putting Projects on your resume, follow these guidelines:</p>
                                <li>Have a 1-2 bullets containing the Project's title, descriptiong, and github link of the project.</li>
                                <li>Spend 2-3 bullets about your role within the project, what technolgoies you used, what you learned, etc.</li>
                                <li>Allow the recruited to be able to have a clear understanding of what you did! Limit the use of technical language.</li>
                                <li>Put inforamtion that you can readily talk and answer question about. Anything on your resume is open for discussion so you don't want to be caught off gaurd because you were lying.</li>
                                <p></p>
                                <p>When picking projects to work on, think of your career goals. An entry-level computer science resume with small, focused projects can teleport you in the right direction.</p>
                                <h2 id="activites-and-awards"><b>Activities and Awards</b></h2>
                                <p>If you have extra space on your resume, you may want to fill the empty space with a list of various clubs you are apart of and awards you have won. So, take some time. Brainstorm what you did in school. </p>
                                <h2 id="grammar"><b>Avoid Spelling or Grammatical Errors</b></h2>
                                <p>Your resume is your best chance to present yourself in writing as the ideal candidate for a job, so scruntinize it for accuracy before sending it in. Spelling and grammar are important indicators of a candidate's attention to detail; they highlight defects rather than spotlighting qualities.</p>
                                <p>Five simple ways to avoid spelling and grammar errors:</p>
                                <li>Don't count on spell check (and disable grammar check) </li>
                                <li>Have someone you trust look it over </li>
                                <li>Don't proofread right after you've finished writing </li>
                                <li>Proofread your essay "outload" and "backwards" - from finish to start</li>
                                <li>Use a dictionary </li>
                                <p></p>
                                <h2 id="career-title"><b>Cover Letters</b></h2>
                                <p>A cover letter, also known as a covering letter or application letter, is a single page document that introduces a job seeker's work histroy, professional skills, and personal interest in applying for a job.</p>
                                <p>The purpose of a cover letter is to expand upon the achievements in your resume, showcase your personality, and explain why you'd be a good candiate for the company. Overall, your cover letter (paired with your resume) helps managers and recruiters screen your job application.</p>
                                <p><b>What to include in your cover letter</b></p>
                                <li><b>Introduction:</b> Carefully write to grab the attention of the hiring manager, and expalin why you want the job.</li>
                                <li><b>Body Paragraphs:</b>Usually two paragraphs detailing your relevant education, skills, work experience, and why you are a good fit for the company.</li>
                                <li><b>Conclusion:</b> A concise ending that reiteraites your strenghts, and ask the hiring manager to contact you (known as a call to action).</li>
                                <p></p>
                                <p>Important for your cover letter:</p>
                                <li>Make sure that the cover letter is addressed to the correct person (either the name of the recruiter if it is known, or a generic hiring manager) and company.</li>
                                <li>Avoid spelling or Grammatical errors by running spell check on the document.</li>
                                <p></p>

                            </div>
                        </div>
                    </div>
                <div class="col-sm-3"></div>
            </div>
        </div>
    </div>
        )
    }
}

export default Resume