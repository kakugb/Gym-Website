const express = require('express');
const cors = require('cors');
const academyRoutes = require('./routes/academyRoutes');
const studentRoutes = require('./routes/studentRoutes');
const classRoutes = require('./routes/classRoutes');
const authRoutes = require('./routes/authRoutes');
const instructorRoutes =require('./routes/instructorRoutes')

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/academies', academyRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/instructor',instructorRoutes);

// Health check
app.get('/', (req, res) => res.send('Martial Arts API is running'));

module.exports = app;
