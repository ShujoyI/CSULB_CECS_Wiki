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
let VERIFY_ACCOUNT = ``;
let newLogin = {};

function createQuery(selectedCourse) {
    SELECT_A_COURSE_QUERY = `SELECT * FROM courses WHERE courseName = "${selectedCourse.CourseNumber}"`;
}

function addAccount(newAccount) {
    ADD_ACCOUNT = `INSERT INTO administrators(email, password) VALUES("${newAccount.email}", "${newAccount.password}")`;
}

function createLogin(newLogin) {
    VERIFY_ACCOUNT = `SELECT * FROM administrators WHERE email = "${newLogin.email}"`;
}

app.post('/create', function(req, res) {
    let newCourse = {
        CourseNumber: req.body.courseNum,
    };
    createQuery(newCourse);
});

app.post('/createAccount', function(req, res) {
    let newAccount = {
        email: req.body.newEmail,
        password: req.body.newPassword,
    };
    addAccount(newAccount);
    connection.query(ADD_ACCOUNT);
});

app.post('/createLogin', function(req, res) {
    newLogin = {
        email: req.body.newEmail,
        password: req.body.newPassword,
    };
    createLogin(newLogin);
});

app.get('/verifyLogin', (req, res) => {
    connection.query(VERIFY_ACCOUNT, 
        function(err, results) {
            if (results[0].password === null) {
                // res.send("EMAIL DOES NOT EXIST")
                console.log("1");
            }
            else if (newLogin.password != results[0].password) {
                // res.send("INCORRECT PASSWORD")
                console.log("2");
            }
            else if (newLogin.email === results[0].email && newLogin.password === results[0].password) {
                var email = results[0].email;
                res.send({email});
            }
        }
    );
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

app.get('/events', function (req, res) {
    var sql = 'SELECT * FROM events'
    connection.query(sql, function (err, rows) {
        if (err) {
            res.json({ Error: true, Message: 'Error Execute Sql', err })
        } else {
            res.json(rows)
        }
    });
});

app.listen(port, () => console.log(`Example app listening on port "${port}"`));