const express = require('express');
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Use Bootstrap CSS
app.use(express.static('node_modules/bootstrap/dist'));

// Route for the dashboard page
app.get('/', (req, res) => {
  res.render('dashboard');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
