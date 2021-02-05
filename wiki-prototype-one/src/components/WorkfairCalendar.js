import React, {Component} from "react";
import {Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import '../styles/WorkfairCalendar.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";

const localizer = momentLocalizer(moment)

class WorkfairCalendar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            events: [],
        }
    }

    covertDate = (date) => {
        return moment.utc(date).toDate()
    }

    componentDidMount() {
        axios.get('/events')
          .then(response => {
            console.log(response.data);
            let appointments = response.data;
            
            for (let i = 0; i < appointments.length; i++) {
              
              appointments[i].start = this.convertDate(appointments[i].start)
              appointments[i].end = this.convertDate(appointments[i].end)
              
            }
    
            this.setState({
              events:appointments
            })
      
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render(){
        const {events} = this.state
        return(
            <div className='workfairCalendar-container'> 
                <div style={{ height: 500 }}>
                <Calendar
                    events={events}
                    step={60}
                    showMultiDayTimes
                    defaultDate={moment().toDate()}
                    localizer={localizer}
                /> 
                </div>
            </div>
        )
    }
}

export default WorkfairCalendar