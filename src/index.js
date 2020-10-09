const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const morgan = require('morgan')
const port = 3000
const path = require('path')
const route = require('./routes/index')


//template engine
app.engine('hbs', exphbs({
    extname:'.hbs'
}))
app.set('view engine', 'hbs')

//set folder view
app.set('views', path.join(__dirname, 'resources/views'))

//set static folder
app.use(express.static(path.join(__dirname, 'public')))

//http log
// app.use(morgan('combined'))


route(app)


//start sv
app.listen(port,() => console.log(`Runing at port ${port}`))