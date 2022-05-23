const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");




const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())



// MySQL
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "doctors_appointment",
});

db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("MYSQL Connected......")
    }
})


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
                if (password === result[0].password) {
                    res.send({ message: "Login Successfull", user: result })
                } else {
                    res.send({ message: "Password didn't match" })
                }
            } else {
                res.send({ message: "User doesn't exist" });
            }
        }
    )
});

app.post("/register", (req, res) => {
    const { userName, email, password, role } = req.body
    db.query(
        "INSERT INTO users (userName, email, password, role) VALUES (?,?,?,?)",
        [userName, email, password, role],
        (err) => {
            if (err) {
                res.send(err)
            }
            else {
                res.send({ message: 'Successfully Registered,Please Login Now.' })
            }
        }
    )
});




// app.post("/register", (req, res) => {
//     const { name, email, password } = req.body
//     User.findOne({ email: email }, (err, user) => {
//         if (user) {
//             res.send({ message: "User already registerd" })
//         } else {
//             const user = new User({
//                 name,
//                 email,
//                 password
//             })
//             user.save(err => {
//                 if (err) {
//                     res.send(err)
//                 } else {
//                     res.send({ message: "Successfully Registered, Please login now." })
//                 }
//             })
//         }
//     })

// })




app.post("/doctorProfile", (req, res) => {
    const userName = req.body.userName;
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phone = req.body.phone;
    const address = req.body.address;
    const gender = req.body.gender;
    const birth = req.body.birth;
    const biography = req.body.biography;
    const clinicName = req.body.clinicName;
    const clinicAddress = req.body.clinicAddress;
    const specialization = req.body.specialization;
    const education = req.body.education;
    db.query(
        "INSERT INTO doctors (userName, email, firstName, lastName, phone, address, gender, birth, biography, clinicName,clinicAddress,specialization,education ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [userName, email, firstName, lastName, phone, address, gender, birth, biography, clinicName, clinicAddress, specialization, education],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );

});



app.get('/', (req, res) => {
    res.send('Appointment Server Running');
});

// Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listening on port ${port}`))
