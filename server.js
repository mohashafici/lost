import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import itemRoutes from './routes/itemRoutes.js'; // You'll define these
import userRoutes from './routes/userRoutes.js'; // Optional


dotenv.config();
connectDB();

const app = express();

app.use(express.json());


// Routes
app.use('/api/items', itemRoutes); // e.g., /api/items
app.use('/api/users', userRoutes); // e.g., /api/users/register



// Error handling middleware (optional, good for debugging)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong', error: err.message });
});

// Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
