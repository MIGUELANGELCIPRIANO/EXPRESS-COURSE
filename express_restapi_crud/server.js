const express = require('express')
const morgan = require('morgan')

const app = express()
const products = []

app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
	res.json(products)
})

app.get('/:id', (req, res) => {
	const product = products.find((product) => product.id == req.params.id)
	product
		? res.json(product)
		: res.status(404).json({ message: 'Product not found' })
})

app.post('/', (req, res) => {
	const newProduct = { ...req.body, id: products.length + 1 }
	products.push(newProduct)
	res.json(newProduct)
})

app.put('/:id', (req, res) => {
	res.json('Updated product')
})

app.delete('/:id', (req, res) => {
	res.json('Product deleted')
})

app.listen(3000)
console.log(`Server listening on port ${3000}`)
