import React, {Component} from 'react';
import '../styles/Guide.css';
import '../App.css';
import 'react-router-dom';
import { Link } from 'react-router-dom';


function useEffect()
{
    document.querySelectorAll('.button_list').forEach(button =>
    {
       


            button.classList.toggle('button_list_active');

        
    });
}


class Guides extends Component
    {

      
    
        constructor(props)
        {
            super(props)
            this.state = 
            {
                comment: null

            }
        }

        handleSubmit = (event) =>
        {
                event.preventDefault()
                const data = this.state
                console.log("Final data is ", data)
        }

        handleInput = (event) => 
        {
            event.preventDefault()
            this.setState({[event.target.comment]:event.target.value})
        }

        //need to connect this to back end 
        /*SentToBackend()
        {
            this.setState(
                {comment:null})
        }*/
        
        render()
        {
           
            return (
                
                <div className ="guides_page">
                    <div className = "cards">
                        
                        <div className="display"> 
                            <div className="g_card" >
                                <h3>Student Affairs </h3>
                                <p>Enhance your professional and personal growth at CSULB. Would you like to know more? </p>
                                <form action="https://web.csulb.edu/divisions/students/">
                                    <button className="btng btn1">Show me</button>
                                </form>
                            </div>

                            
                            <div className="g_card" >
                                <h3>Clubs</h3>
                                <p>Find clubs around the university and stay connected with fellow Sharks!

                                </p>
                                <form action="https://www.csulb.edu/sustainability/get-involved/clubs-organizations">
                                    <button className="btng btn2">Find Clubs!</button>
                                </form>
                            </div>

                            <div className="g_card" >
                                <h3>Tutoring Center</h3>
                                <p>Need help? Click below to find tutoring support</p>
                                <form action="https://www.csulb.edu/college-of-engineering/engineering-tutoring">
                                    <button className="btng btn3">CSULB TUTORING CENTER</button>
                                </form>
                            </div>
                
                        </div>
                    
                        <div className = "g_list">
                            <button onClick={useEffect}  className = "button_list" > Some helpful Links! </button>
                            
                                <div className ="sub_list">
                                    <ul>
                                        <li><Link to="/pg_guide">Programming Guides</Link></li>
                                        <li><Link to="/interview_q">Possible interview Questions</Link></li>
                                        <li><Link to='/study_g'>Ways to study!</Link></li>
                                        <li><Link to='/ides_g'>Recommended IDE's </Link></li>
                                        <li><Link to='/motivated'>For Motivation!</Link></li>
                                    </ul>
                                </div>
                            
                        </div>
                       
                       

                    </div>  
                    
                </div>
               
            )
        }

}

export default Guides