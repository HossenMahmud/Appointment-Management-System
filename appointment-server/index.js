const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const { KeyObject } = require("crypto");
const { json } = require("express/lib/response");


const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());



// const UPLOADS_FOLDER = "./uploads/";
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
        // cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname);
        const fileName =
            file.originalname
                .replace(fileExt, "")
                .toLowerCase()
                .split(" ")
                .join("-") +
            "-" +
            Date.now();

        cb(null, fileName + fileExt);
    },
});

const upload = multer({
    storage: storage,
});

app.use("/images", express.static(path.join(__dirname, "public/images")));



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
                    res.send({ error: "Password didn't match" })
                }
            } else {
                res.send({ message: "User doesn't exist" });
            }
        }
    )
});

app.post("/register", (req, res) => {
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;
    db.query(
        "INSERT INTO users (userName, email, password, role) VALUES (?,?,?,?)",
        [userName, email, password, role], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.json(result);
            }
        }
    )
});


app.post("/profile", upload.single("image"), (req, res) => {
    const userId = req.body.userId;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phone = req.body.phone;
    const gender = req.body.gender;
    const blood = req.body.blood;
    const birth = req.body.birth;
    const city = req.body.city;
    const address = req.body.address;
    const specialist = req.body.specialist;
    const clinic = req.body.clinic;
    const education = req.body.education;
    const biography = req.body.biography;
    const image = `http://localhost:5000/images/${req.file.filename}`;

    db.query(
        "INSERT INTO profiles (userId, firstName, lastName, phone, gender, blood, birth, city, address, specialist, clinic, education, biography,image ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [userId, firstName, lastName, phone, gender, blood, birth, city, address, specialist, clinic, education, biography, image],
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
