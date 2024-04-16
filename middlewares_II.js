const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.send('Welcome!')
})

app.use((req, res, next) => {
	console.log(`Path: ${req.url} Method: ${req.method}`)
	next()
})

app.use((req, res, next) => {
	req.query.login === 'magicthegathering@email.com'
		? next()
		: res.send('Unauthorised')
})

app.get('/dashboard', (req, res) => {
	res.send('Dashboard')
})

app.listen(3000)
console.log(`Server listening on port ${3000}`)
