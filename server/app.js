// Importing of All dependencies
const dotenv = require('dotenv');
const express = require('express');
const bcyrptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();

// Configure ENV File & Require Connection File
dotenv.config({path : './config.env'});
require('./db/conn');
const port = process.env.PORT;

// Require Model
const Users = require('./models/userSchema');
const Message = require('./models/msgSchema');
const Notes = require('./models/notesSchema');
const authenticate = require('./middleware/authenticate');

// These Methods are used to bring data and cookies from frontend
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.get('/', (req, res) =>{
    res.send("Hello World");
})

// Registration
app.post('/register', async(req, res) =>{
    try{
        // Get Body or Data
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
            username : username,
            email : email,
            password : password
        });

        // save method is used to create user or insert user
        //Before saving or inserting, password will Hash coz, of hashing
        //After Hashing it will be stored in DB.
        
        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Registered");
    }
    catch(error){
        res.status(400).send(error);

    }
})

// Login User
app.post('/login', async(req,res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;

        //Find User if exists
        const user = await Users.findOne({email : email});
        if(user){
            // Verify Password
            const isMatch = await bcyrptjs.compare(password, user.password);

            if(isMatch){
                //Generate Token which is defined in user schema
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                    //Expires Token in 24 Hours
                    expires : new Date(Date.now() + 86400000),
                    httpOnly : true
                })
                res.status(200).send("LoggedIn")
            }else{
                res.status(400).send("Invalid Credentials");
            }
        }else{
            res.status(400).send("Invalid Credentials");
        }
    }
    catch(error){
        res.status(400).send(error);
    }
})

// Message
app.post('/message', async(req, res) =>{
    try{
        // Get Body or Data
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;

        const sendMsg = new Message({
            name : name,
            email : email,
            message : message
        });

        // save method is used to create user or insert user
        //Before saving or inserting, password will Hash coz, of hashing
        //After Hashing it will be stored in DB.
        
        const created = await sendMsg.save();
        console.log(created);
        res.status(200).send("Sent");
    }
    catch(error){
        res.status(400).send(error);

    }
})


//Uploading Notes from front end
app.post('/notes', async(req, res) =>{
    try{
        // Get Body or Data
        const title = req.body.title;
        const desc = req.body.desc;
        const upload = req.body.upload;

        const sendNotes = new Notes({
            title : title,
            desc : desc,
            upload : upload
        });

        // save method is used to create user or insert user
        //Before saving or inserting, password will Hash coz, of hashing
        //After Hashing it will be stored in DB.
        
        const created = await sendNotes.save();
        console.log(created);
        res.status(200).send("Sent");
    }
    catch(error){
        res.status(400).send(error);

    }
})




//Logout Page
app.get('/logout', (req, res) => {
    res.clearCookie("jwt", {path : '/'})
    res.status(200).send("User Logged Out")
})

// Authentication
app.get('/auth', authenticate, (req, res) =>{
    
})

// Run server
app.listen(port, ()=>{
    console.log("Server is Listening")
})


// Our backend is done and store data in Database
// Connect FrontEnd with BackEnd

