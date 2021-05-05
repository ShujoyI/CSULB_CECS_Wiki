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
            ],
            partTime: [
                { name: 'Roni Allen', title: 'Lecturer', office: 'ECS-525', phone: '562.985.1523', email: 'r.allen@csulb.edu' },
                { name: 'David Brown', title: 'Lecturer', office: 'ECS-524', phone: '', email: 'david.brown@csulb.edu' },
                { name: 'Murray Cappel', title: 'Lecturer', office: 'ECS-520', phone: '', email: 'murray.cappel@csulb.edu' },
                { name: 'Shannon Cleary', title: 'Lecturer', office: 'VEC_403', phone: '', email: 'shannon.cleary@csulb.edu' },
                { name: 'Dan Cregg', title: 'Lecturer', office: '', phone: '', email: 'dan.cregg@csulb.edu' },
                { name: 'Arjang Fahim', title: 'Lecturer', office: 'VEC-404', phone: '', email: 'arjang.fahim@csulb.edu' },
                { name: 'Anthony Giacalone', title: 'Lecturer', office: 'ECS-526', phone: '', email: 'anthony.giacalone@csulb.edu' },
                { name: 'Steve Gold', title: 'Lecturer', office: 'VEC-219E', phone: '562.985.5097', email: 'steven.gold@csulb.edu' },
                { name: 'Arnold Hackett', title: 'Lecturer', office: 'VEC-404', phone: '', email: 'arnold.hackett@csulb.edu' },
                { name: 'Eric Hernandez', title: 'Lecturer', office: 'VEC-403', phone: '', email: 'eric.hernandez@csulb.edu' },
                { name: 'Fei Hoffman', title: 'Lecturer', office: 'ECS-533', phone: '562.985.1523', email: 'fei.hoffman@csulb.edu' },
                { name: 'Claus Jurgensen', title: 'Lecturer', office: 'ECS-530', phone: '', email: 'claus.jurgensen@csulb.edu' },
                { name: 'Malik Luti', title: 'Lecturer', office: '', phone: '', email: 'malik.luti@csulb.edu' },
                { name: 'Jamal Madni', title: 'Lecturer', office: '', phone: '', email: '' },
                { name: 'Alireza Mehrnia', title: 'Lecturer', office: '', phone: '', email: 'alireza.mehrnia@csulb.edu' },
                { name: 'Susan Nachawati', title: 'Lecturer', office: 'VEC-404A', phone: '', email: 'susan.nachawati@csulb.edu' },
                { name: 'Minhthong Nguyen', title: 'Lecturer', office: 'VEC-404', phone: '', email: 'minhthong.nguyen@csulb.edu' },
                { name: 'Mimi Opkins', title: 'Lecturer', office: 'ECS-524', phone: '', email: 'mimi.opkins@csulb.edu' },
                { name: 'Nathan Pickrell', title: 'Lecturer', office: 'VEC-404', phone: '', email: 'nathan.pickrell@csulb.edu' },
                { name: 'Gevik Sardarbegians', title: 'Lecturer', office: 'VEC-403', phone: '', email: 'gevik.sardarbegians@csulb.edu' },
                { name: 'Pouye Sedighian', title: 'Lecturer', office: 'ECS-525', phone: '', email: 'pouye.sedighian@csulb.edu' },
                { name: 'Maryam Seyyedhosseini', title: 'Lecturer', office: 'ECS-524', phone: '', email: 'marya.seyyedhosseini@csulb.edu' },
                { name: 'Ali Sharifian', title: 'Lecturer', office: '', phone: '', email: 'ali.sharifian@csulb.edu' },
                { name: 'Charles Siska', title: 'Lecturer', office: 'VEC-404', phone: '', email: 'charles.siska@csulb.edu' },
                { name: 'Jose Tamayo', title: 'Lecturer', office: 'ECS-305', phone: '', email: 'jose.tamayo@csulb.edu' },
                { name: 'Neal Terrell', title: 'Lecturer', office: 'ECS-526', phone: '', email: 'neal.terrell@csulb.edu' },
                { name: 'Louis Uuh', title: 'Lecturer', office: 'ECS-530', phone: '', email: 'louis.uuh@csulb.edu' },
                { name: 'Katherine Varela', title: 'Lecturer', office: 'ECS-530', phone: '', email: 'katherine.varela@csulb.edu' },
                { name: 'Vatanak Vong', title: 'Lecturer', office: 'VEC-405', phone: '', email: 'vatanak.vong@csulb.edu' },
                { name: 'Dave Winter', title: 'Lecturer', office: 'ECS-525', phone: '', email: 'dave.winter@csulb.edu' },
                { name: 'Pooria Yaghini', title: 'Lecturer', office: 'ECS-524', phone: '', email: 'pooria.yaghini@csulb.edu' }
            ]
        }
    }

    renderTableData(tableToRender) {
        return tableToRender.map((teacher, index) => {
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
                        {this.renderTableData(this.state.teachers)}
                    </tbody>
                </table>
                <p />
                <h1 id='title'>Part-Time Faculty</h1>
                <table id='teachers'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData(this.state.partTime)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table