const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

let timestamp = Date()

function updateTimestamp() {
  timestamp = Date()
  setTimeout(updateTimestamp, 5000)
}

updateTimestamp()

app.get('/timestamp', (req, res) => {
  res.send(timestamp)
})
  
app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})

