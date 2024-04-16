const express = require('express')
const morgan = require('morgan')

const app = express()
let products = []

app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
	res.json(products)
})

app.get('/:id', (req, res) => {
	const product = products.find((product) => product.id == req.params.id) // OR `product.id === parseInt(req.params.id)`
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
	const newData = req.body
	const product = products.find(
		(product) => product.id === parseInt(req.params.id)
	)
	!product
		? (res.status(404).json({ message: 'Product not found' }), null)
		: ((products = products.map((product) =>
				product.id === parseInt(req.params.id)
					? { ...product, ...newData }
					: product
		  )),
		  res.status(200).json({ message: 'Updated product' }))
})

app.delete('/:id', (req, res) => {
	const product = products.find(
		(product) => product.id === parseInt(req.params.id)
	)
	!product
		? (res.status(404).json({ message: 'Product not found' }), null)
		: ((products = products.filter(
				(product) => product.id !== parseInt(req.params.id)
		  )),
		  res.sendStatus(204))
})

app.listen(3000)
console.log(`Server listening on port ${3000}`)
