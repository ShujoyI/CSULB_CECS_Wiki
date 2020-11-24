const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const port = 5000

const app = express();
const SELECT_A_COURSE_QUERY = "SELECT courseName FROM courses WHERE courseName = 'ENGR 101'";

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'greenboy668',
    database: 'react_sql'
});

connection.connect(err => {
    if(err) {
        return err
    }
});

app.use(cors());

app.get('/', (req,res) => res.send('Hello'))

app.listen(port, () => console.log('Example app listening on port ${port}'))

app.get('/selectCourse', (req, res) => {
    connection.query(SELECT_A_COURSE_QUERY, (err, results) => {
        var parsedBody = results[0].courseName;
        return res.json({
            course
        });
        //var parsedBody = JSON.parse(results);
        //var course = parsedBody[0][0];
        //var description = parsedBody["description"];
        // return res.json({
        //     data: results
        // });
        // if(err) {
        //     return res.send(err)
        // }
        // else {
        //     return res.json({
        //         data: results
        //     })    
        // };
    });
})