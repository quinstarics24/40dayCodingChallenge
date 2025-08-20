const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Temporary in-memory storage for users
let users = [];

// Signup route
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    // Simple validation
    if(!name || !email || !password){
        return res.status(400).json({ message: 'Please provide name, email, and password' });
    }

    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    if(existingUser){
        return res.status(409).json({ message: 'User already exists' });
    }

    users.push({ name, email, password });
    res.status(201).json({ message: 'User signed up successfully', users });
});

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(400).json({ message: 'Please provide email and password' });
    }

    const user = users.find(u => u.email === email && u.password === password);

    if(user){
        res.json({ message: `Login successful! Welcome, ${user.name}` });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

// Test route
app.get('/', (req, res) => {
    res.send('Auth API is working!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
