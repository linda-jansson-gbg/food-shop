const express = require('express');
const app = express();
const port = 5000;

app.get('/api', (req, res) => {
  const data = require('./products.json');
  res.json({ success: true, data });
});

app.use(express.static('api/public'));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
