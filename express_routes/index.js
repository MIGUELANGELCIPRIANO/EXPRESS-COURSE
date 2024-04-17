const express = require('express')
const morgan = require('morgan')
const Routes = require('./routes')

const app = express()

app.set('appName', 'EXPRESS-ROUTES')
app.set('port', 3000)
app.set('case sensitive routing', true)

app.use(express.json())
app.use(morgan('dev'))

// Routes(app) // METHOD #1
app.use(Routes) // METHOD #2

app.listen(app.get('port'))
console.log(`${app.get('appName')} server listening on port ${app.get('port')}`)
