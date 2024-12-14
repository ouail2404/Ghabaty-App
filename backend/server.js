const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();  // For reading environment variables

const app = express();
const port = 5000;

// Middleware
app.use(cors()); // Enable CORS to handle requests from the frontend
app.use(express.json()); // Parse incoming JSON requests

// Global Logging Middleware
app.use((req, res, next) => {
  console.log('Request received:', req.method, req.url); // General log for all requests
  next();
});

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/ghabaty', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Test route to check if the server is running
app.get('/', (req, res) => {
  console.log('Home route hit');
  res.send('Hello World');
});

// Signup Route
app.post('/api/signup', async (req, res) => {
  console.log('Route hit: /api/signup'); // Log route hit
  console.log('Request body:', req.body); // Log the parsed request body

  try {
    const { name, email, password } = req.body;
    console.log(`Creating user: ${name}, ${email}`); // Log input values
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    console.log('User saved successfully');
    res.status(201).json({ message: 'User signed up successfully' });
  } catch (error) {
    console.error('Error in /api/signup:', error);
    res.status(400).json({ error: 'Error signing up user' });
  }
});

// Login Route (Generate JWT Token)
app.post('/api/login', async (req, res) => {
  console.log('Login form submitted:', req.body); // Log the incoming login data
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
      // Generate JWT Token
      const token = jwt.sign(
        { userId: user._id, email: user.email, name: user.name },
        process.env.JWT_SECRET_KEY,  // Use the secret key from .env file
        { expiresIn: '7d' } // Token will expire in 7 days
      );
      console.log('Login successful, token generated');
      res.status(200).json({ message: 'User logged in successfully', token });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error logging in user:', error); // Log error details
    res.status(400).json({ error: 'Error logging in user' });
  }
});

app.use('/api/verify-token', (req, res) => {
  // Extract the token from the Authorization header
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      console.error('Token verification failed:', err);
      return res.status(401).json({ error: 'Unauthorized access' });
    }
    req.user = decoded; // Attach decoded token to the request object for further use
    return res.status(200).json({ message: 'Token verified', user: req.user });
  });
});

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
