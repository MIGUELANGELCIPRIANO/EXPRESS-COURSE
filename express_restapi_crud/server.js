const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => {
	res.send('Landing')
})

app.get('/products', (req, res) => {
	res.send('Product list')
})

app.get('/products/:id', (req, res) => {
	res.send('Product')
})

app.post('/products', (req, res) => {
	res.send('Create product')
})

app.put('/products/:id', (req, res) => {
	res.send('Updated product')
})

app.delete('/products/:id', (req, res) => {
	res.send('Product deleted')
})

app.listen(3000)
console.log(`Server listening on port ${3000}`)
