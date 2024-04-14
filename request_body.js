const express = require('express')

const app = express()

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/isAlive', (req, res) => {
	res.sendStatus(204)
})

app.post('/', (req, res) => {
	console.log(req.body)
	res.send('New item created')
})

app.listen(3000)
console.log(`Server listening on port ${3000}`)
