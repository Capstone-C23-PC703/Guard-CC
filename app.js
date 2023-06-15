const express = require('express');
const app = express();
const educationRoutes = require('./routes/educationRoutes');

// Middleware untuk parsing body dalam format JSON
app.use(express.json());

// Routing
app.use('/api', educationRoutes);

// Server berjalan pada port 3000
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
