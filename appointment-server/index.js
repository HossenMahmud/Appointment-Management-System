const express = require("express");
const mysql = require("mysql");
const cors = require("cors");


const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();


app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);

app.use(bodyParser.json())
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
        key: "userId",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    })
);



const port = process.env.PORT || 5000;

// MySQL
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "doctors_appointment",
});


app.post("/adduser", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const role = req.body.role;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }

        db.query(
            "INSERT INTO users (name,email,role,password) VALUES (?,?,?,?)",
            [name, email, role, hash],
            (err, result) => {
                console.log(err);
            }
        )
    })
});


app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
});

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE email = ?;",
        email,
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        req.session.user = result;
                        res.send(result);
                    } else {
                        res.send({ message: "Wrong username/password combination!" });
                    }
                });
            } else {
                res.send({ message: "User doesn't exist" });
            }
        }
    )
});


app.post("/doctorProfile", (req, res) => {
    const data = req.body;

    const keys = Object.keys(data);

    const sqlquery = `INSERT INTO doctors (${keys.map(
        (key) => key
    )}) VALUES (${keys.map((key) => "?")})`;

    const value = keys.map((key) => {
        return data[key];
    });

    db.query(sqlquery, value, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

















app.get('/', (req, res) => {
    res.send('Appointment Server Running');
});

// Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listening on port ${port}`))
