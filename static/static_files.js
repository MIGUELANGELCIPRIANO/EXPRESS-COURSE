const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => {
	res.status(404).send('Path not found')
})

app.use('/public', express.static(path.join(__dirname, 'public')))

app.listen(3000)
console.log(`Server listening on port ${3000}`)
