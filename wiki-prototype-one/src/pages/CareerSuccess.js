import { Component } from 'react';
import '../styles/CareerSuccess.css';


class CareerSuccess extends Component {
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
                            <li class="breadcrumb-item">Job Success</li>
                        </ol> 
                    </div>
                        <div className = 'resume-container'>
                            <div className="career-data">
                            <h1 id="career-title"><b>How To Succeed In A New Job</b></h1>
                            <p>What can you do to ensure you keep that job and are viewed in a successful manner? What you most need to remember is that the first few months on your new job really create the impressions people will have of you. So, make those first few months really count - show up every day trying to impress - be professional, hard working and dedicated.</p>
                            <p>Some ideas include: </p>

                            <p><b>Dress for the job.</b> Make sure you dress professionally by examining what other successful people at the company wear to work.</p>
                            <p><b>Develop a plan for the first few months.</b> Develop a plan for what you will do for those first days and months and stick to it. You can't do it all, instead develop some specific goals. </p>
                            <p><b>Remember that you were hired because you are needed. </b> Your boss needes you to be successful so he or she can also be successful. So, think about your hob as a way to help your boss. The same is true for your colleagues. Find out what their greates pain points are - what they really need help with. Then pitch in and help them out, and learn from them. </p>
                            <p><b>Show great initiative -</b> come to work early, stay late, ask colleagues and your boss what you can do. Roll up your sleeves to get the job done, no matter what it is. Do not wait for them to come to you. Go to them and show you are willing to do whatever it takes. This truly sepeartes out the go-getters from the rest of the pack. </p>
                            <p><b>Display a positive, can-do attitude. </b> Show respect to your boss, colleagues, customers and staff. Be polite, calm, and professional in your dealings with others. </p>
                            <p><b>Continue learning. </b> Set goals for the knowledge and skills you will need to develop to Succeed at your job. Maybe you will need additional certifications or training. Identify what these are and then draft your learning development plan. Perhaps most important is to enhance your communication skills - writing, listening, and speaking to various size groups. If this is not what you are good at, then put the time and attention into improving these communication skills. They are critical to all employers. Just ask them!</p>
                            <p><b>Be open-minded and willing to learn and change. </b> Be willing to adjust to new circumstances from the work field. Seek feedack from your boss and coworkers and listen to their constructive comments.</p>
                            <p><b>Be the best in your job as you can be. </b> Keep records of what you have done on the job so you will be prepared to share this with your boss when it is time for your review. He or she may not have seen all of the things you have accomplished.</p>
                            <p><b>Remember, getting a new job is only half the battle. </b> Excelling at it takes some planning, preparation, hardwork and patient. But, the rewards will be worth it!</p>
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

export default CareerSuccess