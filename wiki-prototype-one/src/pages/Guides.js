import React, {Component} from 'react'
import '../styles/Guide.css'
import '../App.css'
import 'react-router-dom';

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
            const {comment} = this.state
            return (
                
                <div>
                     <div className="display"> 
                        <div className="student_a" >
                            <h3>Student Affairs </h3>
                            <p>Enhance your professional and personal growth at CSULB. Would you like to know more? </p>
                            <form action="https://web.csulb.edu/divisions/students/">
                                <button className="btng btn1">Show me</button>
                            </form>
                        </div>

                        <div className="clubs" >
                            <h3>Clubs</h3>
                            <p>Find clubs around the university and stay connected with fellow Sharks!

                            </p>
                            <form action="https://www.csulb.edu/sustainability/get-involved/clubs-organizations">
                                <button className="btng btn2">Find Clubs!</button>
                            </form>
                        </div>

                        <div className="tutoring" >
                            <h3>Tutoring Center</h3>
                            <p>Need help? Click below to find tutoring support</p>
                            <form action="https://www.csulb.edu/college-of-engineering/engineering-tutoring">
                                <button className="btng btn3">CSULB TUTORING CENTER</button>
                            </form>
                        </div>
            
                    </div>
                    <h1>Suggestions or Questions?</h1>
                    <p>Leave Comment  {comment}</p>
                    <form onSubmit ={this.handleSubmit}>
                        <p> <input type = 'text'   name= 'name' onChange={this.handleInput} maxLength = '300' className = 'commentTxt'/> </p>
                        <p><button> Submit Comment</button></p>
                    </form>
                </div>
            )
        }

}

export default Guides