const express = require("express")
const app = express()
const PORT = process.env.PORT || 3002

let counter = 0

app.get('/pingpong', (req, res) => {
  counter = counter + 1
  res.send('pongs ' + counter)
})

app.get('/pingpong/counter', (req, res) => {
  res.send('Ping / Pongs: ' + counter)
})

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})
