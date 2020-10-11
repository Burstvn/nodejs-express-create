const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const morgan = require('morgan')
const port = 3000
const path = require('path')
const route = require('./routes/index')
const db = require('./config/db/index')
const methodOverride = require('method-override')

//template engine
app.engine(
  'hbs',
  exphbs({
    extname: '.hbs',
  })
)

//data connect
db.connect()

app.set('view engine', 'hbs')

//set folder view
app.set('views', path.join(__dirname, 'resources', 'views'))

//set static folder
app.use(express.static(path.join(__dirname, 'public')))

// use middle... bodyParas
app.use(express.urlencoded())
app.use(express.json())

//use override put method
app.use(methodOverride('_method'))

//http log
//app.use(morgan('combined'))

route(app)

//start sv
app.listen(port, () => console.log(`Runing at port ${port}`))
