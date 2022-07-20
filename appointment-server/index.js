const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


/*------------------------------------------------------------------------------
       Use Multer For Image And File Uploads
--------------------------------------------------------------------------------*/
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
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


/*------------------------------------------------------------------------------
         DataBase Connection With MYSQL    START
--------------------------------------------------------------------------------*/
// MySQL DataBase Connection
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "doctors_appointment",
});

// Check DataBase Connection 
db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("MYSQL Connected......")
    }
})

/*------------------------------------------------------------------------------
         DataBase Connection With MYSQL    End
--------------------------------------------------------------------------------*/


/*------------------------------------------------------------------------------------------------------
         Login Registration All  API Start  (Patient and Doctor API)   START
--------------------------------------------------------------------------------------------------------*/

// Login Doctor || Patient || Admin
app.get("/login/:email", (req, res) => {
    const email = req.params.email;
    db.query(
        `SELECT * FROM users WHERE email = '${email}'`,
        (err, result) => {
            if (err) {
            } else {
                res.json(result);
            }
        }
    );
});

// Register With Doctor || Patient
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
//  Insert Login Doctor More Information
app.post("/addDoctorInfo", upload.single("image"), (req, res) => {
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
    const status = req.body.status;
    db.query(
        "INSERT INTO doctors (userId, firstName, lastName, phone, gender, blood, birth, city, address, specialist, clinic, education, biography,image,status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [userId, firstName, lastName, phone, gender, blood, birth, city, address, specialist, clinic, education, biography, image, status],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );

});
//  Insert Login Patients More Information
app.post("/addPatientInfo", upload.single("image"), (req, res) => {
    const userId = req.body.userId;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phone = req.body.phone;
    const gender = req.body.gender;
    const blood = req.body.blood;
    const birth = req.body.birth;
    const city = req.body.city;
    const address = req.body.address;
    const image = `http://localhost:5000/images/${req.file.filename}`;
    db.query(
        "INSERT INTO patients (userId, firstName, lastName, phone, gender, blood, birth, city, address, image) VALUES (?,?,?,?,?,?,?,?,?,?)",
        [userId, firstName, lastName, phone, gender, blood, birth, city, address, image],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );

});

// Get Login Patient To Another Table
app.get('/patient/:userId', (req, res) => {
    const userId = req.params.userId;
    db.query('SELECT * FROM patients WHERE userId = ?', userId, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

// Get Login Doctor To Another Table
app.get('/doctor/:userId', (req, res) => {
    const userId = req.params.userId;
    db.query('SELECT * FROM doctors WHERE userId = ?', userId, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

// Get Patient By User id
app.get('/singlePatient/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM patients WHERE id = ?', id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});
// Get Doctor By UserID
app.get('/singleDoctor/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM doctors WHERE id = ?', id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});
// Update Patient  Profile
app.put("/patientUpdate/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const keys = Object.keys(data);
    const sqlquery = `UPDATE patients SET ${keys.map(
        (key) => key + " = ?"
    )} WHERE id = ${id}`;

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
// Update Doctor  Profile
app.put("/doctorUpdate/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const keys = Object.keys(data);
    const sqlquery = `UPDATE doctors SET ${keys.map(
        (key) => key + " = ?"
    )} WHERE id = ${id}`;

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

/*------------------------------------------------------------------------------------------------
     Login Registration All  API Start  (Patient and Doctor API)   END
------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
    Total Patient and Doctor Count API Start
-----------------------------------------------------------------------------*/

// Get All Doctor List
app.get("/allDoctors", (req, res) => {
    db.query(
        `SELECT * FROM doctors`,
        (err, result) => {
            if (err) {
            } else {
                res.json(result);
            }
        }
    );
})
// Get All Doctor List
app.get("/allPatients", (req, res) => {
    db.query(
        `SELECT * FROM patients`,
        (err, result) => {
            if (err) {
            } else {
                res.json(result);
            }
        }
    );
})
/*----------------------------------------------------------------------------
    Total Patient and Doctor Count API  End
-----------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------
                         All  Schedule API Start
-----------------------------------------------------------------------------*/
// Get Doctor Schedule Time
app.get("/schedule/:doctorId", (req, res) => {
    const doctorId = req.params.doctorId;
    db.query('SELECT * FROM schedules WHERE doctorId = ?', doctorId, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

//  Add Schedule
app.post("/addSchedule", (req, res) => {
    const doctorId = req.body.doctorId;
    const hospitalName = req.body.hospitalName;
    const location = req.body.location;
    const dateTime = req.body.dateTime;
    db.query(
        "INSERT INTO schedules (doctorId, hospitalName, location, dateTime) VALUES (?,?,?,?)",
        [doctorId, hospitalName, location, dateTime],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );

});
// Delete Schedule
app.delete("/deleteSchedule/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM schedules WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});



// Get Schedule By id
app.get('/singleSchedule/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM schedules WHERE id = ?', id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

// Update schedule
app.put("/updateSchedule/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const keys = Object.keys(data);
    const sqlquery = `UPDATE schedules SET ${keys.map(
        (key) => key + " = ?"
    )} WHERE id = ${id}`;

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

// Get Schedule By Doctor Id
app.get('/doctorSchedule/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM schedules WHERE doctorId = ?', id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});
/*-----------------------------------------------------------------------------
                         All  Schedule API End
-----------------------------------------------------------------------------*/



/*-----------------------------------------------------------------------------
                         All  Appointment Booking  API Start
-----------------------------------------------------------------------------*/
//  AppointMent
app.post("/appointment", (req, res) => {
    const doctorId = req.body.doctorId;
    const doctorName = req.body.doctorName;
    const specialist = req.body.specialist;
    const doctorImg = req.body.doctorImg;
    const patientId = req.body.patientId;
    const patientName = req.body.patientName;
    const patientAge = req.body.patientAge;
    const patientPhone = req.body.patientPhone;
    const patientEmail = req.body.patientEmail;
    const hospitalName = req.body.hospitalName;
    const location = req.body.location;
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;
    const apptDate = req.body.apptDate;
    const bookingDate = req.body.bookingDate
    const status = req.body.status;
    db.query(
        "INSERT INTO appointments (doctorId,doctorName,specialist,doctorImg,patientId, patientName, patientAge, patientPhone, patientEmail,hospitalName, location, startTime, endTime, apptDate,bookingDate, status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [doctorId, doctorName, specialist, doctorImg, patientId, patientName, patientAge, patientPhone, patientEmail, hospitalName, location, startTime, endTime, apptDate, bookingDate, status],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});

app.get("/patientAppointment/:id", (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM appointments WHERE patientId = ?', id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.get('/singleAppointment/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM appointments WHERE id = ?', id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
});

app.get("/doctorAppointment/:id", (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM appointments WHERE doctorId = ${id} `;
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

// Doctor Accept or cancle patient appointment
app.put("/acceptAppointment/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const keys = Object.keys(data);
    const sqlquery = `UPDATE appointments SET ${keys.map(
        (key) => key + " = ?"
    )} WHERE id = ${id}`;

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

app.get("/doctorTodayPatient/:id", (req, res) => {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let MonthName = month[d.getMonth()];
    let year = d.getFullYear();
    let dayNumber = d.getDate();
    let Today = `${dayNumber} ${MonthName} ${year}`
    const id = req.params.id;
    const sql = `SELECT * FROM appointments WHERE doctorId = ${id} AND apptDate= "${Today}" AND status = "Accepted" `;
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})



/*-----------------------------------------------------------------------------
                         All  Appointment Booking  API End
-----------------------------------------------------------------------------*/



app.get('/', (req, res) => {
    res.send('Appointment Server Running');
});

// Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listening on port ${port}`))
