import React, { Component } from 'react'
import '../styles/Table.css';

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teachers: [
                { name: 'Mehrdad Aliasgari', title: 'Associate Professor/Chair', office: 'ECS-542', phone: '562.985.7987', email: 'mehrdad.aliasgari@csulb.edu' },
                { name: 'Shadnaz Asgari', title: 'Associate Professor', office: 'ET-112', phone: '562.985.8023', email: 'shadnaz.asgari@csulb.edu' },
                { name: 'Michael Chelian', title: 'Professor/Undergraduate Advisor CE/Web Tech Minor/Cert', office: 'ECS-544', phone: '562.985.1516', email: 'michael.chelian@csulb.edu' },
                { name: 'Todd Ebert', title: 'Associate Professor', office: 'ECS-548', phone: '562.985.1169', email: 'todd.ebert@csulb.edu' },
                { name: 'Bo Fu', title: 'Assistant Professor/Graduate Advisor CS', office: 'ECS-527', phone: '562.985.4386', email: 'bo.fu@csulb.edu' },
                { name: 'Darin Goldstein', title: 'Professor', office: 'ECS-546', phone: '562.985.1507', email: 'darin.goldstein@csulb.edu' },
                { name: 'Forouzan Golshani', title: 'Professor', office: '', phone: '', email: 'forouzan.golshani@csulb.edu' },
                { name: 'Min He', title: 'Associate Professor', office: 'ECS-538', phone: '', email: 'min.he@csulb.edu' },
                { name: 'Michael Hoffman', title: 'Professor', office: 'ECS-533	', phone: '', email: 'm.hoffman@csulb.edu' },
                { name: 'Thomas Johnson', title: 'Professor', office: 'ECS-545', phone: '562.985.1596', email: 'tom.johnson@csulb.edu' },
                { name: 'Shui Lam', title: 'Professor', office: 'ECS-549', phone: '562.985.1552', email: 'shui.lam@csulb.edu' },
                { name: 'Alvaro Monge', title: 'Professor', office: 'ECS-536', phone: '562.985.4671', email: 'alvaro.monge@csulb.edu' },
                { name: 'Ju Cheol Moon', title: 'Assistant Professor', office: 'ECS-532', phone: '562.985.8370', email: 'jucheol.moon@csulb.edu' },
                { name: 'Oscar Morales Ponce', title: 'Assistant Professor/Undergraduate Advisor CS (A-L)/CS Minor', office: 'ECS-543', phone: '562.985.5154', email: 'oscar.morales-ponce@csulb.edu' },
                { name: 'Frank Murgolo', title: 'Professor', office: 'ECS-534', phone: '562.985.5154', email: 'frank.murgolo@csulb.edu' },
                { name: 'Phuong Nguyen', title: 'Lecturer', office: 'VEC-219E', phone: '562.985.5097', email: 'phuong.nguyen@csulb.edu' },
                { name: 'Amin Rezaei', title: 'Assistant Professor', office: 'ECS-528', phone: '', email: 'amin.rezaei@csulb.edu' },
                { name: 'Hossein Sayadi', title: 'Assistant Professor', office: 'ECS-535', phone: '562.985.2563', email: 'hossein.sayadi@csulb.edu' },
                { name: 'Jelena Trajkovic', title: 'Professor', office: 'ECS-539', phone: '562.985.1133', email: 'jelena.trajkovic@csulb.edu' },
                { name: 'Xiaolong Wu', title: 'Associate Professor', office: 'ECS-547', phone: '562.985.2910', email: 'xiaolong.wu@csulb.edu' },
                { name: 'Hailu Xu', title: 'Assistant Professor', office: 'ECS-531', phone: '', email: 'hailu.xu@csulb.edu' },
                { name: 'Wenlu Zhang', title: 'Assistant Professor/Undergraduate Advisor CS (M-Z)/Cybersecurity Applications Minor', office: 'ECS-550', phone: '562.985.4957', email: 'wenlu.zhang@csulb.edu' }
            ]
        }
    }

    renderTableData() {
        return this.state.teachers.map((teacher, index) => {
            const { name, title, office, phone, email } = teacher
            return (
                <tr key={name}>
                    <td>{name}</td>
                    <td>{title}</td>
                    <td>{office}</td>
                    <td>{phone}</td>
                    <td>{email}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.teachers[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
        return (
            <div>
                <h1 id='title'>Full-Time Faculty</h1>
                <table id='teachers'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table