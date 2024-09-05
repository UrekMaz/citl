const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const multer = require('multer');  
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 3000;

const User = require('./models/newuser.js');


app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

// Middleware
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
mongoose.connect('mongodb+srv://manual:nrtGC7D6tG2GjS1E@cluster0.60idrdx.mongodb.net/hack_02?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


    app.post('/authorize/login', async (req, res) => {
        const { userId, password } = req.body;
        console.log("user id"+userId);
        console.log("body"+req.body);
        try {
            const user = await User.findOne({ userId });
           
            if (!user) {
                return res.status(400).json({ message: 'Invalid user ID' });
            }
    
            const isMatch = await bcrypt.compare(password, user.passwordHash);
    
            if (isMatch) {
                return res.status(200).json({ message: 'Login successful' });
            } else {
                return res.status(400).json({ message: 'Invalid password' });
            }
        } catch (error) {
            console.error('Login error:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    });
    app.post('/authorize/register', async (req, res) => {
        const { name, email, userId, password, confirmPassword, role } = req.body;
    
        // Validate password match
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }
    
        try {
            // Check if user already exists
            const existingUser = await User.findOne({ userId });
            if (existingUser) {
                return res.status(400).json({ message: 'Username is already taken' });
            }
    
            const existingEmail = await User.findOne({ email });
            if (existingEmail) {
                return res.status(400).json({ message: 'Email is already registered' });
            }
    
   
            const salt = await bcrypt.genSalt(10);
            const passwordHash = await bcrypt.hash(password, salt);
    
            // Create new user
            const newUser = new User({
                name,
                email,
                userId,
                passwordHash,
                role
            });
    
            // Save user to database
            await newUser.save();
    
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            console.error('Registration error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
    

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });