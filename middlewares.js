const express = require('express')

const app = express()

app.use(
	(showInfo = (req, res, next) => {
		console.log(`Path: ${req.url} Method: ${req.method}`)
		next()
	})
)

app.all('/', (req, res) => {
	res.send('Welcome')
})

app.listen(3000)
console.log(`Server listening on port ${3000}`)
