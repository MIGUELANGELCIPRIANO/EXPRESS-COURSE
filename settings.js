const express = require('express')
const morgan = require('morgan')

const app = express()

//SETTINGS

app.set('appName', 'EXPRESS-COURSE')
app.set('port', 3000)
app.set('case sensitive routing', true)

// MIDDLEWARES

app.use(morgan('dev'))

app.get('/', (req, res) => {
	res.send('Welcome!')
})

app.get('/AboutUs', (req, res) => {
	res.send('About us')
})

app.listen(app.get('port'))
console.log(`${app.get('appName')} server listening on port ${app.get('port')}`)
