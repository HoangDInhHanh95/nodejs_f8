const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('combined'));
const port = 3000

app.get('/', (req, res) => {
  res.send(`
  <h1 style="color:red"> hoang dinh hanh </h1>
  `);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})