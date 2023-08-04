const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jmpark2001:Mamba824@ssregistration.ygoattd.mongodb.net/', {
    dbName: 'SSRegistration',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) :
console.log('Connected to SSRegistration database'))

const RegistrationSchema = new mongoose.Schema({
    studentFullName: {
        type: String,
        required: true
    },
    parentFullName: {
        type: String,
        required: true
    },
    studentPhoneNumber: {
        type: Number,
        required: false
    },
    parentPhoneNumber: {
        type: String,
        required: true
    },
    parentEmail: {
        type: String,
        required: true
    },
    homeAddress: {
        type: String,
        required: true
    },
    homeAddress2: {
        type: String,
        required: false
    },
    homeCity: {
        type: String,
        required: true
    },
    homeState: {
        type: String,
        required: true
    },
    homeZip: {
        type: String,
        required: true
    },
    biblicalClass: {
        type: String,
        required: true
    },
    additionalClass: {
        type: String,
        required: false
    }
})
const Registration = mongoose.model('registration', RegistrationSchema)
Registration.createIndexes()

const express = require('express')
const app = express()
const cors = require("cors")
console.log("App listen at port 5000")
app.use(express.json())
app.use(cors())
app.get("/", (req, res) => {
    res.send("App is Working")
})

app.listen(5000)