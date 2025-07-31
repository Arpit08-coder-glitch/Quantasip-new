const express = require('express');
const cors = require('cors');
const path = require('path');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// API Routes
app.post('/api/track-visit', (req, res) => {
  try {
    const { user_id, page } = req.body;
    
    // Log the visit (in production, save to database)
    console.log(`User ${user_id} visited ${page}`);
    
    // Simulate coin reward
    const coinsEarned = Math.floor(Math.random() * 5) + 1;
    
    res.json({
      success: true,
      message: 'Visit tracked successfully',
      coinsEarned,
      totalCoins: Math.floor(Math.random() * 100) + 50 // Mock total
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.get('/api/user/:userId/coins', (req, res) => {
  try {
    const { userId } = req.params;
    
    // Mock coin balance (in production, fetch from database)
    const coinBalance = Math.floor(Math.random() * 100) + 50;
    
    res.json({
      success: true,
      userId,
      coinBalance
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; 