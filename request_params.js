const express = require('express')

const app = express()

app.get('/:user', (req, res) => {
	console.log(typeof req.params.user)
	res.send(`Hello ${req.params.user.toUpperCase()}!`)
})

app.get('/add/:x/:y', (req, res) => {
	const { x, y } = req.params
	console.log(x)
	console.log(y)
	const result = parseInt(x) + parseInt(y)
	console.log(result)
	res.send(`Result: ${result}`)
})

app.listen(3000)
console.log(`Server listening on port ${3000}`)
