const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hoang dinh hanh 123')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})