const express = require('express')
const morgan = require('morgan')
const path = require('path')
const Routes = require('./routes/routes')
require('ejs')

const app = express()

app.set('appName', 'EXPRESS-ROUTES')
app.set('port', 3000)
app.set('case sensitive routing', true)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.json())
app.use(morgan('dev'))

// Routes(app) // METHOD #1
app.use(Routes) // METHOD #2

app.listen(app.get('port'))
console.log(`${app.get('appName')} server listening on port ${app.get('port')}`)
