const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
    try {
      // Get token from header
      const token = req.header('Authorization')?.replace('Bearer ', '');

      if (!token) {
        return res.status(401).json({ error: 'No token, authorization denied' });
      }

      // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Find user and attach to request
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
        return res.status(401).json({ error: 'Token is not valid' });
      }
  
      req.user = user;
      next();
    } catch (error) {
      if (error.name === 'JsonWebTokenError') {
        return res.status(401).json({ error: 'Token is not valid' });
      }
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  module.exports = auth;