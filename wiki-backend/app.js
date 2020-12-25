const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const port = 5000

const app = express();

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

app.use(
    cors({
        origin: 'http://localhost:3000/',
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let SELECT_A_COURSE_QUERY = ``;
let ADD_ACCOUNT = ``;

function createQuery(selectedCourse) {
    SELECT_A_COURSE_QUERY = `SELECT * FROM courses WHERE courseName = "${selectedCourse.CourseNumber}"`;
}

function addAccount(newAccount) {
    ADD_ACCOUNT = `INSERT INTO administrators(email, password) VALUES("${newAccount.email}", "${newAccount.password}")`;
}

app.post('/create', function(req, res) {
    const newCourse = {
        CourseNumber: req.body.courseNum,
    };
    createQuery(newCourse);
});

app.post('/createAccount', function(req, res) {
    const newAccount = {
        email: req.body.newEmail,
        password: req.body.newPassword,
    };
    addAccount(newAccount);
    connection.query(ADD_ACCOUNT);
});

app.get('/selectCourse', (req, res) => {
    connection.query(SELECT_A_COURSE_QUERY, 
        function(err, results) {
            var courseNumber = results[0].courseName;
            var courseDescription = results[0].description;
            res.send({ courseNumber, courseDescription });
        }
    );
});

app.listen(port, () => console.log(`Example app listening on port "${port}"`));