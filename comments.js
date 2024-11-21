// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Get comments
app.get('/comments', (req, res) => {
    res.json({ comments: 'Comments' });
});

// Listen
app.listen(port, () => {
    console.log(`Comments service listening at http://localhost:${port}`);
});