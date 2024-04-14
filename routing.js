const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.send('Welcome!')
})

app.get('/about', (req, res) => {
	res.send('About us')
})

app.use((req, res) => {
	res.status(404).send('Path not found')
})

app.listen(3000)
console.log(`Server listening on port ${3000}`)
