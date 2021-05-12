import { Component } from 'react';
import '../styles/CareerConquering.css';
import { Link } from 'react-router-dom';


class CareerConquering extends Component {
    render() {
        return(
            <div className='job-success'>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3" ></div>
                    <div class="col-sm-6" >
                    <div className='resumeHeaders'>                        
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"> <a href="/">Home</a></li>
                            <li class="breadcrumb-item"> <a href="/Career">Career</a></li>
                            <li class="breadcrumb-item">Conquering the Career Fair</li>
                        </ol> 
                    </div>
                        <div className = 'resume-container'>
                            <div className="career-data">
                            <h1 id="career-title"><b>Conquering the Career Fair</b></h1>
                            <p></p>
                            <p>Career fairs present an opportunity for you to interact with employers and showcase your skills. Since it can be dauting to present yourself in front of your potential employer, the following are some tips and tricks to help you succeed during the fiar. </p>
                            <h5><b>Clarify your goal</b></h5>
                            <p>You should have a goal in mind when coming to the career fair, whether it is to find information about your job market or to seek an internship or co-op for the sumer. This will help formulate a strategy for your interaction at the fair.</p>
                            <h5><b>Research companies in advance</b></h5>
                            <p>Reviewing the list of employers attending the fair before the event. Search and filter by industry, job type and more! Identify organizations that you want to talk to and make sure to visit them first when you arrive at the fair. Be confident and ask insightful questions.</p>
                            <h5><b>Prepare your pitch</b></h5>
                            <p>Since each employer only has a small window of time to interact with each student, prepare an “elevator pitch” introduction to make a positive and memorable impression. Practice your introduction with friends until you are comfortable with it. </p>
                            <h5><b>Bring your resume</b></h5>
                            <p>Make sure you have enough copies of your resume; bringing betwewen 20 and 30 is usually efficient. Be sure to include your phone number and email address on your resume. If you need to revamp your resume, head <Link to="/resume">here</Link> for help </p>
                            <h5><b>During the event, prioritize your time</b></h5>
                            <p>Highlight and prioritize those you are most interested in so you can organize your time efficiently. If your targeted employer is busy talking with other students, circulate and come back later.</p>
                            <h5><b>First impressions are lasting impressions</b></h5>
                            <p>Dress and act professionally. Your attire and manner carry the first impression. Make direct eye contact and shakehands firmly. Also, remember to smile!</p>
                            <h5><b>Ask appropriate questions</b></h5>
                            <p>Be sure to do your research! You don't want to ask the employers something you can learn from their website. Also, answer questions clearly and concisely. There may be many people in line behindy you, so you don't want to take up too much time. Ask if they are collecting resumes and you will want to follow up on interesting leads. Thank them for their time.  </p>
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

export default CareerConquering