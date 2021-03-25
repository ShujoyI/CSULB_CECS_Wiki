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
    res.send("DONE");
});

app.post('/createAccount', function(req, res) {
    let newAccount = {
        email: req.body.newEmail,
        password: req.body.newPassword,
    };
    addAccount(newAccount);
    connection.query(ADD_ACCOUNT);
    res.send("DONE");
});

app.post('/createLogin', function(req, res) {
    newLogin = {
        email: req.body.newEmail,
        password: req.body.newPassword,
    };
    createLogin(newLogin);
    res.send("DONE");
});

app.get('/verifyLogin', (req, res) => {
    connection.query(VERIFY_ACCOUNT, 
        function(err, results) {
            try {
                if (newLogin.password != results[0].password) {
                    console.log("Incorrect Password");
                    res.send("INCORRECT PASSWORD");
                }
                else if (newLogin.email === results[0].email && newLogin.password === results[0].password) {
                    var email = results[0].email;
                    console.log("Success");
                    res.send({email});
                }
            }
            catch (TypeError) {
                console.log("Incorrect Email");
                res.send("INCORRECT EMAIL");
            }
        }
    );
});

app.get('/selectCourse', (req, res) => {
    connection.query(SELECT_A_COURSE_QUERY, 
        function(err, results) {
            var courseNumber = results[0].courseName;
            var courseDescription = results[0].description;
            var coursePrerequisites = results[0].prereqs;
            var courseCredits = results[0].credits;
            res.send({ courseNumber, courseDescription, coursePrerequisites, courseCredits });
        }
    );
});

app.get('/events', function (req, res) {
    var sql = 'SELECT * FROM events'
    connection.query(sql, function (err, rows) {
        if (err) {
            res.json({ Error: true, Message: 'Error Execute Sql', err })
        } else {
            // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
            res.json(rows)
        }
    });
});

app.listen(port, () => console.log(`Example app listening on port "${port}"`));