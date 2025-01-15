const express = require('express');
const app = express();

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;

  // Validate userId and handle non-numeric inputs
  if (isNaN(parseInt(userId))) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }

  const parsedUserId = parseInt(userId);

  const user = users.find(user => user.id === parsedUserId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// ... rest of the code
