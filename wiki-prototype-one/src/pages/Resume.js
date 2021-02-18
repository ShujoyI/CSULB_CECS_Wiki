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
                    <h1> Crafting your Resume</h1>
                    <h3>A well written resume can help get the attention of hiring managers that may eventually lead to a job offer. Here are a few key resume writing tips that will help you organize and design your resume</h3>
                    <h2>Resume Content</h2>
                    <li>Heading</li>
                    <li>Objective</li>
                    <li>Skills</li>
                    <li>Experience</li>
                    <li>Education covered in detail</li>

                    <h1>Crafting your Cover Letter</h1>
                </div>
            </div>

            
        )
    }
}

export default Resume