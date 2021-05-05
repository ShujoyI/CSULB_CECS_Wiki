import React, { Component } from 'react'
import '../styles/CourseTable.css';

class CourseTable extends Component{
    constructor(props) {
        super(props)
        this.state = {
            courses: [
                {'Semester 1': "CECS 100" , 'Semester 2': "CECS 105", 'Semester 3': "CECS 228", 'Semester 4': "CECS 277"},
                {'Semester 1': "ENGR 101" , 'Semester 2': "CECS 174", 'Semester 3': "CECS 274", 'Semester 4': "CECS 328"},
                {'Semester 1': "" , 'Semester 2': "ENGR 102", 'Semester 3': "CECS 225", 'Semester 4': "CECS 341"}
            ],
            courses2: [
                {'Semester 5': "CECS 229" , 'Semester 6': "EE 381", 'Semester 7': "CECS 491 A", 'Semester 8': "CECS 491 B"},
                {'Semester 5': "CECS 323" , 'Semester 6': "CECS 378", 'Semester 7': "CS Group 1", 'Semester 8': "CS Group 2"},
                {'Semester 5': "CECS 343" , 'Semester 6': "CECS 326", 'Semester 7': "CECS 225", 'Semester 8': "CECS 341"},
                {'Semester 5': "CECS 282" , 'Semester 6': "ENGR 350", 'Semester 7': "ENGR 361", 'Semester 8': "CECS 424"},
                {'Semester 5': "" , 'Semester 6': "CS Group 1", 'Semester 7': "", 'Semester 8': ""}
            ]
        }
    }

    renderTableData() {
        return this.state.courses.map((course, index) => {
            const {'Semester 1' : A , 'Semester 2' : B , 'Semester 3' : C, 'Semester 4' : D} = course
            return (
                <tr key={A}>
                    <td>{A}</td>
                    <td>{B}</td>
                    <td>{C}</td>
                    <td>{D}</td>
                </tr>
            )
        })
    }

    renderTableData2() {
        return this.state.courses2.map((course, index) => {
            const {'Semester 5' : A , 'Semester 6' : B , 'Semester 7' : C, 'Semester 8' : D} = course
            return (
                <tr key={A}>
                    <td>{A}</td>
                    <td>{B}</td>
                    <td>{C}</td>
                    <td>{D}</td>
                </tr>
            )
        })
    }

    renderTableHeader(headerToRender) {
        let header = Object.keys(headerToRender[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
        return (
            <div>
                <table id='courses'>
                    <tbody>
                        <tr>{this.renderTableHeader(this.state.courses)}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
                <p></p>
                
                <table id='courses'>
                    <tbody>
                        <tr>{this.renderTableHeader(this.state.courses2)}</tr>
                        {this.renderTableData2()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CourseTable