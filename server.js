const express = require('express');
const connectDB = require('./config/db.js');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
