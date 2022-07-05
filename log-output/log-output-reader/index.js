import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000
import fetch from 'node-fetch'

const hash = Math.random().toString(36).substr(2, 6)

let timestamp_hash = ''
let pingpongs = ''

async function updateTimestamp() {
  try {
    const res = await fetch('http://localhost:3001/timestamp')
    timestamp_hash = await res.text() + ' ' + hash
    console.log(timestamp_hash)
  } catch (err) {
    console.log(err)
  }
  setTimeout(updateTimestamp, 5000)
}

async function updatePingPongs() {
  try {
    const res = await fetch('http://ping-pong-svc:2345/pingpong/counter')
    pingpongs = await res.text()
    console.log(pingpongs)
  } catch (err) {
    console.log(err)
  }
  setTimeout(updatePingPongs, 5000)
}

updateTimestamp()
updatePingPongs()

app.get('/', async (req, res) => {
  res.send(`<html>${timestamp_hash}<br/>${pingpongs}</html>`)
})
  
app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})

