const express = require('express')

const app = express()

app.get('/products', (req, res) => {
	// Validate data
	// Query database
	// Process data
	res.send('Product list')
})

app.post('/products', (req, res) => {
	res.send('Create product')
})

app.put('/products', (req, res) => {
	res.send('Updated product')
})

app.patch('/products', (req, res) => {
	res.send('Modified product')
})

app.delete('/products', (req, res) => {
	res.send('Product deleted')
})

app.listen(3000)
console.log(`Server listening on port ${3000}`)
