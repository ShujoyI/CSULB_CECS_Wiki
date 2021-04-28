import "../styles/Study.css";
import {Link} from "react-router-dom";




const Study = () =>
{
    return(
        <div>
             <h1>Welcome to Study Guides! </h1>
             <h5> Some tips to study effectively   </h5>

                <div className="center">
                   <ul className="tips">
                        <li><b>Get Organized</b>
                            <p>Having a planner and entering homeworks, projects, test, and asssigments can go a long way </p>
                        </li>
                        
                        <li><b>Pay Attention in class</b>
                            <p>We know it is hard lol, but it is important to concentrate and avoid distractions.</p>
                            <p>Practice active listening by concentrating on what is being said and taking notes in your own words.</p>
                        </li>

                        <li><b>Avoid distractions</b>
                            <p>This one is a hard one, be aware of what distracts you in class and know how to steer clear of these distractions</p>
                            <p>If possible, avoid sitting next to friends if you know they will distract you.</p>
                            <p>Turn off your cell phone and again pay attention to the instructor</p>
                        </li>

                        <li><b>Notes should be complete</b>
                            <p>Write clear and complete notes that will help you process the information you are learning.</p>
                            <p>The notes taken will also become study notes that can be reviewed before a test.</p>
                            <p>If possible compare notes to your classmates and talk to the instructor if you have missed notes.</p>
                        </li>
                        <li><b>Ask Quesations</b>
                            <p>If a topic is unclear, raise your hand and ask questions.</p>
                            <p>In the event that you do not feel comfortable asking in front of everyone, remember that you can always</p>
                            <p>talk to the instructor after class or during office hours.</p>
                        </li>
                        <li><b>Make a study plan</b>
                            <p>When making a study schedule, make sure you think about what needs to be accomplished.</p>
                            <p>Set specific goals for each study session, and think about possible test questions.</p>
                        </li>
                        <li><b>Review notes from class every evening</b>
                            <p>Review and expand on the notes before going to bed.</p>
                            <p>Reviewing notes helps move material learned from short-term memory into long-term memory.</p>
                        </li>

                        <li><b>Talk to your Instructors</b>
                            <p>Intructors are there to help you! Talk to them and ask for clarafication or extra help.</p>
                        </li>

                        <li><b>Study in short burts</b>
                            <p>For every 30 minutes you study, take a short 10 to 15 minute break.</p>
                            <p>Short study sessions are more effective and help you make the most of your study time.</p>
                        </li>
                        <li><b>Study with a group</b>
                            <p>Working with classmates encourages an interactive environment, share notes and quiz each other.</p>
                            <p>Ask questions and go over hard topics on the content and try to solve similar problems together.</p>
                        </li>

                    </ul>
                </div>

            <div>
                <h3><Link to='/guides'>Back to Guide</Link></h3>
            </div>
        </div>
    );
}

export default Study;